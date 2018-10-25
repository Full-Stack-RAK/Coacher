import axios from "axios";

export default {
// use these functions on the correct pages to get what you want done
  getMentors: function() {
    return axios.get("/api/mentors");
  },

  getMentor: function(id) {
    return axios.get("/api/mentors/" + id);
  },

  deleteMentor: function(id) {
    return axios.delete("/api/mentors/" + id);
  },
  
  saveMentor: function(mentorData) {
    return axios.post("/api/mentors", mentorData);
  }
};
