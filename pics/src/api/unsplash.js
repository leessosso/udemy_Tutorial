import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cdaa50fa8780e2a5209b257803efbc4f44947a9343cc9b38dd6fb11e45d7654a"
  }
});
