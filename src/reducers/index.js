const INITIAL_INFORMATIONS = {
  matrix1: {},
  matrix2: {},
  result: [],
};

function reducer(state = INITIAL_INFORMATIONS, dispatch) {
  const reducers = {
    matrix1: {
      ...state,
      matrix1: dispatch.matrix1,
    },
    matrix2: {
      ...state,
      matrix2: dispatch.matrix2,
    },
    result: {
      ...state,
      result: dispatch.result,
    },
    default: INITIAL_INFORMATIONS,
  };

  console.log(reducers[dispatch.type] || reducers.default);
  return reducers[dispatch.type] || reducers.default;
}

export default reducer;
