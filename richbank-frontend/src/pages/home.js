import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import MyAccImg from "../images/wallet.png";
import TransferImg from "../images/dollar.png";
import TransectionsImg from "../images/receipt.png";
import SettingsImg from "../images/gear.png";
import LogoutImg from "../images/logout.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  // handleLogout = () => {
  //   this.props.logout();
  //   this.props.history.push("/login");
  //   window.location.reload(true);
  // };
  render() {
    return (
      <div>
        <br />
        <Row type="flex" justify="center">
          <h1> ยินดีต้ อนรั บ </h1>{" "}
        </Row>{" "}
        <br />
        <div
          style={{
            padding: "30px"
          }}
        >
          <Row gutter={18} type="flex" justify="center" align="middle">
            <Col span={4}>
              <Link to="/myaccount">
                <Card
                  type="flex"
                  justify="center"
                  align="middle"
                  size="small"
                  bordered={false}
                  style={{
                    padding: "10px"
                  }}
                  cover={
                    <img
                      style={{
                        width: "50%"
                      }}
                      alt="MyAcc"
                      src={MyAccImg}
                    />
                  }
                >
                  <Row type="flex" justify="center">
                    <b> My Account </b>{" "}
                  </Row>{" "}
                </Card>{" "}
              </Link>{" "}
            </Col>{" "}
            <Col span={4}>
              <Link to="/transfer">
                <Card
                  type="flex"
                  justify="center"
                  align="middle"
                  size="small"
                  bordered={false}
                  style={{
                    padding: "10px"
                  }}
                  cover={
                    <img
                      style={{
                        width: "50%"
                      }}
                      alt="Transfer"
                      src={TransferImg}
                    />
                  }
                >
                  <Row type="flex" justify="center">
                    <b> Transfer </b>{" "}
                  </Row>{" "}
                </Card>{" "}
              </Link>{" "}
            </Col>{" "}
            <Col span={4}>
              <Link to="/transection">
                <Card
                  type="flex"
                  justify="center"
                  align="middle"
                  size="small"
                  bordered={false}
                  style={{
                    padding: "10px"
                  }}
                  cover={
                    <img
                      style={{
                        width: "50%"
                      }}
                      alt="Transections"
                      src={TransectionsImg}
                    />
                  }
                >
                  <Row type="flex" justify="center">
                    <b> Transactions </b>{" "}
                  </Row>{" "}
                </Card>{" "}
              </Link>{" "}
            </Col>{" "}
            <Col span={4}>
              <Link to="/settings">
                <Card
                  type="flex"
                  justify="center"
                  align="middle"
                  size="small"
                  bordered={false}
                  style={{
                    padding: "10px"
                  }}
                  cover={
                    <img
                      style={{
                        width: "50%"
                      }}
                      alt="Setting"
                      src={SettingsImg}
                    />
                  }
                >
                  <Row type="flex" justify="center">
                    <b> Settings </b>{" "}
                  </Row>{" "}
                </Card>{" "}
              </Link>{" "}
            </Col>{" "}
            <Col span={4}>
              <Link to="/login">
                <Card
                  type="flex"
                  justify="center"
                  align="middle"
                  size="small"
                  bordered={false}
                  style={{
                    padding: "10px"
                  }}
                  cover={
                    <img
                      style={{
                        width: "50%"
                      }}
                      alt="Logout"
                      src={LogoutImg}
                    />
                  }
                >
                  <Row type="flex" justify="center">
                    <b> Log out </b>{" "}
                  </Row>{" "}
                </Card>{" "}
              </Link>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
      </div>
    );
  }
}
