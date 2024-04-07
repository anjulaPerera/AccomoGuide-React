import React, { useContext, useEffect, useState } from 'react';
import { PublicService } from '../../services/PublicService';
import swal from 'sweetalert';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { environment } from '../../environment/environment';
import "../vendors/styles/landlord.css";
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

// Define a functional component for editing property
const EditPropertyForm: React.FC<{
  postId: string;

  onCancel: () => void;
}> = ({ postId, onCancel }) => {
    const history = useHistory(); // Use useHistory hook

    const [user] = useContext(UserContext);
    const [position, setPosition] = useState<{ lat: any; lng: any }>({ lat: 0, lng: 0 });
    const [refresh, setRefresh] = useState<boolean>(false);


useEffect(() => {
    console.log("postId in edit property", postId);
},[refresh])

    console.log("postId in edit property", postId);
  
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: environment.GOOGLE_MAP_API_KEY
    });
  
    const handleMarkerDrag = (e: google.maps.MapMouseEvent) => {
        const latitude = e?.latLng?.lat();
        const longitude = e?.latLng?.lng();
      
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      
        setPosition({ lat: latitude, lng: longitude });
      };
  
    const handleUpdatePost = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      console.log("formData::::::", formData);

      console.log("position::::::", position);
  
      formData.append("location", JSON.stringify(position));
  
      try {
        const userId: string = user?._id || "";
        console.log("userId in add property", userId);
  
        const res = await PublicService.updateProperty(formData, userId, postId);
        console.log("res:::::", res);
  
        if (res.success) {
            setRefresh(!refresh)
          console.log("inside res.success");
          swal({
            title: "Property Added Successfully",
            text: "Your property will be added to the list after warden approval",
            icon: "success",
          }).then(() => {
            history.push("/accomo/landlord/dashboard"); // Use history.push to navigate to another page
          });
        } else {
          swal({
            title: "Error",
            text: res.error,
            icon: "error",
          });
          console.log("error======", res.error);
        }
      } catch (error) {
        swal({
          title: "Error",
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
        console.log("error++++++", error);
      }
    };
  

  return (
    <div className="modal edit_modal">
      <div className="modal-content">
        <span className="close" onClick={onCancel}>&times;</span>
        <h2>Edit Property</h2>
     
        <form onSubmit={handleUpdatePost} encType="multipart/form-data">
          <label>Title:</label>
          <input type="text" id="title" name="title" required></input>
          <label>Description:</label>
          <textarea id="description" name="description" required></textarea>
          <label>Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" required></input>
          <label>Price:</label>
          <input type="number" id="price" name="price" min="0" required></input>
          <div id="google-map">
            {
              isLoaded ? (
                <GoogleMap
                  id="map"
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={{ lat: 6.8215208451737075, lng: 80.04150852202173 }}
                  zoom={14}
                  onClick={(e) => setPosition({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() })}
                >
                  <Marker
                    position={position}
                    draggable={true}
                    onDragEnd={handleMarkerDrag}
                  />
                </GoogleMap>
              ) : <></>
            }
          </div>

          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default EditPropertyForm;
