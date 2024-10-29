import { Modal } from 'antd';
import React from 'react';

const ViewTicketModal = ({openViewTicket, setOpenViewTicket}) => {
  return (
    <Modal footer={false}  centered open={openViewTicket}  onCancel={()=> setOpenViewTicket(false)}>
      <div>
        <h1>Ticket Details</h1>
      </div>
    </Modal>
  );
}

export default ViewTicketModal;
