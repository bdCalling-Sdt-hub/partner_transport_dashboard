import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Button, Upload, Radio } from 'antd';
import { IoCameraOutline } from 'react-icons/io5';
import img from '../assets/images/user1.png';
import { useCreateMakeAdminMutation } from '../redux/api/makeAdminApi';
import { toast } from 'sonner';

const { Item } = Form;
const CheckboxGroup = Checkbox.Group;

const accessOptions = [
    'Dashboard', 'Auction Management', 'User Management', 'Partner Management',
    'Transaction', 'Category Management', 'Variable Management',
    'Review Conversation', 'Bank Transfer', 'Support', 'Settings',
    'Notification Manage', 'Audit Dashboard', 'Terms & Condition', 'Privacy Policy',
];

const MakeAdminModal = ({ openModal, setOpenModal }) => {
    const [createMakeAdmin] = useCreateMakeAdminMutation()


    const [form] = Form.useForm();
    const [accessRights, setAccessRights] = useState(
        accessOptions.reduce((acc, option) => {
            acc[option] = { canEdit: false, viewOnly: false, selected: false };
            return acc;
        }, {})
    );

    // Handle checkbox change
    const handleCheckboxChange = (checkedValues) => {
        const updatedRights = { ...accessRights };
        Object.keys(accessRights).forEach((key) => {
            updatedRights[key] = {
                ...updatedRights[key],
                selected: checkedValues.includes(key),
            };
        });
        setAccessRights(updatedRights);
    };

    // Handle radio button change
    const handleRadioChange = (key, value) => {
        const updatedRights = {
            ...accessRights,
            [key]: {
                ...accessRights[key],
                canEdit: value === 'canEdit',
                viewOnly: value === 'viewOnly',
            },
        };
        setAccessRights(updatedRights);
    };

    // Handle form submission
    const onFinish = (values) => {
        const formattedData = {
            ...values,
            role: "ADMIN",
            ...Object.keys(accessRights).reduce((acc, key) => {
                if (accessRights[key].selected) {
                    acc[`accTo_${key.replace(/\s+/g, '_').toLowerCase()}`] = true;
                    acc[`accTo_${key.replace(/\s+/g, '_').toLowerCase()}_edit`] = accessRights[key].canEdit;
                }
                return acc;
            }, {}),
        };
        console.log('Formatted Data:', formattedData);


        createMakeAdmin(formattedData).unwrap()
            .then((payload) => {
                toast.success("Admin Create Successfully")
                setOpenModal(false)

            })
            .catch((error) => {
                toast.error(error?.data?.message)
            });
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
                        <img className='rounded-full h-20 border-blue-600 border-2' src={img} alt="" />
                    </div>
                    <Upload className='absolute top-10 left-[260px] bg-[#007AFF] rounded-full p-1 h-7 w-7 text-white cursor-pointer' showUploadList={false}>
                        <IoCameraOutline size={20} />
                    </Upload>
                </div>
            </div>

            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Item label="Name of the Admin" name="name" rules={[{ required: true, message: 'Please enter the name' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Contact Number" name="phone_number" rules={[{ required: true, message: 'Please enter the contact number' }]}>
                    <Input placeholder="Type here" />
                </Item>

                <Item label="Password" name="password" rules={[{ required: true, message: 'Please enter the password' }]}>
                    <Input.Password placeholder="Type here" />
                </Item>

                <Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please enter the password' }]}>
                    <Input.Password placeholder="Type here" />
                </Item>

                <div className="flex items-center justify-between">
                    <div style={{ width: '50%' }}>
                        <CheckboxGroup
                            options={accessOptions}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div style={{ width: '50%' }}>
                        {accessOptions.map((option) => (
                            <div key={option}>
                                <Radio.Group
                                    value={
                                        accessRights[option].canEdit
                                            ? 'canEdit'
                                            : accessRights[option].viewOnly
                                                ? 'viewOnly'
                                                : null
                                    }
                                    onChange={(e) => handleRadioChange(option, e.target.value)}
                                    disabled={!accessRights[option].selected} // Disable if the checkbox is not selected
                                >
                                    <Radio value="canEdit">Can Edit</Radio>
                                    <Radio value="viewOnly">View Only</Radio>
                                </Radio.Group>
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    className="bg-black text-white"
                    htmlType="submit"
                    block
                    style={{ backgroundColor: 'black', borderRadius: 20, marginTop: 20 }}
                >
                    Make
                </Button>
            </Form>
        </Modal>
    );
};

export default MakeAdminModal;
