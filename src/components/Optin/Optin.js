import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>Connect with us</p>
        <a href="mailto:shubhammodi004@gmail.com">Send email</a>
      </div>
    );
  }
}

export default Optin;
