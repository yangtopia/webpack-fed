import { atom } from 'recoil';

var commonState = atom({
    key: 'commonState',
    default: '', // default value (aka initial value)
});
var log = function () {
    console.log("hello");
};

export { commonState, log };
//# sourceMappingURL=index.js.map
