import React, { Component } from "react";
import { Col, Row, Input, Button, Form } from "antd";
import logo from "../../images/logo2.png";
import Axios from "../../config/axios.setup";
import { Link } from "react-router-dom";

import {
  successLoginNotification,
  failLoginNotification
} from "../../components/notifications/notifications";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    // e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    Axios.post("/loginUser", { username, password })
      .then(result => {
        console.log(result);
        successLoginNotification();
        localStorage.setItem("ACCESS_TOKEN", result.data.token);
        this.props.history.push("/home");
        // window.location.reload(true);
      })
      .catch(err => {
        console.error(err);
        failLoginNotification("something went wrong");
      });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "90vh" }}
        >
          <Col md={8} sm={12} xs={24}>
            <Row type="flex" justify="center" align="middle">
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100%",
                  padding: "30px"
                }}
              ></img>
            </Row>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Form.Item label="Username">
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "โปรดใส่ชื่อผู้ใช้งานของคุณ!" }
                ]
              })(
                <Input
                  onChange={e => this.setState({ username: e.target.value })}
                />
              )}
            </Form.Item>

            <Form.Item label="Password">
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "โปรดใส่ชื่อผู้ใช้งานของคุณ!" }
                ]
              })(
                <Input.Password
                  onChange={e => this.setState({ password: e.target.value })}
                />
              )}
            </Form.Item>
            <Row>
              <Col span={12}>
                <Form.Item>
                  <Link to="/signup">
                    <Button block type="link">
                      Signup
                    </Button>
                  </Link>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.handleSubmit}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(Login);
