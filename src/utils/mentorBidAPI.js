import axios from "axios";
const url = "http://192.168.1.182:3210/api/mentorBid";
export default {
// use these functions on the correct pages to get what you want done
  getMentors: function() {
    return axios.get(url);
  },

  getMentorBi: function(id) {
    return axios.get(url + "/" + id);
  },

  deleteMentorBid: function(id) {
    return axios.delete(url + "/" + id);
  },

  saveMentorBid: function(mentorData) {
    return axios.post(url, mentorData);
  }
};
