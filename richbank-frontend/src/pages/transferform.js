import React, { Component } from "react";
import { Row, Col, Layout, Form, Input, Icon, Button } from "antd";
import SideBar from "../components/sidebar/SideBar";
import Logo from "../images/logo2.png";
import queryString from "query-string";
import Axios from "../config/axios.setup";

const { Content } = Layout;

class TransferForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        Axios.post("/transaction", {
          amount: value.amount,
          acc_receive: value.acc_receive
        })
          .then(result => {
            console.log(result);
            this.props.history.push("/account-view");
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
    console.log(this.props.location.search);
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
                    ></img>
                  </Col>
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
                      <h1>From</h1>

                      <Input
                        prefix={
                          <Icon
                            type="idcard"
                            style={{
                              color: "rgba(0,0,0,.25)"
                            }}
                          />
                        }
                        value={
                          queryString.parse(this.props.location.search).acc_id
                        }
                        placeholder="Account Number"
                      />
                    </Form.Item>
                    <Form.Item>
                      <h1>To</h1>
                      {getFieldDecorator("acc_receive", {
                        rules: [
                          {
                            required: true,
                            message: "โปรดกรอกเลขบัญชีปลายทาง!"
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
                      )}
                    </Form.Item>
                    <Form.Item>
                      <h1>Amount</h1>
                      {getFieldDecorator("amount", {
                        rules: [
                          {
                            required: true,
                            message: "โปรดกรอกจำนวนเงิน!"
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
                      )}
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
                          Transfer
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
export default Form.create()(TransferForm);
