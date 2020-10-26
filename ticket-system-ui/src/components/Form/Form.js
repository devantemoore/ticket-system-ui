import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";

export default function Form() {
  const { handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("title"));

  return (
    <div className="detail-container">
      <form className="ticket-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-header">Create New Ticket</div>
        <div className="card-body create">
          <label>Title:</label>
          <br />
          <input name="title" />
          <br />

          <label>Description:</label>
          <br />
          <textarea name="description" />
          <br />

          <label>Name:</label>
          <br />
          <input name="createdBy" />

          <label>Email:</label>
          <input name="email" />
          <br />

          <label>Priority:</label>
          <br />
          <select name="priority">
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
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
