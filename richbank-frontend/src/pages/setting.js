import React, { Component } from "react";
import { Card, Row, Col, Layout } from "antd";
import SideBar from "../components/sidebar/SideBar";
import ChangePassImg from "../images/access.png";
import { Link } from "react-router-dom";

const { Content } = Layout;
export default class Settings extends Component {
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
            <Row gutter={18} type="flex" justify="left">
              <Col span={4}>
                <Link to="/changepassword">
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
                        alt="Change Password"
                        src={ChangePassImg}
                      />
                    }
                  >
                    <Row type="flex" justify="center">
                      <p>
                        <b> Change Password</b>
                      </p>
                    </Row>
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}
