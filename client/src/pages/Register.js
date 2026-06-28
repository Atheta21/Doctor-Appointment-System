import React from "react";
import { Button, Checkbox, Form, Input, Card, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import axios from "axios";

const { Title } = Typography;

const Register = () => {

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {

      const res = await axios.post(
        "/api/v1/user/register",
        values
      );

      if (res.data.success) {
        alert("Registration successful");
        navigate("/login");   // ✅ correct
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
        <Title level={2} className="title">Create Account</Title>

        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>

          <div className="login-link">
            Already a user? <Link to="/login">Login here</Link>
          </div>

        </Form>
      </Card>
    </div>
  );
};

export default Register;