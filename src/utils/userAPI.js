import axios from "axios";

export default {
// use these functions on the correct pages to get what you want done
  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
