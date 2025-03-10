import React from "react";

const Profile = ({ imageUrl, nameProfile, roleProfile }) => {
  return (
    <div className="aside-profile">
      <div className="profile-image">
        <img src={imageUrl} alt="Image Profile"/>
      </div>
      <div className="name-profile">
        <h1>{nameProfile}</h1>
      </div>
      <div className="role-profile">
        <h3>{roleProfile}</h3>
      </div>
    </div>
  )
}

export default Profile;