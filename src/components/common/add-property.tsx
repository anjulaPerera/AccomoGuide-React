import React from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";


const AddPropertyPage: React.FC = () => {
    
  return (
    <>
    <NavBar />
    <div className="container">
        <h1>Add Property</h1>
        <form method="post" encType="multipart/form-data">
            <label >Title:</label>
            <input type="text" id="title" name="title" required></input>
            <label >Description:</label>
            <textarea id="description" name="description" required></textarea>
            <label >Upload Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required></input>
            <label >Price:</label>
            <input type="number" id="price" name="price" min="0" required></input>
            <div id="google-map"></div>

            <button type="submit">Add Property</button>
        </form>
    </div>

    </>
  );
};

export default AddPropertyPage;
