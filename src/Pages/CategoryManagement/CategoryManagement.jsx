import React, { useState } from 'react'
import PageName from '../../Components/Shared/PageName'
import { IoIosAdd } from 'react-icons/io'
import { Form, Input, Modal, Table } from 'antd'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

const CategoryManagement = () => {
  const [categoryStatus, setCategoryStatus] = useState('waste')
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const [editCategoryModal, setEditCategoryModal] = useState(false)

  const columns = [
    {
      title: 'SL no.', dataIndex: 'slno', key: 'slno'
    },
    {
      title: 'Category', dataIndex: 'category', key: 'category'
    },
    {
      title: 'Action', dataIndex: 'action', key: 'action', render: (_, record) => {
        return (
          <div>
            <button onClick={() => setEditCategoryModal(true)} className='bg-blue-500 text-white rounded-sm p-1 mr-2'><CiEdit size={20} /></button>
            <button className='bg-red-500 text-white rounded-sm p-1'><MdDeleteOutline size={20} /></button>
          </div>
        )
      }
    },
  ]

  const data = [
    {
      slno: 1,
      category: 'Urban waste'
    },
    {
      slno: 1,
      category: 'Urban waste'
    },
    {
      slno: 1,
      category: 'Urban waste'
    }
  ]
  return (
    <div className='bg-white p-5'>
      <PageName name={'Category Management'} />
      <div className='mt-5 flex items-center justify-between '>
        <div className='flex items-center gap-2  px-2'>
          <div onClick={() => setCategoryStatus('good')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'good' ? "bg-black text-white" : ""}`}>Goods</div>
          <div onClick={() => setCategoryStatus('waste')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'waste' ? "bg-black text-white" : ""}`}>Waste</div>
          <div onClick={() => setCategoryStatus('recycle')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'recycle' ? "bg-black text-white" : ""}`}>Recyclable Material</div>
          <div onClick={() => setCategoryStatus('second')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'second' ? "bg-black text-white" : ""}`}>Second-hand items</div>
        </div>
        <div>
          <button onClick={() => setAddCategoryModal(true)} className='items-center flex gap-2 bg-black text-white px-5 py-2 rounded-full'><IoIosAdd size={20} /><span>Add</span></button>
        </div>
      </div>
      <div className='mt-5 '>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      {/* Edit Category modal */}
      <Modal open={addCategoryModal} onCancel={() => setAddCategoryModal(false)} centered footer={false}>
        <div>
          <h1 className='text-xl font-medium text-center mb-5'>Add Category </h1>
          <Form layout='vertical' >
            <Form.Item
              className='w-full'
              label="Category Name" name='categoryName' rules={[{ required: true, message: 'Please enter category name!' }]}
            >
              <Input />
            </Form.Item>

            <div className='flex justify-between gap-3'>
              <Form.Item className='w-full'>
                <button className='w-full bg-black text-white rounded-full  py-2' >Save</button>
              </Form.Item>
              <Form.Item className='w-full'>
                <button className=' border border-black text-black rounded-full w-full p-1 ' >Cancel</button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>

      {/* Update category modal */}
      <Modal open={editCategoryModal} onCancel={() => setEditCategoryModal(false)} centered footer={false}>
        <div>
          <h1 className='text-xl font-medium text-center mb-5'>Edit Category </h1>
          <Form layout='vertical' >
            <Form.Item
              className='w-full'
              label="Category Name" name='categoryName' rules={[{ required: true, message: 'Please enter category name!' }]}
            >
              <Input />
            </Form.Item>

            <div className='flex justify-between gap-3'>
              <Form.Item className='w-full'>
                <button className='w-full bg-black text-white rounded-full  py-2' >Update</button>
              </Form.Item>
              <Form.Item className='w-full'>
                <button className=' border border-black text-black rounded-full w-full p-1 ' >Cancel</button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default CategoryManagement