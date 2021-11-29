import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"
import './home.css';


const Home = () =>{
    return(
        <div className="home_bg">
             <Form className="form_content"
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
     
    >
      <Form.Item
        label="Team Name"
        name="Team Name"
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
        label="Team Category"
        name="Team Category"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Creat Team
        </Button>
      </Form.Item>
    </Form>
        </div>
    );
};

export default Home;