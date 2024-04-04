import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/warden.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { environment } from "../../environment/environment";
import { AdminService } from "../../services/AdminService";
import UserContext from "../../context/UserContext";
import swal from "sweetalert";
import Swal from "sweetalert2";


// import "../vendors/styles/login.css";

const WardenPage: React.FC = () => {
  
  const [advertisements, setAdvertisements] = useState<any[]>([]);
  const [user] = useContext(UserContext);
  const [refresh, setRefresh] = useState<boolean>(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: environment.GOOGLE_MAP_API_KEY
  });

  const handleApproval = (postId:any, userId:any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Approve this post?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
        AdminService.approvePostByWarden(postId, userId).then((res) => {
          if (res.success) {
            console.log("Post approved successfully");
            fetchAdvertisements();
          } else {
            console.error("Failed to approve post:", res.message);
          }
        })
      } else {

        console.log("No clicked");
      }
    });

  };
  const handleRejection = (postId:any, userId:any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Reject this post?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
        AdminService.rejectPostByWarden(postId, userId).then((res) => {
          if (res.success) {
            console.log("Post rejected successfully");
            fetchAdvertisements();
          } else {
            console.error("Failed to reject post:", res.message);
          }
        })
      } else {
        console.log("No clicked");
      }
    });
  }


  useEffect(() => {
    fetchAdvertisements();
  }, [refresh]);

  const fetchAdvertisements = async () => {
    try {
      const res = await AdminService.getPostsToApprove({});
      if (res.success) {
        console.log("Advertisements:", res.data);
        for (let i in res.data) {
          res.data[i].imageUrl = `${environment.api_url}/${res.data[i].imageUrl}`
        }
        console.log("Advertisements after amendment of image url:", res.data);
        setAdvertisements(res.data);
      } else {
        console.error("Failed to fetch advertisements:", res.message);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };

  return (
    <>
      <NavBar />
      {/* <div className="container">
        <h1>Advertisements</h1>
        <div className="advertisements">
          <div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1" />
            <div className="details">
              <h2>Property Title</h2>
              <p>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
              <p>Price: 10000/month</p>
              <div className="buttons">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>
        </div>

        <div id="map"></div>
      </div> */}
      <div className="ad-container shadow">
        <h1 className="ad-container-title">Advertisements</h1>
          <div className="ads-wrapper">
            {/* <div className="ad-card">
              <div className="ad-left"><h3 className="ad-title">Property 123</h3>
              <div className="ad-img">
                <img src={home} alt="" />
              </div>
              <div className="ad-details">
                <p className="ad-description">hey prop</p>
                <p className="ad-price">Price : 121212</p>
                <div className="ad-buttons">
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </div>
              </div></div>
              <div className="ad-right">
              {
              isLoaded ? (
                <GoogleMap
                  id="map"
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={position}
                  zoom={14}
                >
                  <Marker
                    position={position}

                  />
                </GoogleMap>
              ) : <></>
          }
              </div>
            </div> */}
            {advertisements.map((ad, index) => (
            <div className="ad-card" key={index}>
              <div className="ad-left">
                <h3 className="ad-title">{ad.title}</h3>
                <div className="ad-img">
                  <img src={ad.imageUrl} alt={ad.title} />
                </div>
                <div className="ad-details">
                  <p className="ad-description">{ad.description}</p>
                  <p className="ad-price">Price : {ad.price}</p>
                  <div className="ad-buttons">
                    <button className="approve-btn" onClick={() => handleApproval(ad._id, user?._id)}>Approve</button>
                    <button className="reject-btn" onClick={() => handleRejection(ad._id, user?._id)}>Reject</button>
                  </div>
                </div>
              </div>
              <div className="ad-right">
                {isLoaded ? (
                  <GoogleMap
                    id={`map-${index}`}
                    mapContainerStyle={{ width: "100%", height: "400px" }}
                    center={{
                      lat: parseFloat(ad.location.latitude),
                      lng: parseFloat(ad.location.longitude)
                    }}
                    zoom={14}
                  >
                    <Marker
                      position={{
                        lat: parseFloat(ad.location.latitude),
                        lng: parseFloat(ad.location.longitude)
                      }}
                    />
                  </GoogleMap>
                ) : (
                  <div>Loading map...</div>
                )}
              </div>
            </div>
          ))}
          </div>
        
      </div>
    </>
  );
};

export default WardenPage;
