import React, { Component } from "react";
import { Card, Row, Col, Layout, Table } from "antd";
import SideBar from "../components/sidebar/SideBar";
import MyAccImg from "../images/bank.png";
import axios from "../config/axios.setup";

const { Content } = Layout;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  }
];

export default class AccView extends Component {
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
            <Row>
              <Card
                type="flex"
                justify="center"
                align="middle"
                size="small"
                bordered={false}
                style={{
                  padding: "10px"
                }}
              >
                <Row>
                  <Col span={4}>
                    <Row type="flex" justify="end" align="middle">
                      <img
                        src={MyAccImg}
                        alt="acc"
                        style={{
                          width: "100%"
                        }}
                      />{" "}
                    </Row>{" "}
                  </Col>{" "}
                  <Col span={18}>
                    <Row type="flex" justify="end" align="middle">
                      <h2> Acc Name </h2>{" "}
                    </Row>{" "}
                    <Row type="flex" justify="end" align="middle">
                      <h1> Acc No .123444554 </h1>{" "}
                    </Row>{" "}
                    <Row type="flex" justify="end" align="middle">
                      <h3> Amount 1000 THB </h3>{" "}
                    </Row>{" "}
                  </Col>{" "}
                </Row>{" "}
              </Card>{" "}
            </Row>{" "}
            <Row>
              <Table columns={columns} dataSource={data} />{" "}
            </Row>{" "}
          </div>{" "}
        </Content>{" "}
      </Layout>
    );
  }
}
