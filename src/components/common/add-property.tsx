import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";
import { AuthService } from "../../services/AuthService";
import { PublicService } from "../../services/PublicService";
import UserContext from "../../context/UserContext";
import swal from "sweetalert";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { environment } from "../../environment/environment";


const AddPropertyPage: React.FC = () => {

  const [user] = useContext(UserContext)
  const [position, setPosition] = useState<{ lat: any; lng: any }>({ lat: 0, lng: 0 });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: environment.GOOGLE_MAP_API_KEY
  });

  const handleMarkerDrag = (e: google.maps.MapMouseEvent) => {
    setPosition({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() });
    console.log("Latitude:", e?.latLng?.lat());
    console.log("Longitude:", e?.latLng?.lng());
  };


 
    
  const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    console.log("formData::::::", formData);

    formData.append("location", JSON.stringify(position));
    
    try {
      const userId:string = user?._id || "";
      console.log("userId in add property", userId);
  
      const res = await PublicService.createPost(formData, userId);
      console.log("res:::::", res);
  
      if (res.success) {
        console.log("inside res.success");
        swal({
          title: "Property Added Successfully",
          text: "Your property will be added to the list after warden approval",
          icon: "success",
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
    <>
    <NavBar />
    <div className="container">
        <h1>Add Property</h1>
        <form onSubmit={handleCreatePost} encType="multipart/form-data">
            <label >Title:</label>
            <input type="text" id="title" name="title" required></input>
            <label >Description:</label>
            <textarea id="description" name="description" required></textarea>
            <label >Upload Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required></input>
            <label >Price:</label>
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

    </>
  );
};

export default AddPropertyPage;
