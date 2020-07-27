import React ,{useState}from 'react';
import { Modal, Button } from "antd";
import CreateTemplateForm from "./components/createTemplateForm";
import Alltemplates from "./components/allTemplates";

const Templates = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  // const handleOk = (e) => {
  //   console.log(e);
  //   setVisible(false);
  // };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create Template
      </Button>
      <Modal
        title="New Template"
        visible={visible}
        footer={null}
        // onOk={handleOk}
         onCancel={handleCancel}
      >
       <CreateTemplateForm/> 
      </Modal>
     <Alltemplates/>
    </div>
  );
};

export default Templates;