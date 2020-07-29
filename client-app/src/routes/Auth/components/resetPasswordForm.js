import React from "react";
import { Form, Input, Button} from "antd";
import {connect} from 'react-redux';
import {resetPassword} from '../../../store/action.js';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const resetPasswordForm = (props) => {
  const onFinish = values => {
    console.log("submit");
  props.resetPassword(values);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input the registered Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  resetPassword: email => dispatch(resetPassword(email))
})
export default connect(null, mapDispatchToProps)(resetPasswordForm);
