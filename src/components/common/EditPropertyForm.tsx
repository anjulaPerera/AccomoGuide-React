import React, { useState } from 'react';
import { PublicService } from '../../services/PublicService';
import swal from 'sweetalert';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { environment } from '../../environment/environment';
import "../vendors/styles/landlord.css";

// Define a functional component for editing property
const EditPropertyForm: React.FC<{
  property: any;
  onUpdate: (updatedProperty: any) => void;
  onCancel: () => void;
}> = ({ property, onUpdate, onCancel }) => {
  const [updatedProperty, setUpdatedProperty] = useState<any>({ ...property });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedProperty({ ...updatedProperty, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      await onUpdate(updatedProperty);
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };
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
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      const fileName = `uploads/${file.name}`; // Concatenate with desired path
      setUpdatedProperty({ ...updatedProperty, imageUrl: fileName });
    }
  };
  

  return (
    <div className="modal edit_modal">
      <div className="modal-content">
        <span className="close" onClick={onCancel}>&times;</span>
        <h2>Edit Property</h2>
     
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Title:</label>
          <input type="text" id="title" name="title" value={updatedProperty.title} onChange={handleInputChange} required></input>
          <label>Description:</label>
          <textarea id="description" name="description" value={updatedProperty.description} onChange={handleInputChange} required></textarea>
          <label>Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />


          <label>Price:</label>
          <input type="number" id="price" name="price" min="0" value={updatedProperty.price} onChange={handleInputChange} required></input>
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
