import React, { Component } from "react";
import { Row, Col, Layout, Form, Input, Icon, Button } from "antd";
import SideBar from "../components/sidebar/SideBar";
import Logo from "../images/logo2.png";

const { Content } = Layout;

export default class ChangePwd extends Component {
  render() {
    return (
      <Layout>
        <SideBar />
        <Content>
          <div
            style={{
              padding: "30px"
            }}
          >
            <Row type="flex" justify="center" align="middle">
              <Col
                md={8}
                sm={12}
                xs={24}
                type="flex"
                justify="center"
                align="middle"
              >
                <Row
                  type="flex"
                  justify="center"
                  align="middle"
                  style={{ padding: "30px" }}
                >
                  <Col
                    md={8}
                    sm={12}
                    xs={24}
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <img src={Logo} alt="Logo" style={{ width: "100%" }}></img>
                  </Col>
                </Row>

                <Form
                  //onSubmit={this.handleSubmit}
                  className="login-form"
                  style={{ maxWidth: "400px", width: "100%" }}
                >
                  <Row>
                    <Form.Item>
                      <Input.Password
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Old Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input.Password
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="New Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input.Password
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Confirm New password"
                      />
                    </Form.Item>
                  </Row>
                  <Row type="flex" justify="center">
                    <Col md={8} sm={12} xs={24}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Change Password
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}
