import React from "react";
import {
  Layout,
  Menu,
  Typography,
  Button,
  Input,
  Card,
  Dropdown,
  Avatar,
  Space,
  Popover,
} from "antd";
import {
  HomeOutlined,
  BookOutlined,
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleCreateFolder = () => {
    console.log("Create Folder clicked");
  };

  const handleReview = () => {
    console.log("Review clicked");
  };

  const handleAddClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  const addMenu = (
    <Menu>
      <Menu.Item key="create-folder" icon={<PlusOutlined />} onClick={() => handleAddClick("Create Folder")}>
        Tạo thư mục
      </Menu.Item>
      <Menu.Item key="review" icon={<PlusOutlined />} onClick={() => handleAddClick("Review")}>
        Ôn tập
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Trang cá nhân
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="h_home-layout">
      <Sider className="h_home-sider">
        <div className="h_logo">English Note</div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            Thư viện của bạn
          </Menu.Item>
          <Menu.Item key="3" icon={<SearchOutlined />}>
            Tìm kiếm
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusOutlined />} onClick={() => handleAddClick("Add")}>
            Thư mục
          </Menu.Item>
          <Menu.Item key="5" icon={<PlusOutlined />} onClick={() => handleAddClick("Review")}>
            Ôn tập
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="h_home-header">
          <div className="h_header-left">
            <Input
              placeholder="Tra từ"
              prefix={<SearchOutlined />}
              size="large"
              className="h_search-input"
            />
          </div>
          <div className="h_header-right">
            <Popover
              content={addMenu}
              trigger="click"
              placement="bottomRight"
              className="h_add-popover"
            >
              <Button
                type="primary"
                icon={<PlusOutlined />}
                className="h_add-button"
              >
                Thêm
              </Button>
            </Popover>
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              className="h_profile-menu"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar src="https://i.pravatar.cc/150?img=3" />
                  <span>User</span>
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content className="h_home-content">
          <div className="h_hero-section">
            <Title level={1}>Welcome to VocabularyApp</Title>
            <p>Enhance your vocabulary with our comprehensive study sets.</p>
          </div>
          <div className="h_notes-list">
            <Card
              title="Study Set 1"
              bordered={false}
              cover={
                <img
                  alt="example"
                  src="https://source.unsplash.com/random/400x200?vocab1"
                />
              }
            >
              <p>Description of the study set</p>
            </Card>
            <Card
              title="Study Set 2"
              bordered={false}
              cover={
                <img
                  alt="example"
                  src="https://source.unsplash.com/random/400x200?vocab2"
                />
              }
            >
              <p>Description of the study set</p>
            </Card>
            {/* Add more study sets here */}
          </div>
        </Content>
        <Footer className="h_home-footer">
          <p>© 2024 VocabularyApp. All rights reserved.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
