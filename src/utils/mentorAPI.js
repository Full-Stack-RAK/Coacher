import axios from "axios";
const url = "http://192.168.1.136:3210/api/mentors";
export default {
// use these functions on the correct pages to get what you want done
  getMentors: function() {
    return axios.get(url);
  },

  getMentor: function(id) {
    return axios.get(url + "/" + id);
  },

  getMentorByName: function(name) {
    return axios.get(url + "/name/" + name);
  },

  deleteMentor: function(id) {
    return axios.delete(url + "/" + id);
  },

  saveMentor: function(mentorData) {
    return axios.post(url, mentorData);
  }
};
