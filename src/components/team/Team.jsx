import React from "react";
import Footer from "../footer/Footer";
import people from "./people";
import './Team.css'
function Team() {
  return (
    <div>
      <div>
        <div className="about-video">
          <video src="/apeki.mp4" autoPlay={true} loop={true} muted />
        </div>
        <div className="about-desc">
          <h1 >OUR TEAM</h1>
          <div className="a-words">Apeki Amizero's Team Members</div>
          <button className="ab-button"><a href="#team" style={{textDecoration:"none",color:"white"}} >Details</a> </button>
        </div>
      </div>
      <h3 style={{textAlign:"center",marginTop:"20px"}} id="team" >Our Team</h3>
      <p className="team-par">
        
        The dedicated teachers, classroom assistants and administration staff
        work tirelessly to provide a professional level of education to the
        pupils. They are supported by hygiene assistants and maintenance staff.
      </p>
      <div className="head-tchr">
        <img src="/hdtchr2.png" className="head-teacher" alt="" />
        <h3>Mutumwinka Awunnick</h3>
        <h4>Head Teacher</h4>
        <h5>0788876362</h5>
      </div>
      <div className="team-container">
      { people.map((person,id)=>{
return(
    <div className="team-card" key={id}>
        <img src={person.photo} className="team-image" alt="" />
        <h4>{person.name}</h4>
        <h5>{person.contact}</h5>
        <p>{person.role}</p>
        </div>
)
      })
        }
      </div>
      <Footer/>
 
    </div>
  );
}

export default Team;
