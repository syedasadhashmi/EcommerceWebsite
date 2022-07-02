import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css';
import { loginFunc } from '../redux/registration/registrationAction';
// import { useState } from 'react';
const Login = () => {
  // const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.registrationReducer);
  console.log(users);
  const onFinish = (values) => {
    const findPro = users.find(
      (items) =>
        items.emailAddress === values.username &&
        items.password === values.password
    );
    if (findPro) {
      // setStatus(true);
      dispatch(loginFunc());
    } else {
      // setStatus(false);
      onFinishFailed();
    }
    // users.map((items) => {
    //   if (items.emailAddress === values.username) {
    //     console.log("match");
    //   } else {
    //     console.log("not match");
    //   }
    // });
  };

  const onFinishFailed = (errorInfo) => {
    Modal.error({
      title: 'Error',
      content: 'Innvalid Email or Password',
    });
  };

  return (
    <div className="form-center">
      <h3 className="h3-center">Login</h3>
      <Form
        className="form-style"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email Address"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to={'/Register'}>
            <p>Want to register?</p>
          </Link>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
