import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps)(Listings);
