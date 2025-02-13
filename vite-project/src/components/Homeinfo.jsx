import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 3)
    return (
        <h1
  style={{
    fontSize: "1.0rem",
    lineHeight: "2rem",
    textAlign: "center",
    background: "#3B82F6", // Lighter blue
    padding: "16px 32px",
    color: "#F8FAFC", // Softer white
    margin: "0 auto",
    display: "inline-block",
    borderRadius: "8px",
    boxShadow: "4px 4px 0px #1D4ED8", // Slight contrast for depth
    
    fontFamily: "'Verdana', 'Arial', sans-serif",


  }}
>
  Hi, I'm
  <span style={{ fontWeight: "bold", margin: "0 8px", color: "#F8FAFC" }}>
    Aditya Pratap Singh
  </span>
  👋
  <br />
  A Software Engineer
</h1>


      
    );

  if (currentStage === 2) {
    return (
        <div style={{ 
            fontSize: "1.0rem",
            lineHeight: "2rem",
            textAlign: "center",
            background: "#3B82F6", // Lighter blue
            padding: "16px 32px",
            color: "#F8FAFC", // Softer white
            margin: "0 auto",
            display: "inline-block",
            borderRadius: "8px",
            boxShadow: "4px 4px 0px #1D4ED8", // Slight contrast for depth
            fontFamily: "'Verdana', 'Arial', sans-serif"
          }}>
            <p>
              Full-stack developer with internship experience, <br /> I picked up many skills along the way
            </p>
          
            <Link to='/about' style={{ 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  gap: "6px", 
  backgroundColor: "#FFFFFF", 
  color: "#2563EB", // Softer blue
  fontWeight: "500", // Slightly stronger for better readability
  padding: "6px 8px", 
  fontSize: "0.80rem",
  borderRadius: "8px", 
  textDecoration: "none", 
  marginTop: "8px",
  boxShadow: "2px 2px 0px #1E40AF",
  transition: "all 0.2s ease-in-out"
}}>
  <span style={{ color: "#3B82F6", fontWeight: "600" }}>Learn more</span>
  <img src={arrow} alt='arrow' style={{ width: "16px", height: "16px", objectFit: "contain" }} />
</Link>

          </div>
          
          
    );
  }

  if (currentStage === 1) {
    return (
        <div style={{ 
            fontSize: "1.0rem",
            lineHeight: "2rem",
            textAlign: "center",
            background: "#3B82F6", // Lighter blue
            padding: "16px 32px",
            color: "#F8FAFC", // Softer white
            margin: "0 auto",
            display: "inline-block",
            borderRadius: "8px",
            boxShadow: "4px 4px 0px #1D4ED8", // Slight contrast for depth
            fontFamily: "'Verdana', 'Arial', sans-serif"
          }}>
            <p>
              Worked on multiple projects <br /> Curious about the impact?
            </p>
          
            <Link to='/projects' style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "6px", 
              backgroundColor: "#FFFFFF", 
              color: "#2563EB", // Softer blue
              fontWeight: "500", // Slightly stronger for better readability
              padding: "6px 8px", 
              fontSize: "0.80rem",
              borderRadius: "8px", 
              textDecoration: "none", 
              marginTop: "8px",
              boxShadow: "2px 2px 0px #1E40AF",
              transition: "all 0.2s ease-in-out"
            }}>
              <span style={{ color: "#3B82F6", fontWeight: "600" }}>View Projects</span>
              <img src={arrow} alt='arrow' style={{ width: "16px", height: "16px", objectFit: "contain" }} />
            </Link>
          </div>
          
          
    );
  }

  if (currentStage === 4) {
    return (
        <div style={{ 
            fontSize: "1.0rem",
            lineHeight: "2rem",
            textAlign: "center",
            background: "#3B82F6", // Lighter blue
            padding: "16px 32px",
            color: "#F8FAFC", // Softer white
            margin: "0 auto",
            display: "inline-block",
            borderRadius: "8px",
            boxShadow: "4px 4px 0px #1D4ED8", // Slight contrast for depth
            fontFamily: "'Verdana', 'Arial', sans-serif"
          }}>
            <p>
              Lets create something together <br /> I'm just a few keystrokes away
            </p>
          
            <Link to='/contact' style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "6px", 
              backgroundColor: "#FFFFFF", 
              color: "#2563EB", // Softer blue
              fontWeight: "500", // Slightly stronger for better readability
              padding: "6px 8px", 
              fontSize: "0.80rem",
              borderRadius: "8px", 
              textDecoration: "none", 
              marginTop: "8px",
              boxShadow: "2px 2px 0px #1E40AF",
              transition: "all 0.2s ease-in-out"
            }}>
              <span style={{ color: "#3B82F6", fontWeight: "600" }}>Let's talk</span>
              <img src={arrow} alt='arrow' style={{ width: "16px", height: "16px", objectFit: "contain" }} />
            </Link>
          </div>
          
    );
  }

  return null;
};

export default HomeInfo;