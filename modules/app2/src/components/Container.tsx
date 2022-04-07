import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { app2State } from '../atoms/app2';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

const Container: React.VFC = () => {
  const [text, setText] = useRecoilState(app2State);

  const oncChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Modules</Breadcrumb.Item>
        <Breadcrumb.Item>App2</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <h2>Module App 2: {text}</h2>
        <input type="text" value={text} onChange={oncChange} />
      </Content>
    </>
  );
};

export default Container;
