import React from "react";
import "./homepage.styles.scss";
import Directory from '../../components/directory/directory-component.jsx'

/*

this is only a functional component 
no need to do any app state
no life cycle methods

*/
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default HomePage;
