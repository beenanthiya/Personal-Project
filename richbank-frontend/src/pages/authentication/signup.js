import React, { Component } from "react";
import { Col, Row, Input, Button, Form, Icon } from "antd";
import logo from "../../images/logo2.png";
import Axios from "../../config/axios.setup";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/registerUser", {
          username: value.username,
          password: value.password,
          first_name: value.first_name,
          last_name: value.last_name,
          telno: value.telno
        })
          .then(result => {
            console.log(result);
            this.props.history.push("/login");
          })
          .catch(err => {
            console.error(err);
          });
        this.props.form.resetFields();
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" style={{ height: "90vh" }} align="middle">
        <Col span={24}>
          <Row type="flex" justify="center" align="middle">
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <img src={logo} alt="Logo" style={{ width: "100%" }}></img>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginTop: "40px" }}
          >
            <Col
              md={8}
              sm={12}
              xs={24}
              type="flex"
              justify="center"
              align="middle"
            >
              <Form
                onSubmit={this.handleSubmit}
                className="login-form"
                style={{ maxWidth: "400px", width: "100%" }}
              >
                <Row>
                  <Form.Item>
                    {getFieldDecorator("username", {
                      rules: [
                        {
                          required: true,
                          message: "โปรดใส่ชื่อผู้ใช้งานของคุณ!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Username"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [{ required: true, message: "โปรดใส่รหัสผ่าน!" }]
                    })(
                      <Input.Password
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("confirm", {
                      rules: [
                        { required: true, message: "โปรดใส่รหัสผ่านอีกครั้ง!" }
                      ]
                    })(
                      <Input.Password
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Confirm password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("first_name", {
                      rules: [{ required: true, message: "โปรดใส่ชื่อของคุณ!" }]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Firstname"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("last_name", {
                      rules: [
                        { required: true, message: "โปรดใส่นามสกุลของคุณ!" }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Lastname"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("telno", {
                      rules: [
                        {
                          required: true,
                          message: "โปรดใส่ชื่อผู้ใช้งานของคุณ!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="phone"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Telephone Number"
                      />
                    )}
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={8} sm={12} xs={24}>
                    <Form.Item>
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Signup
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(withRouter(Signup));
