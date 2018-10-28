import axios from "axios";
<<<<<<< HEAD
const url = 'http://192.168.1.182:3210/api/mentors';
=======
const url = "http://192.168.1.182:3210/api/mentors";
>>>>>>> origin/randy
export default {
// use these functions on the correct pages to get what you want done
  getMentors: function() {
    return axios.get(url);
  },

  getMentor: function(id) {
<<<<<<< HEAD
    return axios.get(url + "/" + id);
  },

  deleteMentor: function(id) {
    return axios.delete(url + "/" + id);
=======
    return axios.get(url + id);
  },

  deleteMentor: function(id) {
    return axios.delete(url + id);
>>>>>>> origin/randy
  },
  saveMentor: function(mentorData) {
    return axios.post(url, mentorData);
  }
};
