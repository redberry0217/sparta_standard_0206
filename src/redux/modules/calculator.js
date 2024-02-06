export const ADD_NUM = "ADD_NUM";
export const STR_NUM = "STR_NUM";

export const addNumber = (payload) => {
  return {
    type: ADD_NUM,
    payload,
  };
};

export const subtractNumber = (payload) => {
  return {
    type: STR_NUM,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return {
        ...state,
        number: parseInt(state.number) + parseInt(action.payload),
      };

    case STR_NUM:
      return {
        ...state,
        number: parseInt(state.number) - parseInt(action.payload),
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
