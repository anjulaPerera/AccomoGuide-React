import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";
import { AdminService } from "../../services/AdminService";
import UserContext from "../../context/UserContext";
import Swal from "sweetalert2";


const StudentRequest: React.FC = () => {
  const [user] = useContext(UserContext);
  const [posts, setPosts] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    fetchAdvertisements();
  }, [refresh]);

  const fetchAdvertisements = async () => {
    try {
      const res = await AdminService.getPostsByUserWithStudentRequests(user?._id);
      if (res.success) {
        console.log("Advertisements:", res.data);
        const iterableData = res.data;
        for (let i in iterableData) {
          console.log("requested by", iterableData[i].studentRequest.requestedBy)
         AdminService.getUserById(iterableData[i].studentRequest.requestedBy).then((res) => {
          if(res.success){
            console.log("inside success")
            iterableData[
              i
            ].studentRequest.studentName = res.data.name;
            console.log("iterableData",iterableData)
            setPosts([...iterableData]);
          }
         })

          
        }

      } else {
        console.error("Failed to fetch advertisements:", res.message);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };
  const handleAccept = (postId:any, landlordId:any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Accept this request?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
        AdminService.acceptByLandLord(postId, landlordId).then((res) => {
          if (res.success) {
            console.log("Request Accepted");
            fetchAdvertisements();
            setRefresh(!refresh)
          } else {
            console.error("Failed to accept request:", res.message);
          }
        })
      } else {

        console.log("No clicked");
      }
    });

  };
  const handleReject = (postId:any, landlordId:any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Do you need to Reject this request?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      setRefresh(!refresh);
      if (result.isConfirmed) {
        AdminService.rejectByLandLord(postId, landlordId).then((res) => {
          if (res.success) {
            console.log("Request Rejected");
            fetchAdvertisements();
            setRefresh(!refresh)
          } else {
            console.error("Failed to reject request:", res.message);
          }
        })
      } else {

        console.log("No clicked");
      }
    });

  };

  return (
    <>
    <NavBar />
    <div className="container">
        <h2 className="mb-3 fw-800">Student Requests Management</h2>
        
        <div className="requests">
     {
      posts.map((post,index) => (
        
        <div className="request-card" key={index}>
            <h4 >Requested By: {post.studentRequest.studentName}</h4>
            <p>Requested Property: {post.title}</p>
            <button  onClick={() => handleAccept(post._id,user?._id)}>Accept</button>
            <button className="rej-btn" onClick={() => handleReject(post._id,user?._id)}>Reject</button>
        </div>
      ))
     }
            
            {/* <div className="request-card">
                <h3 >Student Name</h3>
                <p>Requested Property: Property Title</p>
                <button>Accept</button>
                <button className="rej-btn">Reject</button>
            </div> */}
           
        </div>
    </div>
    </>
  );
};

export default StudentRequest;
