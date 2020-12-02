import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const TicketItem = (props) => {
  const getPriority = (ticket) => {
    switch (ticket.priority) {
      case 0:
        return "Low";
      case 1:
        return "Medium";
      case 2:
        return "High";
      default:
        return "Low";
    }
  };
  const getStatus = (ticket) => {
    switch (ticket.status) {
      case 0:
        return "Open";
      case 1:
        return "Closed";
      default:
        return "Open";
    }
  };

  return (
    <tbody>
      {props.tickets.map((ticket) => {
        return (
          <tr className="row" key={ticket.id}>
            <td>
              <Link to={"/tickets/" + ticket.id}>{ticket.ticketNumber}</Link>
            </td>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{ticket.createdBy}</td>
            <td>{ticket.dateCreated}</td>
            <td>{ticket.email}</td>
            <td>{ticket.assignee}</td>
            <td>{getPriority(ticket)}</td>
            <td>{getStatus(ticket)}</td>
            <td className="link">
              <a href={"/tickets/edit/" + ticket.id}>
                <i className="far fa-edit"></i>
              </a>
            </td>
            <td className="link">
              <a href="#">
                <i className="far fa-trash-alt" />
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TicketItem;
