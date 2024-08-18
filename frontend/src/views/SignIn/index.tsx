import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  function directToSignUp() {
    navigate("/sign-up");
  }

  return (
    <div className="s_sign-in">
      <div className="s_form-sign-in">
        <div className="s_introduction">
          <h2>Chào mừng bạn đến với EnglishNote</h2>
          <p>Đăng nhập bằng tài khoản và mật khẩu</p>
        </div>
        <div className="s_form">
          <Form
            name="sign-in"
            initialValues={{ remember: true }}
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <div className="s_more-container">
                <Checkbox>Duy trì đăng nhập</Checkbox>
                <a className="s_forgot-password" href="">
                  Quên mật khẩu?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="s_sign-in-button"
                size="large"
              >
                Đăng nhập
              </Button>
              <div className="s_register-link">
                <span>hoặc Bạn chưa có tài khoản?</span>
                <a href="" onClick={directToSignUp}>
                  Đăng ký ngay!
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="s_image-decorator">
        <img
          src="https://images.unsplash.com/photo-1534239697798-120952b76f2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignIn;
