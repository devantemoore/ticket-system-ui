import API from "./api"; // App API: will add more models and endpoints (ex: Users, Orgs...)

const getAll = () => {
  return API.get("tickets");
};

const get = (id) => {
  return API.get(`tickets/${id}`);
};

const create = (data) => {
  return API.post("tickets", data, {
    headers: {
        'Content-Type': 'application/problem+json; charset=utf-8'
    }
});
};
const update = (id, data) => {
  return API.put(`tickets/${id}`, data);
};
const remove = (id) => {
  return API.delete(`tickets/${id}`);
};
const removeAll = () => {};

export default { getAll, get, create, update, remove };
