import axios from "axios";
const url = 'http://169.234.125.108:3210/api/mentors';
export default {
// use these functions on the correct pages to get what you want done
  getMentors: function() {
    return axios.get(url);
  },

  getMentor: function(id) {
    return axios.get(url + "/" + id);
  },

  deleteMentor: function(id) {
    return axios.delete(url + "/" + id);
  },
  saveMentor: function(mentorData) {
    return axios.post(url, mentorData);
  }
};
