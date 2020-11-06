import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TicketService from "../../services/TicketService";
import "./style.css";

export default function Form() {
  const initialTicket = 
    {
      "Title": "",
      "Description": "",
      "CreatedBy": "",
      "Email": "",
      "Priority": null,
    };

    var getPriority = (priority) => {
      switch (priority) {
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

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

    // ------- HAS TO BE A BETTER WAY TO IMPLEMENT THIS -------
    initialTicket.Title = data.title;
    initialTicket.Description = data.description;
    initialTicket.CreatedBy = data.createdBy;
    initialTicket.Email = data.email;
    initialTicket.Priority = getPriority(data.priority);
    createTicket(initialTicket);
    console.log(initialTicket);
  }

  const createTicket = (data) => {
    TicketService.create(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="detail-container">
      <form className="ticket-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-header">Create New Ticket</div>
        <div className="card-body create">
          <label>Title:</label>
          <br />
          <input name="title" ref={register} />
          <br />

          <label>Description:</label>
          <br />
          <textarea name="description" ref={register} />
          <br />

          <label>Name:</label>
          <br />
          <input name="createdBy" ref={register} />

          <label>Email:</label>
          <input name="email" ref={register} />
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
