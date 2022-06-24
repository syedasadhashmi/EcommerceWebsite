import { Button, Checkbox, Form, Input } from "antd";
// import { useState } from "react";
import "./Login.css";
const Register = () => {
  // const [emailAddress, setEmailAddress] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const emailAddressHandler = (e) => {
  //   setEmailAddress(e.target.value);
  // };
  // const usernameHandler = (e) => {
  //   setUsername(e.target.value);
  // };
  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  const onFinish = (values) => {
    if (
      values.emailAddress.trim().includes("@") &&
      values.password.trim().length > 7
    ) {
      console.log("valid email & password");
    } else {
      console.log("invalid email");
    }
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-center">
      <h3 className="h3-center">Register</h3>
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
          label="Email address"
          name="emailAddress"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
