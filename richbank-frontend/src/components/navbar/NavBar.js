import React, { Component } from "react";
import { Row, Col } from "antd";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Row
          style={{
            height: "100%"
          }}
          type="flex"
          align="middle"
        >
          <Col
            style={{
              height: "100%"
            }}
            type="flex"
            align="end"
          >
            <Link to="/login">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "5vh"
                }}
              />
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
