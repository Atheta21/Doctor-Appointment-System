import React from "react";
import { Button, Checkbox, Form, Input, Card, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";

const { Title } = Typography;

const Login = () => {

  const navigate = useNavigate();

  const onFinish = async (values) => {
  try {

    const res = await axios.post("http://localhost:8080/api/v1/user/login", values);
localStorage.setItem("userId", "TEST123");
    console.log("LOGIN RESPONSE:", res.data); // debug

    if (res.data.success) {

      const user = res.data.data;

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", user._id);

      console.log("Saved userId:", user._id);

      alert("Login Successful");

      navigate("/");

    } else {
      alert(res.data.message);
    }

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <Title level={2} className="title">Login</Title>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

          <div className="login-link">
            Not a user? <Link to="/register">Register here</Link>
          </div>

        </Form>
      </Card>
    </div>
  );
};

export default Login;