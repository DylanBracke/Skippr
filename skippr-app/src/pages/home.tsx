import React from "react";

const Home = () => {
  return (
    <div className="page Home">
      <div className="title">
        <h3>SKIPPR</h3>
        <h1>Just Keep Jumping</h1>
      </div>
      <div className="journal-content">
        <div className="journal-title"> <h2>Journal</h2> <div className="streak-counter"></div></div>
        <div className="journal-entries">
            {/* <!-- Entries --> */}
          </div>
      </div>
      <div className="programs">
        <h2>Pick a program</h2>
        <div className="programs-list">
          {/* <!-- Programs --> */}
        </div>
      </div>
      <div className="menue">
        {/* <!-- Menue --> */}
      </div>
    </div>
  );
};

export default Home;
