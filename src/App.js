import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

/**
 * Header
 *  -logo
 *  -nav-items
 * Body
 *  -Search
 *  -Restaurant Container
 *  -Restaurant Card
 *      -img
 *      -Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

