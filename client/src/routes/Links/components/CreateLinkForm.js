import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

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

const CreateLinkForm = () => {
  const onFinish = (values) => {
    const body = { ...values.link };
    console.log(body);
    fetch("/links/create", {
      method: "POST",
      body: JSON.stringify({ ...values.link }),
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
        name={["link", "baseUrl"]}
        label="Base Url"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["link", "campaignName"]}
        label="Campaign Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["link", "medium"]} label="Medium">
        <Input />
      </Form.Item>
      <Form.Item name={["link", "source"]} label="Source">
        <Input />
      </Form.Item>
      <Form.Item name={["link", "content"]} label="Content">
        <Input />
      </Form.Item>
      <Form.Item name={["link", "term"]} label="Term">
        <Input />
      </Form.Item>
      <Form.Item name={["link", "notes"]} label="Notes">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateLinkForm;
