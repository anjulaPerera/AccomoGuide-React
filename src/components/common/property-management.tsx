import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";
import { PublicService } from "../../services/PublicService";
import UserContext from "../../context/UserContext";
import swal from "sweetalert";
import EditPropertyForm from "./EditPropertyForm";
import { environment } from "../../environment/environment";
import Swal from "sweetalert2";

const PropertyManagement: React.FC = () => {
  const [editingProperty, setEditingProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allProperties, setAllProperties] = useState<any>([]);
  const [user] = useContext(UserContext);
  const[refresh, setRefresh] = useState<boolean>(false);
  let user_id = "";
  if (user?._id != undefined) {
    user_id = user?._id.toString();
  }
  const handleEdit = (property: any) => {
    console.log("property", property);
    setEditingProperty(property);
    setIsModalOpen(true); // Set the modal open
  };

  const handleDelete = (property: any) => {
    console.log("property id from click", property._id);
    console.log("user id from click", user_id);
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Delete this post?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
       PublicService.deleteProperty(property._id,user_id).then((res) => {
         if (!res.success) {
           swal("Error", "Failed to delete property", "error");
         } else {
           swal("Success", "Property deleted successfully", "success");
           setAllProperties(allProperties.filter((p: any) => p._id !== property._id));
         }
       });
      } else {

        console.log("No clicked");
      }
    });
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await PublicService.viewProperties(user_id);
        if (res.success) {
          for (let i in res.data) {
            res.data[
              i
            ].imageUrl = `${environment.api_url}/${res.data[i].imageUrl}`;
          }
          setAllProperties(res.data);
        } else {
          console.error("Error fetching properties:", res.error);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, [user_id,refresh]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Property Management</h1>

        <div className="properties">
          <h2>Your Properties</h2>

          {allProperties.map((property: any) => (
            <div className="property" key={property._id}>
              <img
                src={property.imageUrl}
                alt={property.title}
                className="property-img-list"
              />

              <div className="property-details">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p>Price: Rs.{property.price}</p>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    handleEdit(property);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(property)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <EditPropertyForm
          postId={editingProperty._id}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PropertyManagement;
