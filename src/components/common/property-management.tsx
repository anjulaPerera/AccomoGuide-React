import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";
import { PublicService } from "../../services/PublicService";
import UserContext from "../../context/UserContext";
import swal from "sweetalert";
import EditPropertyForm from "./EditPropertyForm";
import { environment } from "../../environment/environment";


const PropertyManagement: React.FC = () => {
  const [editingProperty, setEditingProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allProperties, setAllProperties] = useState<any>([]);
  const [user] = useContext(UserContext);
  let user_id = ""
  if(user?._id != undefined){
     user_id = user?._id.toString()
  }
  const handleEdit = (property: any) => {
    console.log("property", property);
    setEditingProperty(property);
    setIsModalOpen(true); // Set the modal open
  };

  const handleDelete = (property:any) =>{
    PublicService.deleteProperty(property,user_id)
      .then(()=>{swal({
        title: "Property Deleted Successfully",
        icon: "success",
      })})
      .catch((err)=>{swal({
        title: "Error",
        text: err,
        icon: "error",
      })})
  }

  const handleUpdate = async (updatedProperty: any) => {
    try {
      console.log("updatedProperty==>", updatedProperty)
      const res = await PublicService.updateProperty(updatedProperty, user_id, updatedProperty._id);

      if (res.success) {
        swal({
          title: 'Success',
          text: 'Property updated successfully!',
          icon: 'success',
        });
      } else {
        swal({
          title: 'Error',
          text: res.error,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error updating property:', error);
      swal({
        title: 'Error',
        text: 'An error occurred while updating the property. Please try again later.',
        icon: 'error',
      });
    } finally {
      setEditingProperty(null);
      setIsModalOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await PublicService.viewProperties(user_id);
        if(res.success){
          for (let i in res.data) {
            res.data[
              i
            ].imageUrl = `${environment.api_url}/${res.data[i].imageUrl}`;
          }
          setAllProperties(res.data);
        }else{
          console.error("Error fetching properties:", res.error);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, [user_id]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Property Management</h1>
        
        <div className="properties">
          <h2>Your Properties</h2>
          
          {
            allProperties.map((property:any) => (
              <div className="property" key={property._id}>
                
                <img src={property.imageUrl} alt={property.title}  className="property-img-list" />

                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p>{property.description}</p>
                  <p>Price: ${property.price}</p>
                  <button onClick={() => handleEdit(property)}>Edit</button>
                  <button onClick={() => handleDelete(property)}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {isModalOpen && (
        <EditPropertyForm
          property={editingProperty}
          onUpdate={handleUpdate}
          onCancel={() => setIsModalOpen(false)} // Close the modal
        />
      )}
    </>
  );
};

export default PropertyManagement;
