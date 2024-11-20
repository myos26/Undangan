import React from "react";
import openMail from "../assets/open-mail.png";
import gambar1 from "../assets/4.png"

function Homepage({ toggleClass }) {
  return (
    <>
      <div id="latarbelakang">
        <img src={gambar1} alt="" />
      </div>
      <div className="heading">
        <div className="title">
          <p>Undangan Pernikahan</p>
          <p>Dicky & Rara</p>
        </div>
      </div>
      <div className="invitation-b">
        <button onClick={toggleClass}>
          <img src={openMail} alt="Open Invitation" />
          <p>Buka</p>
        </button>
      </div>
    </>
  );
}

export default Homepage;
