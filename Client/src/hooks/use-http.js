import { useReducer, useCallback } from 'react';

function httpReducer(state, action) {

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
    };
  }

  return state;
}

function useHttp(requestFunction) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        console.log(error);
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
