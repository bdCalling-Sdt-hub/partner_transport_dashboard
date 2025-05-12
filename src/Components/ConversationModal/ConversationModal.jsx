import { Modal } from "antd";
import React from "react";
import { imageUrl } from "../../redux/api/baseApi";

const ChatBubble = ({ message, getConversation, senderId }) => {
  // console.log(message);
  const isSelf = senderId === message?.senderId;

  return (
    <div
      className={`flex items-start space-x-2 ${
        isSelf ? "flex-row-reverse text-right" : ""
      } mb-4`}
    >
      {isSelf ? (
        <img
          src={`${imageUrl}${getConversation?.data?.participants?.sender?.details?.profile_image}`}
          size="large"
          className={
            isSelf
              ? "ml-2 h-10 w-10 rounded-full"
              : "mr-2 h-10 w-10 rounded-full"
          }
        />
      ) : (
        <img
          src={`${imageUrl}${getConversation?.data?.participants?.receiver?.details?.profile_image}`}
          size="large"
          className={"mr-2 h-10 w-10 rounded-full"}
        />
      )}

      <div
        className={`flex flex-col max-w-xs ${
          isSelf ? "bg-black text-white" : "bg-[#5C5C5C] text-white"
        } p-3 rounded-lg`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
        <span className={`text-xs ${isSelf ? "text-gray-400" : "text-white"}`}>
          {message.time}
        </span>
      </div>
    </div>
  );
};

const ConversationModal = ({
  openConversationModal,
  setOpenConversationModal,
  getConversation,
  senderId,
  setConversationIds,
}) => {
  // console.log(getConversation?.data?.conversation?.messages);

  return (
    <div>
      <Modal
        onCancel={() => {
          setOpenConversationModal(false);
          // setConversationIds({})
        }}
        open={openConversationModal}
        centered
        footer={false}
        width={800}
      >
        <div className="text-center text-xl font-medium border-b pb-2">
          Conversation Overview
        </div>

        <div className="p-6 mx-auto bg-white rounded-lg space-y-4 max-h-[80vh] overflow-y-auto">
          {[...getConversation?.data?.conversation?.messages]
            .reverse()
            .map((msg) => (
              <ChatBubble
                key={msg.id}
                message={msg}
                getConversation={getConversation}
                senderId={senderId}
              />
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default ConversationModal;
