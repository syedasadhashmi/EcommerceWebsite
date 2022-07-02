import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Space, Layout, Menu, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { logout } from '../../redux/registration/registrationAction';
import './Navbar.css';
const { Header } = Layout;
const Navbar = () => {
  const { status } = useSelector((state) => state.registrationReducer);
  console.log(status);
  const dispatch = useDispatch();
  return (
    <Layout className="layout custom-style">
      <Header>
        <div className="logo">
          <Link to="/">
            <Space>
              <h1 style={{ color: 'white' }}>
                <HomeOutlined style={{ color: 'white', padding: '5px' }} />
                Sneaker Store
              </h1>
            </Space>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: 'right' }}
          defaultSelectedKeys={['']}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Link to="/Cart">Cart</Link>
          </Menu.Item>
          {status ? (
            <Menu.Item key="logout">Logout</Menu.Item>
          ) : (
            <Menu.Item key="login">
              <Link to="/Login">Login</Link>
            </Menu.Item>
          )}
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
