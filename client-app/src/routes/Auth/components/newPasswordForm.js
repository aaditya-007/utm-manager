import React from "react";
import { Form, Input, Button } from "antd";

import {connect} from 'react-redux';
import {newPassword} from '../../../store/action.js';


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

const newPasswordForm = (props) => {
  const onFinish = values => {
      const data={
      password:values.password,
      userId:props.param.user,
      token:props.param.token
    }
    props.newPassword(data);
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
        name="password"
        label="New Password"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
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
  newPassword: email => dispatch(newPassword(email))
})
export default connect(null, mapDispatchToProps)(newPasswordForm);