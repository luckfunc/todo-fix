import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import TestSelect from "./testSelect";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";

const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("value", values);
    const formValue = form.getFieldsValue();
    console.log("formValue", formValue);
  };

  return (
    <Form
      name="complex-form"
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Address" name="Ad111dress">
        <TestSelect />
        {/* <Select options={[{ label: "test", value: "test" }]} /> */}
      </Form.Item>

      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
