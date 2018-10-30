import axios from "axios";
const url = "http://169.234.125.108:3210/api/users";
export default {
// use these functions on the correct pages to get what you want done
  getUsers: function() {
    return axios.get(url);
  },

  getUser: function(id) {
    return axios.get(url + "/" + id);
  },

  deleteUser: function(id) {
    return axios.delete(url + "/" + id);
  },
  
  saveUser: function(userData) {
    return axios.post(url, userData)
  }
};
