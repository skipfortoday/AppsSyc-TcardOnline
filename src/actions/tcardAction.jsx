import axios from "axios";

export const GET_TCARD_EVOPERINCIAN = "GET_TCARD_EVOPERINCIAN";
export const GET_LTCARD_EVOPERINCIAN = "GET_LTCARD_EVOPERINCIAN";

export const getTcardEvoPerincian = () => {
    return (dispatch) => {
      axios
        .get("http://localhost:3003/evoucherperincian/data")
        .then(function (response) {
          dispatch({
            type: GET_TCARD_EVOPERINCIAN,
            payload: {
              data: response.data.data,
              errorMessage: false,
            },
          });
          console.log(response)
        })
        .catch(function (error) {
          dispatch({
            type: GET_TCARD_EVOPERINCIAN,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const getLTcardEvoPerincian = () => {
    return (dispatch) => {
      axios
        .get("http://localhost:3000/evoucherperincian/data")
        .then(function (response) {
          dispatch({
            type: GET_LTCARD_EVOPERINCIAN,
            payload: {
              data: response.data.data,
              errorMessage: false,
            },
          });
          console.log(response)
        })
        .catch(function (error) {
          dispatch({
            type: GET_LTCARD_EVOPERINCIAN,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };