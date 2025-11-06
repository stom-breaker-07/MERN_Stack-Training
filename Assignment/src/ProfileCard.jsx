import React from "react";

const ProfileCard = () => {
  const cardStyle = {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #007bff",
  };

  const nameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    margin: "10px 0 5px",
  };

  const professionStyle = {
    fontSize: "1rem",
    color: "#666",
    margin: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://avatars.githubusercontent.com/u/152681009?v=4"
          alt="Profile"
          style={imageStyle}
        />
      </div>

      <div>
        <h2 style={nameStyle}>Chinmay L</h2>
        <p style={professionStyle}>Engineering Student</p>
      </div>
    </div>
  );
};

export default ProfileCard;
