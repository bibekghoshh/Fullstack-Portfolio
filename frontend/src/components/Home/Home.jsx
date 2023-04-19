import React from "react"; 
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import myPhoto from "../../Images/mypic.jpg"
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiHtml5,
//   SiThreedotjs,
// } from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Skills from "../Skills/Skills";
// import { Link } from "react-router-dom";

const Home = ({ timelines, youtubes, skills }) => {  
  

  return (
    <> 
    <section class="container" id="home">
        <div class="col col1">
            <div class="intro1 animate__animated animate__flipInX"> <h1>👋Hey,I am Bibek Ghosh</h1>  </div>
            <div class="intro2"><h2>An aspiring Software developer</h2></div>
            <p class="intro">I enjoy challenges and finding a solution to a problem always fascinates me. I explore new technological areas as an avid learner to make a difference. A quick learner with strong coding and communication skills is also my strength. My goal is to gain exposure to domains that provide intellectually challenging work in the field of computers so that I can improve and broaden my knowledge and skills.</p>
            <p class="intro3">I WRITE CODE</p>
            <div class="viewcv">
                <button class="viewcvbtn"><a href="https://drive.google.com/file/d/1il1CfXN7Tosvghi5pytvmjj3LGEy7Ayn/view?usp=share_link">View CV</a></button>
            </div>
            {/* <Link to="/projects">VIEW WORK</Link> */}
            
        </div>
        <div class="col col2">
                <img src={myPhoto} alt="bibek's phot" class="myphoto animate__animated animate__fadeIn" />

        </div>

    </section>

    
    <div className="home">

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
          <Typography variant="h3">SKILLS</Typography>
          
        <Skills skills={skills} />

      </div>

       <div className="homeYoutube">
       <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

         <div className="homeYoutubeWrapper">
                         {youtubes.map((item) => (
                            <YoutubeCard
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                            id={item._id}
                            key={item._id}
                            />
                        ))} 
        </div>
      </div> 
    </div>
    </>
  );
};

export default Home;