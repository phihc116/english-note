import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  function directToSignIn() {
    navigate("/sign-in");
  }

  return (
    <div className="s_sign-up">
      <div className="s_form-sign-up">
        <div className="s_introduction">
          <h2>Tham gia EnglishNote</h2>
          <p>Tạo tài khoản mới</p>
        </div>
        <div className="s_form">
          <Form name="sign-up" initialValues={{ remember: true }} layout="vertical">
            <Form.Item
              label="Tên"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên của bạn!" }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên" size="large" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" size="large" />
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
              <Button type="primary" htmlType="submit" className="s_sign-up-button" size="large">
                Đăng ký
              </Button>
              <div className="s_register-link">
                <span>Đã có tài khoản?</span>
                <a onClick={directToSignIn}>Đăng nhập ngay!</a>
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

export default SignUp;
