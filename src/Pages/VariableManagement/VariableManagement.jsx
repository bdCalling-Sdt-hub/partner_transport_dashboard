import React from 'react'
import PageName from '../../Components/Shared/PageName'

import { Table, Input, Button, Form } from 'antd';
const data = [
  { key: '1', label: 'Surcharge Factor', placeholder: 'Surcharge Value (%)' },
  { key: '2', label: 'Coverage Radius', placeholder: 'Radius Value (km)' },
  { key: '3', label: 'Minimum Start Fee', placeholder: 'Value ($)' },
  { key: '4', label: 'Minimum Weight of Load Fee', placeholder: 'Value ($)' },
  { key: '5', label: 'Minimum By Distance Fee', placeholder: 'Value ($)' },
  { key: '6', label: 'Maximum Start Fee', placeholder: 'Value ($)' },
  { key: '7', label: 'Maximum Weight of Load Fee', placeholder: 'Value ($)' },
  { key: '8', label: 'Maximum By Distance Fee', placeholder: 'Value ($)' },
  { key: '9', label: 'Conversion Rate (Dollar to Mexican peso)', placeholder: '1 Dollar =', addonAfter: 'Mexican peso' },
];
const VariableManagement = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className=" mx-auto bg-white p-8 rounded-lg shadow-md">
    <div className="flex justify-between items-center border-b pb-4 mb-6 pr-72">
      <span className="text-lg font-semibold">SL no.</span>
      <span className="text-lg font-semibold ">Variable</span>
      <span className="text-lg font-semibold">Input</span>
    </div>
    <Form onFinish={handleSubmit} layout="vertical" className="space-y-4">
      {data.map((item, index) => (
        <div key={item.key} className="flex items-center space-x-4">
          {/* Serial Number */}
          <span className="w-20 text-center  text-gray-500">{String(index + 1).padStart(2, '0')}</span>
          
          {/* Label */}
          <span className="flex-1 pl-96 text-left  mx-auto font-medium">{item.label}</span>
          
          {/* Input Field */}
          <Form.Item
            name={item.key}
            className="w-80"
            rules={[{ required: true, message: `Please input ${item.label.toLowerCase()}` }]}
          >
            <Input 
              placeholder={item.placeholder} 
              addonAfter={item.addonAfter} 
              className="border-gray-300 rounded-md" 
            />
          </Form.Item>
        </div>
      ))}
      <div className="text-center mt-8">
        <Button type="primary" htmlType="submit" className="bg-black text-white px-10 py-2 rounded-full">
          Save
        </Button>
      </div>
    </Form>
  </div>
  )
}

export default VariableManagement