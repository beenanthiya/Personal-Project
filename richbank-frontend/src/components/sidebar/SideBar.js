import React, { Component } from "react";
import { Menu, Layout, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SideBar extends Component {
  // handleLogout = () => {
  //   this.props.logout();
  //   this.props.history.push("/login");
  //   window.location.reload(true);
  // };
  render() {
    return (
      <Sider
        style={{
          backgroundColor: "#3665C3",
          height: "100%"
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="light" mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span className="nav-text"> Home </span>{" "}
            </Link>{" "}
          </Menu.Item>{" "}
          <Menu.Item key="2">
            <Link to="/myaccount">
              <Icon type="idcard" />
              <span className="nav-text"> My Account </span>{" "}
            </Link>{" "}
          </Menu.Item>{" "}
          <Menu.Item key="3">
            <Link to="/transfer">
              <Icon type="retweet" />
              <span className="nav-text"> Transfer </span>{" "}
            </Link>{" "}
          </Menu.Item>{" "}
          <Menu.Item key="4">
            <Link to="/transection">
              <Icon type="profile" />
              <span className="nav-text"> Transactions </span>{" "}
            </Link>{" "}
          </Menu.Item>{" "}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="tool" />
                <span> Settings </span>{" "}
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/changepassword">
                <Icon type="lock" />
                <span className="nav-text"> Change Password </span>{" "}
              </Link>{" "}
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <Link to="/login">
              <Icon type="poweroff" />
              <span className="nav-text"> Log out </span>{" "}
            </Link>{" "}
          </Menu.Item>{" "}
        </Menu>{" "}
      </Sider>
    );
  }
}
