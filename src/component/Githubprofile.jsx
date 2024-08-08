import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./style.css";

const Githubprofile = ({ username }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      // fetch github profile link
      const res = await axios.get(`https://api.github.com/users/${username}`);
      console.log(res);
      setProfileData(res.data);
      console.log(profileData);
    };
    fetchProfile();
  }, [username]);
  if (!profileData) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      {profileData && (
        <div>
          <img
            style={{
              margin: 4,
              width: 200,
              borderRadius: 100,
              height: 200,
            }}
            src={profileData.avatar_url}
            alt="profile"
          />
          <h1>{profileData.name}</h1>
          <p>{profileData.bio}</p>
          <a href={profileData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Githubprofile;
