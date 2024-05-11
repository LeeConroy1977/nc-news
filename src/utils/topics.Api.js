import axios from "axios";

const loudSpeakerApi = axios.create({
  baseURL: "https://nc-news-northcoders-project.onrender.com",
});

export const getAllTopics = () => {
  return loudSpeakerApi.get("/api/topics");
};
