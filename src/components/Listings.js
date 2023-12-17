import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Listings = (props) => {
  return (
    <div className="card-container">
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {props.username && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/details/${listing.id}`} id="listingName">
                    {listing.name}
                  </Link>
                </TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.operatingHours}</TableCell>
                <TableCell>{listing.address}</TableCell>
                {props.username && (
                  <TableCell>
                    <DeleteIcon
                      onClick={() => {
                        props.deleteListing(index);
                      }}
                      className="text-red"
                    />
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listings;
