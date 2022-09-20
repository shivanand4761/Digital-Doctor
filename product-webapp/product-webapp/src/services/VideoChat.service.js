import axios from "axios";

const apiUrl = 'https://34.222.138.8:8080/appointmentservice';

class VideoChat {
  
   StartMeetingID(data) {
    console.log(data);
    // return axios.post(`http://localhost:3000/doctors/`, data);
    return axios.post(`${apiUrl}/api/v1/meeting`,data);
  }
  joinMeetingID(path) {
    // return axios.get(`http://localhost:3000/doctors/`, id);
    return axios.get(`${apiUrl}/api/v1/meeting/`+ path)
  }
}
export default new VideoChat();
