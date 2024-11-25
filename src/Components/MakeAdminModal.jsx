import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Button, Avatar, Upload, Radio } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import img from '../assets/images/user1.png'
import { IoCameraOutline } from 'react-icons/io5';
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
    const [value, setValue] = useState(1);


    // Handle form submission
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    const onChange = (e) => {
        console.log(e.target.checked);
    }
    const onChanges = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Modal
            open={openModal}

            onCancel={() => setOpenModal(false)}
            footer={null}
            centered
        >
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div className='text-center font-medium text-xl py-4'>Make Admin</div>
                <div className='relative'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-full h-20  border-blue-600 border-2' src={img} alt="" />
                    </div>
                    <Upload className='absolute top-10 left-[260px] bg-[#007AFF] rounded-full p-1 h-7 w-7 text-white cursor-pointer' showUploadList={false}>
                        <IoCameraOutline size={20} />
                    </Upload>
                </div>
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

                <div className='flex items-center justify-between'>
                    <Item label="Give Access To" className='flex ' name="access">
                        <CheckboxGroup options={accessOptions} value={checkedList} onChange={onChange} />
                    </Item>
                    <div>


                        <div >
                            <Radio.Group onChange={onChanges} >
                                <Radio value={1}>Can Edit</Radio>
                                <Radio value={2}>View Only</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>

                <Button className='bg-black text-white ' htmlType="submit" block style={{ backgroundColor: 'black', borderRadius: 20, marginTop: 20 }}>
                    Make
                </Button>
            </Form>
        </Modal>
    );
};

export default MakeAdminModal;
