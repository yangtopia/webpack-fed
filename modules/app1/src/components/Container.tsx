import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { app1State } from '../atoms/app1';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

const Container: React.VFC = () => {
  const [text, setText] = useRecoilState(app1State);

  const oncChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Modules</Breadcrumb.Item>
        <Breadcrumb.Item>App1</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <h2>Module App 1: {text}</h2>
        <input type="text" value={text} onChange={oncChange} />
      </Content>
    </>
  );
};

export default Container;
