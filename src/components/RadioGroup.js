import { Button, Radio, Space } from 'antd';
import React, { useState } from 'react';

const App = (props) => {
  const { title, options } = props;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      {title}
      <Radio.Group name="radiogroup" onChange={onChange} value={value}>
        <Space direction="vertical">
          {options.map((option,index)=><Radio value={option}>{option}</Radio>)}
        </Space>
      </Radio.Group>
      {/* <Button>Submit</Button> */}
    </div>

  );
};
export default App;