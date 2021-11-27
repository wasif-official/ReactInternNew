import { Button, Col } from "antd";
import { Link } from "react-router-dom";
import { Form, Input, Row } from 'antd';
import 'antd/dist/antd.css'
import '../all/all.css';
const Signin = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row>
                <Col span={10} offset={1} className="m-t-10 border rounded p-3">
                    <h1>
                        Sign In
                    </h1>
                    <Form name="basic" initialValues={{ remember: true, }} className="m-t-10" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', },]} >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password  " name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item className="m-t-10" wrapperCol={{ offset: 10, span: 4, }} >
                            <Button type="primary" > <Link to="/signup" className="button">Signin to Signup</Link> </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={10} offset={2}>
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" className="image m-t-10 rounded" />
                </Col>
            </Row>

        </>
    );
};
export default Signin;
