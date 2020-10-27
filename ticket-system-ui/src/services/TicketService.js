import API from "./api"; // App API: will add more models and endpoints (ex: Users, Orgs...)

const getAll = () => {
  return API.get("tickets");
};

const get = (id) => {
  return API.get(`tickets/${id}`);
};

const create = (data) => {
  return API.post("tickets", data);
};
const update = (id, data) => {};
const remove = (id) => {};
const removeAll = () => {};

export default { getAll, get, create };
