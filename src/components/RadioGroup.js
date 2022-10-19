import { Input, Radio, Space } from 'antd';
import React, { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group name="radiogroup" onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>Option D</Radio>
      </Space>
    </Radio.Group>
  );
};
export default App;