import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Title from 'antd/lib/typography/Title';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/Login.scss';
import { LoginCredentials } from '../../types/LoginTypes';

const Login: React.FC = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const onFinish = async (values: LoginCredentials) => {
    const success = await login(values);
    if (success) {
      setErrorMessage('');
      navigate('/');
    } else {
      setErrorMessage('User not found or password is incorrect');
    }
  };

  return (
    <Row justify="center" align="middle" className="login-row">
      <Col xs={22} sm={16} md={12} lg={8}>
        <div className="login-container">
          <Title level={2}>Sign In</Title>
          <Form<LoginCredentials> onFinish={onFinish} layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" initialValue={false}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
