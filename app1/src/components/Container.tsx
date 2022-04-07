import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../atoms/text';

const Container: React.VFC = () => {
  const [text, setText] = useRecoilState(textState);

  const oncChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Module App 1: {text}</h2>
      <input type="text" value={text} onChange={oncChange} />
    </div>
  );
};

export default Container;
