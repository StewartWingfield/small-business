import { connect } from "react-redux";
import addListing from "../components/AddListing";
import { addListing } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};

export default connect(null, mapDispatchToProps)();
