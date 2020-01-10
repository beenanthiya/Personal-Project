import React, { Component } from "react";
import { Row, Col, Layout, Form, Input, Icon, Button } from "antd";
import SideBar from "../components/sidebar/SideBar";
import Logo from "../images/logo2.png";
import Axios from "../config/axios.setup";

const { Content } = Layout;

class AddAcc extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/addAccount", {
          acc_type: value.acc_type,
          acc_number: value.acc_number,
          amount: value.amount
        })
          .then(result => {
            console.log(result);
            this.props.history.push("/myaccount");
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
                  style={{
                    padding: "30px"
                  }}
                >
                  <Col
                    md={8}
                    sm={12}
                    xs={24}
                    type="flex"
                    justify="center"
                    align="middle"
                  >
                    <img
                      src={Logo}
                      alt="Logo"
                      style={{
                        width: "100%"
                      }}
                    >
                      {" "}
                    </img>{" "}
                  </Col>{" "}
                </Row>
                <Form
                  onSubmit={this.handleSubmit}
                  className="login-form"
                  style={{
                    maxWidth: "400px",
                    width: "100%"
                  }}
                >
                  <Row>
                    <Form.Item>
                      <h1> Account Number </h1>{" "}
                      {getFieldDecorator("acc_number", {
                        rules: [
                          {
                            required: true,
                            message: "โปรดกรอกเลขบัญชี!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="idcard"
                              style={{
                                color: "rgba(0,0,0,.25)"
                              }}
                            />
                          }
                          placeholder="Account Number"
                        />
                      )}{" "}
                    </Form.Item>{" "}
                    <Form.Item>
                      <h1> Account Type </h1>{" "}
                      {getFieldDecorator("acc_type", {
                        rules: [
                          {
                            required: true,
                            message: "โปรดกรอกประเภทบัญชี!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="profile"
                              style={{
                                color: "rgba(0,0,0,.25)"
                              }}
                            />
                          }
                          placeholder="Account Type"
                        />
                      )}{" "}
                    </Form.Item>
                    <Form.Item>
                      <h1> Amount </h1>
                      {getFieldDecorator("amount", {
                        rules: [
                          {
                            required: true,
                            message: "โปรดกรอกจำนวนเงินที่ต้องการโอน!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="pay-circle"
                              style={{
                                color: "rgba(0,0,0,.25)"
                              }}
                            />
                          }
                          placeholder="Amount"
                        />
                      )}{" "}
                    </Form.Item>{" "}
                  </Row>{" "}
                  <Row type="flex" justify="center">
                    <Col md={8} sm={12} xs={24}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          Add Account{" "}
                        </Button>{" "}
                      </Form.Item>{" "}
                    </Col>{" "}
                  </Row>{" "}
                </Form>{" "}
              </Col>{" "}
            </Row>{" "}
          </div>{" "}
        </Content>{" "}
      </Layout>
    );
  }
}
export default Form.create()(AddAcc);
