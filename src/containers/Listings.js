import { connect } from "react-redux";
import Navigation from "../components/Navigation";

import { removeCar } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
