import { Checkbox as AntCheckBox, Space } from 'antd';
import React, { useState } from 'react';

const CheckBox = (props) => {
  const { title, options } = props;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const checkBoxOptions = options?.map(option=> {
     return {label: option, value: option}
    })
  return (
    <div>
      {title}
      <AntCheckBox.Group options={checkBoxOptions} onChange={onChange} />
      {/* <Button>Submit</Button> */}
    </div>

  );
};
export default CheckBox;