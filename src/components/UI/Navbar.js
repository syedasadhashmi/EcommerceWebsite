import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu } from "antd";
import React from "react";
import "./Navbar.css";

const { Header } = Layout;
const Navbar = (props) => {
  return (
    <Layout className="layout custom-style">
      <Header>
        <div className="logo">
          <FontAwesomeIcon icon="fa-solid fa-store" />
          <Link to="/">Shoe Store</Link>
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
