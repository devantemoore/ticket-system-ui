import React, { useState, useEffect } from "react";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";
import TicketService from "./../../services/TicketService"



export default function Edit(props) {

    var getPriority = (priority) => {
        switch (priority) {
          case 0:
            return 0;
          case 1:
            return 1;
          case 2:
            return 2;
          default:
            return null;
        }
    };
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
    <div>
        <div className="detail-container">
            <form className="ticket-card" >
                <div className="card-header">Edit Ticket</div>
                <div className="card-body create">
                    <label>Title:</label>
                    <br />
                    <input name="title" defaultValue={ticket.title} />
                    <br />

                    <label>Description:</label>
                    <br />
                    <textarea name="description" defaultValue={ticket.description} />
                    <br />

                    <label>Name:</label>
                    <br />
                    <input name="createdBy" defaultValue={ticket.createdBy} />

                    <label>Email:</label>
                    <input name="email" defaultValue={ticket.email} />
                    <br />

                    <label>Priority:</label>
                    <br />
                    <select name="priority" defaultValue={getPriority(ticket.priority)}>
                        <option value="">Select...</option>
                        <option value='0'>Low</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                </div>
                <div className="card-footer">
                    <Link to="/tickets" className="btn">
                    Back to List
                    </Link>
                    <button type="submit"/* onClick={notifications.createNotification('success')} */>Save</button>
                </div>
            </form>
        </div>
    </div>
    )
}
