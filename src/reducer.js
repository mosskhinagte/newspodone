export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing...
  //token:"BQB3OszWQj4hGEB3EE7f_RdOk2SIalagK-tVTZlR-R8Mqn94vV…E7R8wvvTzbdyFRHYQuSbJ3nLTKuHzMSQvqSCn5POT2d5EtrHO",
};

const reducer = (state, action) => {
  console.log(action);

  //ACTION

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
