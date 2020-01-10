import React from "react";
import "./App.css";
import { Layout } from "antd";
import NavBar from "./components/navbar/NavBar";
import { Switch, withRouter } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoutes.js";
import jwtDecode from "jwt-decode";

const { Header, Footer } = Layout;

class App extends React.Component {
  getUser = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
      return {
        role: "guest"
      };
    }
    let user = jwtDecode(token);
    return user;
  };

  render() {
    let user = this.getUser();
    console.log(user);
    return (
      <div>
        <Layout
          style={{
            height: "100vh"
          }}
        >
          <Header
            style={{
              backgroundColor: "#124cbe"
            }}
          >
            <NavBar />
          </Header>{" "}
          <Layout>
            <Switch>
              <PrivateRoute role={user.role} />{" "}
            </Switch>{" "}
          </Layout>{" "}
          <Footer
            style={{
              textAlign: "center"
            }}
          >
            Rich Bank© 2019 Created by Bee Nanthiya{" "}
          </Footer>{" "}
        </Layout>{" "}
      </div>
    );
  }
}

export default withRouter(App);
