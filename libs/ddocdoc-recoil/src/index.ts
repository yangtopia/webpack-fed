import {atom} from 'recoil';

export const commonState = atom({
  key: 'commonState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const log = () => {
  console.log("hello");
};
