import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { createListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createListing: (user) => dispatch(createListing(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
