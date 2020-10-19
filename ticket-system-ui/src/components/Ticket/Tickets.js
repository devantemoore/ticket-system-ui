import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ticketService from "../../services/TicketService";
import TicketItem from "../TicketItem/TicketItem";
import "./style.css";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    retrieveTickets();
  }, []);

  const retrieveTickets = () => {
    ticketService
      .getAll()
      .then((response) => {
        setTickets(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="ticketContainer">
      <Link to={"/tickets/new"}>
        <button className="btn new-ticket">New Ticket</button>
      </Link>
      <table className="tableContainer">
        <thead>
          <tr>
            <td>Ticket Number</td>
            <td>Title</td>
            <td>Description</td>
            <td>Created By</td>
            <td>Date Created</td>
            <td>User Email</td>
            <td>Assignee</td>
            <td>Priority</td>
            <td>Status</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <TicketItem tickets={tickets} />
      </table>
    </div>
  );
};

export default Tickets;
