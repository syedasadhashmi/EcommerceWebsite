import { Button, Checkbox, Form, Input } from "antd";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../redux/registration/registrationAction";
import Login from "./Login";
import "./Login.css";
const Register = () => {
  const { regStatus } = useSelector((state) => state.registrationReducer);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    if (
      values.emailAddress.trim().includes("@") &&
      values.password.trim().length > 7
    ) {
      dispatch(addUser({ values }));
    } else {
      onFinishFailed();
    }
  };

  const onFinishFailed = (errorInfo) => {
    Modal.error({
      title: "Invalid Email or Password",
      content: "Please enter valid email & Password > 7",
    });
  };

  return (
    <>
      {!regStatus ? (
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
              <Link to={"/Login"}>
                <p>already have an account</p>
              </Link>
              <Button onSubmit={onFinish} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Register;
