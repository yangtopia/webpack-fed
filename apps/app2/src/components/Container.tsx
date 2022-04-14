import React, {ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';
import {commonState} from 'shared-recoil';
import {useStore} from 'shared-zustand';
import {Layout} from 'antd';

const {Content} = Layout;

const Container: React.VFC = () => {
  const bears = useStore(state => state.bears);
  const increase = useStore(state => state.increasePopulation);

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
      <h2>Module App 2: {text}</h2>
      <input type="text" value={text} onChange={oncChange}/>
      <br />
      <div>bears: {bears}</div>
      <button style={{ width: '100px' }} onClick={increase}>INCREASE</button>
    </Content>
  );
};

export default Container;
