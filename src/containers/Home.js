import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(Navigation);
