import axios from "axios";
import React, { Component } from "react";
import { button_primary } from "./palette";

const profileContainer = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};
const backgroundColorStyle = {
  width: "50%",
  height: "100%",
  backgroundColor: "#E6DACE",
};
const profileContent = {
  width: "40%",
  height: "56%",
  position: "absolute",
  left: "35%",
  zIndex: "100",
  display: "flex",
};
const leftPart = {
  width: "50%",
  height: "100%",
  backgroundColor: "#f7f0ea",
};
const right = {
  padding: "1rem",
  width: "50%",
};

const leftUpperStyle = {
  padding: "1rem",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const avatarStyle = {
  borderRadius: "100%",
  width: "45%",
  objectFit: "contain",
};

const nameStyle = {
  fontWeight: "bolder",
  fontSize: "3rem",
};
const designationStyle = {
  marginTop: "2rem",
  fontSize: "large",
  fontWeight: "800",
  letterSpacing: "0.35rem",
};
class ProfilePage extends Component {
  state = {};
  static async getInitialProps(props) {
    const etherscanAddress =
      "https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=" +
      props.query.address +
      "&startblock=0&endblock=99999999&sort=asc&apikey=92DFXGGSPQWKX9GT5IDJCM3YM8FZ9XSM5S";
    const transcations = await axios.get(etherscanAddress);
    console.log("[transactions]", transcations);
    return {
      transcationsListLength: transcations.data.result.length,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("loggedIn") === "true") {
      const userData = JSON.parse(localStorage.getItem("user"));
      this.setState({
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        account: userData.account,
      });
    } else {
      localStorage.clear();
      window.location.pathname = "/";
    }
  }

  getAvatarUrl() {
    const randomUrls = [
      "https://semantic-ui.com/images/avatar/large/ade.jpg",
      "https://semantic-ui.com/images/avatar/large/christian.jpg",
      "https://semantic-ui.com/images/avatar/large/daniel.jpg",
      "https://semantic-ui.com/images/avatar/large/elliot.jpg",
      "https://semantic-ui.com/images/avatar/large/helen.jpg",
      "https://semantic-ui.com/images/avatar/large/jenny.jpg",
      "https://semantic-ui.com/images/avatar/large/joe.jpg",
    ];
    return randomUrls[Math.floor(Math.random() * 7)];
  }
  render() {
    return (
      <div style={profileContainer}>
        <div style={backgroundColorStyle} />
        <div style={profileContent}>
          <div style={leftPart}>
            <div style={leftUpperStyle}>
              <img
                src={this.getAvatarUrl()}
                alt={"avatar"}
                style={avatarStyle}
              />
              <p style={nameStyle}>{this.state.name}</p>
              <div
                style={{
                  background: button_primary,
                  height: "0.2rem",
                  width: "30%",
                }}
              />
              <p style={designationStyle}>Project Manager</p>
            </div>
          </div>
          <div style={right}>
            <p
              style={{
                fontSize: "4rem",
                fontWeight: "700",
                marginBottom: 0,
                marginTop: "0.5rem",
              }}
            >
              HELLO
            </p>
            <p
              style={{
                fontSize: "medium",
                fontWeight: "600",
                marginTop: "0",
                marginBottom: "2rem",
              }}
            >
              Here's who I am & what I do.
            </p>
            <div style={{ display: "flex" }}>
              <img
                src="https://img.icons8.com/ios/452/apple-mail.png"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <p style={{ marginTop: "0.25rem", paddingLeft: "1rem" }}>
                {this.state.email}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://static.thenounproject.com/png/89547-200.png"
                style={{ width: "1.5rem", height: "1.25rem" }}
              />
              <p style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
                {this.state.account}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://icon-library.com/images/transactions-icon/transactions-icon-13.jpg"
                style={{ width: "1.5rem", height: "1.25rem" }}
              />
              <p
                style={{
                  marginTop: "0.5rem",
                  marginLeft: "1rem",
                  padding: "0.5rem",
                  borderRadius: "100%",
                  color: "white",
                  background: button_primary,
                }}
              >
                {this.props.transcationsListLength}
              </p>
            </div>
            <div
              style={{
                marginTop: "1rem",
                fontStyle: "oblique",
                fontSize: "1rem",
                letterSpacing: "0.15rem",
                lineHeight: "1.5rem",
              }}
            >
              Proactively managing important and time-sensitive projects.
              Working collaboratively with other team members to establish an
              efficient and effective systems of operation.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
