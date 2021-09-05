const arrChecked = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  check:1,
};

const reducer = (state = arrChecked, action) => {

  const arrAllFalse = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  };

  const arrAllTrue = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
  };

  switch (action.type) {

    case "CLICKFIRST":
      state.first = !state.first;
      console.log(state.first);
      if (state.first) {
        state = arrAllTrue;
      } else state = arrAllFalse;
      console.log(state);
      return state;

    case "CLICKSECOND":
      state.second = !state.second;
      console.log(state);
      return Object.assign({}, state);

    case "CLICKTHIRD":
      state.third = !state.third;
      console.log(state);
      return Object.assign({}, state);

    case "CLICKFOURTH":
      state.fourth = !state.fourth;
      console.log(state);
      return Object.assign({}, state);

    case "CLICKFIFTH":
      state.fifth = !state.fifth;
      console.log(state);
      return Object.assign({}, state);

    default:
      return state;
  }
};

export default reducer;