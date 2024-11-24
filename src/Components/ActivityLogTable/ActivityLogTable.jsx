import { Button, Table, Tag } from 'antd'
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5';
const ActivityLogTable = ({dataSource}) => {
    const columns = [
        {
          title: "Timestamp",
          dataIndex: "timestamp",
          key: "timestamp",
          width: "20%",
        },
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          width: "15%",
        },
        {
          title: "Admin Name",
          dataIndex: "admin",
          key: "admin",
          width: "20%",
          render: (admin) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={admin.avatar} size="large" style={{ marginRight: 10 }} />
              {admin.name}
            </div>
          ),
        },
        {
          title: "Action Type",
          dataIndex: "actionType",
          key: "actionType",
          width: "15%",
        },
        {
          title: "Action Description",
          dataIndex: "actionDescription",
          key: "actionDescription",
          width: "25%",
        },
        {
          title: "Result",
          dataIndex: "result",
          key: "result",
          width: "10%",
          render: (result) => (
            <p
            className={`w-20 text-center ${result === "Error" ? "border border-[#FF5454] text-[#FF5454]" : ""} ${result === "Success" ? "border border-[#2AB9A4] text-[#2AB9A4]":""}`}
              style={{
                borderRadius: "20px",
                padding: "5px 10px",
                fontWeight: "bold",
                
              }}
            >
              {result}
            </p>
          ),
        },
        {
          title: "Details",
          key: "details",
          width: "10%",
          render: () => (
            <Button
              type="primary"
              icon={<IoEyeOutline size={20} />}
              style={{ backgroundColor: "#007BFF", border: "none" }}
            />
          ),
        },
      ];
      
    return (
        <div style={{ padding: "20px" }}>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    total: 1239,
                    pageSize: 11,
                    showSizeChanger: false,
                }}
                bordered={false}
            />
        </div>
    )
}

export default ActivityLogTable