import React, { useState } from 'react'
import PageName from '../../Components/Shared/PageName'
import { IoIosAdd } from 'react-icons/io'
import { Form, Input, Modal, Table } from 'antd'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import { useCrateCategoryMutation, useGetCategoryQuery, } from '../../redux/api/categoryManagementApi'
import { toast } from 'sonner'

const CategoryManagement = () => {
  const [form] = Form.useForm()
  const [categoryStatus, setCategoryStatus] = useState('Waste')
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const [editCategoryModal, setEditCategoryModal] = useState(false)


  // console.log(serviceType , categoryStatus);
  // category management api
  const [createCategory] = useCrateCategoryMutation()
  const { data: allCategory } = useGetCategoryQuery(categoryStatus)
  console.log(allCategory?.data?.data);
  const columns = [
    {
      title: 'SL no.', dataIndex: 'slno', key: 'slno'
    },
    {
      title: 'Category', dataIndex: 'category', key: 'category'
    },
    {
      title: <div className='text-end'>Action</div>, dataIndex: 'action', key: 'action', render: (_, record) => {
        return (
          <div className='flex justify-end'>
            <button onClick={() => setEditCategoryModal(true)} className='bg-blue-500 text-white rounded-sm p-1 mr-2'><CiEdit size={20} /></button>
            <button className='bg-red-500 text-white rounded-sm p-1'><MdDeleteOutline size={20} /></button>
          </div>
        )
      }
    },
  ]

  const data = allCategory?.data?.data?.map((cat, i) => {
    return (
      {
        slno: i+ 1,
        category: cat?.category,
        subServiceType : cat?.subServiceType
      }
    )
  })

  // const data = [
  //   {
  //     slno: "#1233",
  //     category: 'Urban waste'
  //   },
  //   {
  //     slno: "#1233",
  //     category: 'Industrial waste'
  //   },
  //   {
  //     slno: "#1233",
  //     category: 'Electronic waste'
  //   },
  //   {
  //     slno: "#1233",
  //     category: 'Construction waste'
  //   }
  // ]


  // ---- handle create category function--------//
  const handelCreateCategory = (value) => {

    let serviceType = ''
    if (categoryStatus === "Goods" || categoryStatus === "Waste") {
      serviceType = "move"
    } else {
      serviceType = "sell"
    }

    const data = {
      serviceType: serviceType,
      subServiceType: categoryStatus,
      category: value?.category
    }
    createCategory(data).unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        setAddCategoryModal(false)
        form.resetFields('')
      })
      .catch((error) => toast.error(error?.data?.message));

  }


  return (
    <div className='bg-white p-5'>
      <PageName name={'Category Management'} />
      <div className='mt-5 flex items-center justify-between '>
        <div className='flex items-center gap-2  px-2'>
          <div onClick={() => setCategoryStatus('Goods')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'Goods' ? "bg-black text-white" : ""}`}>Goods</div>
          <div onClick={() => setCategoryStatus('Waste')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'Waste' ? "bg-black text-white" : ""}`}>Waste</div>
          <div onClick={() => setCategoryStatus('Recyclable materials')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'Recyclable materials' ? "bg-black text-white" : ""}`}>Recyclable Material</div>
          <div onClick={() => setCategoryStatus('Second-hand items')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${categoryStatus === 'Second-hand items' ? "bg-black text-white" : ""}`}>Second-hand items</div>
        </div>
        <div>
          <button onClick={() => setAddCategoryModal(true)} className='items-center flex gap-2 bg-black text-white px-5 py-2 rounded-full'><IoIosAdd size={20} /><span>Add</span></button>
        </div>
      </div>
      <div className='mt-5 mx-auto max-w-7xl'>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      {/* Edit Category modal */}
      <Modal open={addCategoryModal} onCancel={() => setAddCategoryModal(false)} centered footer={false}>
        <div>
          <h1 className='text-xl font-medium text-center mb-5'>Add Category </h1>
          <Form layout='vertical' onFinish={handelCreateCategory} form={form} >
            <Form.Item
              className='w-full'
              label="Category Name" name='category' rules={[{ required: true, message: 'Please enter category name!' }]}
            >
              <Input />
            </Form.Item>

            <div className='flex justify-between gap-3'>
              <Form.Item className='w-full'>
                <button className='w-full bg-black text-white rounded-full  py-2' >Save</button>
              </Form.Item>
              <Form.Item className='w-full'>
                <button onClick={() => setAddCategoryModal(false)} type='button' className=' border border-black text-black rounded-full w-full p-1 ' >Cancel</button>
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
              name="category"
              label="Category Name" rules={[{ required: true, message: 'Please enter category name!' }]}
            >
              <Input />
            </Form.Item>

            <div className='flex justify-between gap-3'>
              <Form.Item className="w-full">
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-full py-2"
                >
                  Update
                </button>
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