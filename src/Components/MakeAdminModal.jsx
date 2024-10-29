import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Button, Avatar, Upload } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import img from '../assets/images/user1.png'
const { Item } = Form;
const CheckboxGroup = Checkbox.Group;
const accessOptions = [
    'Dashboard', 'Auction Management', 'User Management', 'Partner Management',
    'Transaction', 'Category Management', 'Variable Management',
    'Review Conversation', 'Bank Transfer', 'Support', 'Settings'
];

const MakeAdminModal = ({ openModal, setOpenModal }) => {
    const [checkedList, setCheckedList] = useState();
    const [form] = Form.useForm();

    // Handle form submission
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    const onChange = (e) => {
        console.log(e.target.checked);
    }

    return (
        <Modal
            open={openModal}
            title="Make Admin"
            onCancel={() => setOpenModal(false)}
            footer={null}
            centered
        >
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <img src={img} alt="" />
                <Upload showUploadList={false}>
                    <Button
                        shape="circle"
                        icon={<CameraOutlined />}
                        style={{
                            position: 'relative',
                            top: -30,
                            left: 25,
                            backgroundColor: '#fff',
                            borderColor: '#d9d9d9',
                        }}
                    />
                </Upload>
            </div>

            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Item label="Name of the Admin" name="adminName" rules={[{ required: true, message: 'Please enter the name' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Contact Number" name="contactNumber" rules={[{ required: true, message: 'Please enter the contact number' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Password" name="password" rules={[{ required: true, message: 'Please enter the password' }]}>
                    <Input.Password placeholder="Type here" />
                </Item>

                <Item label="Give Access To" className='flex ' name="access">
                    <CheckboxGroup options={accessOptions} value={checkedList} onChange={onChange} />
                </Item>

                <Button className='bg-black text-white ' htmlType="submit" block style={{backgroundColor : 'black', borderRadius: 20, marginTop: 20 }}>
                    Make
                </Button>
            </Form>
        </Modal>
    );
};

export default MakeAdminModal;
