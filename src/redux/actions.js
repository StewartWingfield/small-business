export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: car,
  };
};

export const deleteListing = (index) => {
  return {
    type: "DELETE_LISTING",
    value: index,
  };
};
