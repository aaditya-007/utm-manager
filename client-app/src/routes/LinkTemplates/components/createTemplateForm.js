import React from "react";
import { Form, Input, Button } from "antd";
import { API_HOST } from "../../../constants";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const refreshPage = () => {
    window.location.reload(false);
  }
const CreateTemplateForm= () => {
  const onFinish = (values) => {
    
    const body = { ...values.template };
    console.log(body);
    fetch(`${API_HOST}/templates/create`, {
      method: "POST",
      body: JSON.stringify({ ...values.template }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["template", "name"]}
        label="Template Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["template", "campaignName"]}
        label="Campaign Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["template", "medium"]} label="Medium">
        <Input />
      </Form.Item>
      <Form.Item name={["template", "source"]} label="Source">
        <Input />
      </Form.Item>
      <Form.Item name={["template", "content"]} label="Content">
        <Input />
      </Form.Item>
      <Form.Item name={["template", "term"]} label="Term">
        <Input />
      </Form.Item>
      <Form.Item name={["template", "notes"]} label="Notes">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick={refreshPage} htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTemplateForm;
