import React, { Component } from "react";
import { Card, Row, Col, Layout } from "antd";
import SideBar from "../components/sidebar/SideBar";
import MyAccImg from "../images/bank.png";
import { Link } from "react-router-dom";
import axios from "../config/axios.setup";

const { Content } = Layout;
export default class TransView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: []
    };
  }

  fetchAccountList = () => {
    axios.get("/getAccounts").then(result => {
      this.setState({
        accountList: result.data
      });
    });
  };

  componentDidMount() {
    this.fetchAccountList();
  }

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
            <Row gutter={18} type="flex" justify="center">
              <h2>Transactions</h2>
            </Row>
            <Row gutter={18} type="flex" justify="left">
              {this.state.accountList.map(account => (
                <Col span={4}>
                  <Link to="/transfer-list">
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
                        <p>
                          <b>
                            {account.user.first_name +
                              " " +
                              account.user.last_name}
                          </b>
                        </p>
                        <p> Acc No.{account.acc_number} </p>
                        <p> Amount {account.balance} THB </p>
                      </Row>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}
