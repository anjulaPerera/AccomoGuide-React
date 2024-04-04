import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/student.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";
import { AdminService } from "../../services/AdminService";
import { environment } from "../../environment/environment";
import Swal from "sweetalert2";
import UserContext from "../../context/UserContext";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const StudentPage: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<any[]>([]);
  const [user] = useContext(UserContext);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isRequestsent, setIsRequestSent] = useState<boolean>(false);

  const position = { lat: 6.9271, lng: 79.8612 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: environment.GOOGLE_MAP_API_KEY,
  });

  const handleReservationReq = (userId: any, postId: any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Request this property?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
        AdminService.sendReservationReq(userId, postId).then((res) => {
          if (res.success) {
            console.log("Propety requested successfully");
            setIsRequestSent(!isRequestsent);
            fetchAdvertisements();
          } else {
            console.error("Failed to request property:", res.message);
          }
        });
      } else {
        console.log("No clicked");
      }
    });
  };

  useEffect(() => {
    fetchAdvertisements();
  }, [refresh]);

  const fetchAdvertisements = async () => {
    try {
      const res = await AdminService.getApprovedPosts({});
      if (res.success) {
        console.log("Advertisements:", res.data);
        for (let i in res.data) {
          res.data[
            i
          ].imageUrl = `${environment.api_url}/${res.data[i].imageUrl}`;
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
      <header>
        <div className="s-tag">
          <h1>Welcome to NSBM Green University Accommodation</h1>
        </div>
      </header>

      {/* <div className="container">
        <h2>Advertisements</h2>
        <div className="advertisements">
            
            <div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
			<div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
			<div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
        </div>
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
                  <button className="approve-btn"  onClick={() => handleReservationReq(ad._id, user?._id)}>Reservation Request</button>
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
                    {isRequestsent ||
                    ad.studentRequest != null ||
                    ad.studentRequest != undefined ||
                    ad.studentRequest === "" ? (
                      <button className="sentReq-btn" disabled>
                        Request Sent
                      </button>
                    ) : (
                      <button
                        className="approve-btn"
                        onClick={() => handleReservationReq(user?._id, ad._id)}
                      >
                        Send Request
                      </button>
                    )}
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
                      lng: parseFloat(ad.location.longitude),
                    }}
                    zoom={14}
                  >
                    <Marker
                      position={{
                        lat: parseFloat(ad.location.latitude),
                        lng: parseFloat(ad.location.longitude),
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

export default StudentPage;
