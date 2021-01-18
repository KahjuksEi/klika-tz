let initialState = {
  tracks: [],
  pageSize: 10,
  totalTracksCount: 200,
  currentPage: 1,
  value: "",
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_TRACKS_COUNT":
      return {
        ...state,
        totalTracksCount: action.count,
      };
    case "CHANGE_PAGESIZE":
      return {
        ...state,
        pageSize: action.pageSize,
      };
    case "FILTER_BY_VALUE":
      return {
        ...state,
        value: action.value,
      };
    case "REVERSE_DATA": {
      let stateCopy = { ...state };
      stateCopy.tracks = [...action.tracks];
      stateCopy.tracks.reverse();
      return stateCopy;
    }
    default:
      return state;
  }
};

export const setTracksAC = (tracks) => {
  return { type: "SET_TRACKS", tracks };
};
export const setCurrentPageAC = (currentPage) => {
  return { type: "SET_CURRENT_PAGE", currentPage };
};
export const setTotalTracksCountAC = (totalTracksCount) => {
  return { type: "SET_TOTAL_TRACKS_COUNT", count: totalTracksCount };
};
export const setChangePageSizeAC = (pageSize) => {
  return { type: "CHANGE_PAGESIZE", pageSize };
};
export const setFilterByValueAC = (value) => {
  return { type: "SET_FILTER_BY_VALUE", value };
};
export const setReverseDataAC = (tracks) => {
  return { type: "REVERSE_DATA", tracks };
};

export default tracksReducer;
