import React, { useState } from "react";
import { Modal, Button } from "antd";
import CreateLinkForm from "./components/CreateLinkForm";
import AllLinks from "./components/AllLinks";

const Links = () => {
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
        Create Link
      </Button>
      <Modal
        title="New Link"
        visible={visible}
        footer={null}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateLinkForm />
      </Modal>
      <AllLinks />
    </div>
  );
};

export default Links;
