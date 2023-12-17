import React from "react";

function Details(props) {
  const url = window.location.href.split("/");
  const wantedListing = url[url.length - 1];
  const listings = props.listings.find(
    (listing) => listing.id === Number(wantedListing)
  );
  if (!wantedListing) {
    return <div>Listing not found</div>;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <div className="details">
        <h1>Business: {listings.name}</h1>
        <h3>Address: {listings.address}</h3>
        <h3>Hours: {listings.operatingHours}</h3>
        <h3>Description: {listings.description}</h3>
      </div>
    </div>
  );
}

export default Details;
