import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { Space, Layout, Menu } from "antd";

import "./Navbar.css";

const { Header } = Layout;
const Navbar = (props) => {
  return (
    <Layout className="layout custom-style">
      <Header>
        <div className="logo">
          <Link to="/">
            <Space>
              <h1 style={{ color: "white" }}>
                <HomeOutlined style={{ color: "white", padding: "5px" }} />
                Sneaker Store
              </h1>
            </Space>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: "right" }}
          defaultSelectedKeys={[""]}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cart">Cart</Menu.Item>
          <Menu.Item key="login">
            <Link to="/Login">Login</Link>
          </Menu.Item>
          <Menu.Item key="register">
            <Link to="/Register">Register</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
    // <nav>
    //   <h1>Shoes.com</h1>
    //   <div className="links">
    //     <Link to="/Login">Login</Link>
    //     <Link to="/Register">Register</Link>
    //   </div>
    // </nav>
  );
};
export default Navbar;
