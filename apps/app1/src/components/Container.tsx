import React, {ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';
import {commonState} from 'shared-recoil';
import {Layout} from 'antd';

const {Content} = Layout;

const Container: React.VFC = () => {
  const [text, setText] = useRecoilState(commonState);

  const oncChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <h2>Module App 1: {text}</h2>
      <input type="text" value={text} onChange={oncChange}/>
    </Content>
  );
};

export default Container;
