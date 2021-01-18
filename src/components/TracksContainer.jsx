import Tracks from "./Tracks";
import { connect } from "react-redux";
import {
  setTracksAC,
  setCurrentPageAC,
  setTotalTracksCountAC,
  setChangePageSizeAC,
  setFilterByValueAC,
  setReverseDataAC,
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
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
    setReverseData: (tracks) => {
      dispatch(setReverseDataAC(tracks));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
