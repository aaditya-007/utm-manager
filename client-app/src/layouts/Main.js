import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LoginOutlined ,
  LogoutOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout
        style={{
          minHeight: "100%",
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="slider"
        >
          <div className="logo">UTM NINJA</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={`${this.props.url}/links`}>Links</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={`${this.props.url}/templates`}>Templates</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to={`${this.props.url}/users`}>Add Users</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LoginOutlined />}>
              <Link to={`${this.props.url}/signOut`}>SignOut</Link>
            </Menu.Item>
            {/* <Menu.Item key="5" icon={<LoginOutlined />}>
              <Link to="/signUp">SignUp</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle.bind(this),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
