import React from "react";
import { Container, Paper, Chip } from "@mui/material";

const listing = (props) => {
  console.log("propsList", props);
  const id = props.match.params.id;

  const listing = props.listings.find((c) => c.id == id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="listing-paper">
        <h2>{listing.name}</h2>
        {Object.keys(listing).map((key, idx) => {
          return <Chip label={`${key}: ${listing[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default listing;
