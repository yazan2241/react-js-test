import React, { Component, useEffect, useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import clientService from 'services/ClientService';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import Loading from 'components/shared-components/Loading';


const EditProfile = () => {
    const { id } = useParams();
    let history = useHistory();
    const [userData, setuserData] = useState({
        name: 'Charlie Howard',
        email: 'charlie.howard@themenate.com',
        userName: 'Charlie',
        phoneNumber: '+44 (1532) 135 7921',
        website: '',
        street: '',
        city: '',
        suite: '',
        postcode: '',
        companyName: '',
        bs: '',
        catchPhrase: '',


    });

    const [loading, setloading] = useState(false);



    useEffect(() => {
        setloading(true);
        clientService.getUser(id).then(res => {
            setuserData({
                name: res.name,
                email: res.email,
                userName: res.username,
                phoneNumber: res.phone,
                website: res.website,
                city: res.address.city,
                street: res.address.street,
                suite: res.address.suite,
                postcode: res.address.zipcode,
                companyName: res.company.name,
                bs: res.company.bs,
                catchPhrase: res.company.catchPhrase,

            });
            setloading(false);
            console.log('res', res);
        });

    }, []);

    const onFinish = values => {
        const key = 'updatable';
        message.loading({ content: 'Updating...', key });
        setTimeout(() => {
            setuserData({
                name: values.name,
                email: values.email,
                userName: values.userName,
                phoneNumber: values.phoneNumber,
                website: values.website,
                city : values.city,
                street: values.street,
                suite: values.suite,
                postcode: values.postcode,
                companyName: values.companyName,
                bs: values.bs,
                catchPhrase: values.catchPhrase,
            })
            message.success({ content: 'Done!', key, duration: 2 });
            history.goBack();
        }, 1000);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };




    const { name, email, userName, street, phoneNumber, website, city, postcode, suite, companyName, bs, catchPhrase } = userData;
    console.log(name);
    return (
        loading ?
            <Loading cover='page' /> : <>
                <div className="mt-4">
                    <Form
                        
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'email': email,
                                'username': userName,
                                'street': street,
                                'phoneNumber': phoneNumber,
                                'website': website,

                                'city': city,
                                'postcode': postcode,
                                'suite': suite,
                                'companyName': companyName,
                                'bs': bs,
                                'catchPhrase': catchPhrase,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!'
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Street"
                                            name="street"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Street Address!'
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="City"
                                            name="city"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Post code"
                                            name="postcode"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Suite"
                                            name="suite"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Company Name"
                                            name="companyName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Company Name!'
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Catch Phrase"
                                            name="catchPhrase"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="BS"
                                            name="bs"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>



                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
    )
}

export default EditProfile
