import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TicketService from "../../services/TicketService"
import "./style.css";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => createTicket(data, e);
  

  const createTicket = (data) => {
    TicketService.create(data)
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="detail-container">
      <form className="ticket-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-header">Create New Ticket</div>
        <div className="card-body create">
          <label>Title:</label>
          <br />
          <input name="title" ref={register}/>
          <br />

          <label>Description:</label>
          <br />
          <textarea name="description" ref={register}/>
          <br />

          <label>Name:</label>
          <br />
          <input name="createdBy" ref={register}/>

          <label>Email:</label>
          <input name="email" ref={register}/>
          <br />

          <label>Priority:</label>
          <br />
          <select name="priority" ref={register}>
            <option value="">Select...</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div className="card-footer">
          <Link to="/tickets" className="btn">
            Back to List
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
