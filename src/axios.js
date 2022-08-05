import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
// "  baseURL:"http://localhost:5001/eleni-c4ff8/us-central1/api
           baseURL:"https://us-central1-eleni-c4ff8.cloudfunctions.net/api"
  
//   "http://localhost:5001/eleni-c4ff8/us-central1/api"
});

export default instance;
