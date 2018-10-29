import axios from "axios";
const url = "http://192.168.1.182:3210/api/userBid";
export default {
// use these functions on the correct pages to get what you want done
  getUsersBid: function() {
    return axios.get(url);
  },

  getUserBid: function(id) {
    return axios.get(url + id);
  },

  deleteUserBid: function(id) {
    return axios.delete(url + id);
  },
  saveUserBid: function(userData) {
    return axios.post(url, userData);
  }
};
