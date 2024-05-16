import React from "react";
import { Select } from "antd";
const { Option } = Select;
export default function TestSelect() {
  return (
    <Select placeholder="Select province">
      <Option value="Zhejiang">Zhejiang</Option>
      <Option value="Jiangsu">Jiangsu</Option>
    </Select>
  );
}
