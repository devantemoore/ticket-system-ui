import API from "./api";

const getAll = () => {
  return API.get("tickets");
};

const get = (id) => {
  return API.get(`tickets/${id}`);
};

const create = (data) => {};
const update = (id, data) => {};
const remove = (id) => {};
const removeAll = () => {};

export default { getAll, get };
