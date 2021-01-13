import Tracks from "./Tracks";
import { connect } from "react-redux";
import {
  setTracksAC,
  setCurrentPageAC,
  setTotalTracksCountAC,
  setChangePageSizeAC,
  setFilterByValueAC,
} from "../redux/tracks-reducer";

let mapStateToProps = (state) => {
  return {
    tracks: state.tracksPage.tracks,
    pageSize: state.tracksPage.pageSize,
    totalTracksCount: state.tracksPage.totalTracksCount,
    currentPage: state.tracksPage.currentPage,
    value: state.tracksPage.value,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setTracks: (tracks) => {
      dispatch(setTracksAC(tracks));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalTracksCount: (totalTracksCount) => {
      dispatch(setTotalTracksCountAC(totalTracksCount));
    },
    setChangePageSize: (pageSize) => {
      dispatch(setChangePageSizeAC(pageSize));
    },
    setFilterByValue: (value) => {
      dispatch(setFilterByValueAC(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
