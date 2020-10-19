import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TicketService from "../../services/TicketService";
import "./style.css";

const Detail = (props) => {
  const initialTicket = {
    id: null,
    ticketNumber: "",
    title: "",
    description: "",
    createdBy: "",
    dateCreated: null,
    email: "",
    assignee: "",
    priority: null,
    status: null,
  };
  const [ticket, setTicket] = useState(initialTicket);

  const getTicketById = (id) => {
    TicketService.get(id)
      .then((response) => {
        setTicket(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTicketById(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="detail-container">
      {ticket ? (
        <div className="ticket-card">
          <div className="card-header">
            {ticket.ticketNumber} - "{ticket.title}"
          </div>
          <div className="card-body">
            <b>Description:</b> {ticket.description}
            <br />
            <b>Created By:</b> {ticket.createdBy}
            <br />
            <b>Date Created:</b> {ticket.dateCreated}
            <br />
            <b>Email:</b> {ticket.email}
            <br />
            <b>Assignee:</b> {ticket.assignee}
            <br />
            <b>Priority:</b> {ticket.priority}
            <br />
            <b>Status:</b> {ticket.status}
            <br />
          </div>
          <div className="card-footer">
            <Link to="/tickets" className="btn">
              Back to List
            </Link>
            <Link to="/tickets/modal" className="btn delete">
              Delete
            </Link>
            <Link to="/tickets/edit/:id" className="btn edit">
              Edit
            </Link>
          </div>
        </div>
      ) : (
        <div>No ticket to display or ticket does not exist</div>
      )}
    </div>
  );
};

export default Detail;