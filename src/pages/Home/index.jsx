import React from "react";
import "./style.scss";
import hero from "../../assets/img/tr_banner_post.jpg";
const Home = () => {
  return (
    <>
      <section className="sect1">
        <div className="img">
          <img src={hero} alt="" />
        </div>
        <div className="main">
          <button>CULTURE</button>
          <h3>
            The Potentially Dangerous Non-Accessibility Of <br />
            Cookie Notices
          </h3>

          <div className="icons">
<div className="box">
<i class="fa-regular fa-circle-user"></i>
<h4>BY ADMIN</h4>
</div>
<div className="box">
<i class="fa-regular fa-calendar"></i>
<h4>27 AUGUST, 2024</h4>
</div>
<div className="box">
<i class="fa-solid fa-clock-rotate-left"></i>
<h4>20 MINS</h4>
</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
