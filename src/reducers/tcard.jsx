import { GET_LTCARD_EVOPERINCIAN, GET_TCARD_EVOPERINCIAN } from "../actions/tcardAction";

  let initialState = {
    getTcardEvoPerincian: false,
    errorTcardEvoPerincian: false,
    getLTcardEvoPerincian: false,
    errorLTcardEvoPerincian: false,
  };
  
  const tcard = (state = initialState, action) => {
    switch (action.type) {
      case GET_TCARD_EVOPERINCIAN:
        return {
          ...state,
          getTcardEvoPerincian: action.payload.data,
          errorTcardEvoPerincian: action.payload.errorMessage,
        };

        case GET_LTCARD_EVOPERINCIAN:
        return {
          ...state,
          getLTcardEvoPerincian: action.payload.data,
          errorLTcardEvoPerincian: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default tcard;
  