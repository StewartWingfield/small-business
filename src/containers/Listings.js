import { connect } from "react-redux";
import Listings from "../components/Listings";
import { deleteListing, logOutUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (index) => dispatch(deleteListing(index)),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
