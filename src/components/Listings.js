import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@material-ui/core";

const Listings = (props) => {
  console.log("props", props);
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>{listing.name}</TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.operatingHours}</TableCell>
              <TableCell>{listing.address}</TableCell>
              <TableCell>delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
