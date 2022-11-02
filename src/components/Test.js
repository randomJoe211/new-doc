import { Button, Radio, Space } from 'antd';
import React, { useState } from 'react';
import RadioGroup from '@site/src/components/RadioGroup';
import CheckBox from '@site/src/components/CheckBox';


const Test = (props) => {
  const { data } = props;
  const [value, setValue] = useState(1);
//   const onChange = (e) => {
//     console.log('radio checked', e.target.value);
//     setValue(e.target.value);
//   };
  return (
    <div>
      {data?.map(item => {
        if(item.type ==='radio'){
            return <RadioGroup title={item.title} options={item.options}></RadioGroup>
        }
        if(item.type ==='checkbox'){
            return <CheckBox title={item.title} options={item.options}></CheckBox>
        }
      })}
      <Button>提交</Button>
    </div>

  );
};
export default Test;