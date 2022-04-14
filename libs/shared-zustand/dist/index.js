import create from 'zustand';

var useStore = create(function (set) { return ({
    bears: 0,
    increasePopulation: function () { return set(function (state) { return ({ bears: state.bears + 1 }); }); },
    removeAllBears: function () { return set({ bears: 0 }); }
}); });
var log = function () {
    console.log("Hello Zustand!");
};

export { log, useStore };
//# sourceMappingURL=index.js.map
