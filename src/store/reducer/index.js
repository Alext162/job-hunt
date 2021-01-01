export const initialState = {
  loading: true,
  jobs: [],
  errorMessage: null,
  length: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_JOBS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
        length: action.length,
      };
    case "SEARCH_JOBS_SUCCESS":
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        length: action.length,
      };
    case "SEARCH_JOBS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
        length: action.length,
      };
    default:
      return state;
  }
};
