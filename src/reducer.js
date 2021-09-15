const initState = {
  items: [],
  loading: false,
  error: null,
};
export const petReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PETS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PETS_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_PETS_FAILURE":
      return { ...state, loading: false, error: action.error, items: [] };
    case "FILTER_PETS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
