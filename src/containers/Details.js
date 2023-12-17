import { connect } from "react-redux";
import Details from "../components/Details";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    username: state.username,
  };
};

export default connect(mapStateToProps)(Details);
