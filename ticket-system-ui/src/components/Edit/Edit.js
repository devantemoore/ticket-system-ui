import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TicketService from "./../../services/TicketService"



export default function Edit(props) {
    
    var getPriority = (ticket) => {
        switch (ticket.priority) {
          case 0:
            return "0";
          case 1:
            return "1";
          case 2:
            return "2";
          case "0":
            return 0;
          case "1":
            return 1;
          case "2":
            return 2;
          default:
            return null;
        }
    };
    const getStatus = (ticket) => {
      switch (ticket.status) {
        case 0:
          return "0";
        case 1:
          return "1";
        case "0":
          return 0;
        case "1":
          return 1;
        default:
          return "0";
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
    
    const { register, handleSubmit } = useForm();

    const [ticket, setTicket] = useState(initialTicket);
    const [edit, setEdit] = useState(true);
    const getTicketById = (id) => {
    TicketService.get(id)
        .then((response) => {
        setTicket(response.data);
        console.log(response.data);
        setEdit(false);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    useEffect(() => {
    getTicketById(props.match.params.id);
    }, [props.match.params.id]);

    const onSubmit = (data) => {
      
      var _updateTicket = {
        title: data.title,
        description: data.description,
        email: data.email,
        assignee: data.assignee,
        priority: getPriority(data),
        status: getStatus(data)
      }
      console.log(_updateTicket);
      updateTicket(_updateTicket);
    } 
    const updateTicket = (_updatedTicket) => {
      TicketService.update(props.match.params.id, _updatedTicket)
        .then((response) => {
          console.log(response)
          props.history.push('/');
        })
        .catch((e) => {
          console.log(e);
        })
    }
    
    return (
    <div>
      {edit ? <h2>Loading...</h2> : 
        <div className="detail-container">
            <form className="ticket-card" onSubmit={handleSubmit(onSubmit)} >
                <div className="card-header">Edit Ticket</div>
                <div style={{textDecoration: "underline", fontSize: "1.2rem"}}><strong>{ticket.ticketNumber}</strong></div>
                <div className="card-body create">
                    <label>Title:</label>
                    <br />
                    <input name="title" defaultValue={ticket.title} ref={register} />
                    <br />

                    <label>Description:</label>
                    <br />
                    <textarea name="description" defaultValue={ticket.description} ref={register} />
                    <br />

                    <label>Created By:</label>
                    <br />
                    <input name="createdBy" disabled defaultValue={ticket.createdBy} />
                    
                    <label>Date Created:</label>
                    <br />
                    <input name="dateCreated" disabled defaultValue={ticket.dateCreated} />

                    <label>Email:</label>
                    <input name="email" defaultValue={ticket.email} ref={register} />
                    <br />

                    <label>Assignee:</label> {/* will populate dropdown with valid users */}
                    <select name="assignee" defaultValue={ticket.assignee} ref={register} >
                      <option value="">Select...</option>
                    </select>
                    <br />

                    <label>Priority:</label>
                    <br />
                    <select name="priority" defaultValue={getPriority(ticket)} ref={register} >
                        <option value="">Select...</option>
                        <option value="0">Low</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                    
                    <label>Status:</label>
                    <br />
                    <select name="status" defaultValue={getStatus(ticket)} ref={register} >
                        <option value="">Select...</option>
                        <option value="0">Open</option>
                        <option value="1">Closed</option>
                    </select>
                </div>
                <div className="card-footer">
                    <Link to={"/tickets/" + ticket.id} className="btn">
                    Back to Ticket
                    </Link>
                    <button type="submit"/* onClick={notifications.createNotification('success')} */>Save</button>
                </div>
            </form>
        </div>
      }
    </div>
    )
}


