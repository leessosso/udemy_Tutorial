import axios from "axios";

const KEY = "AIzaSyCKn_UjeC1GFQlelnDlCIYDhL9Pya9PKPg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
