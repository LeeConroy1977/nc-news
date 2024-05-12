import axios from "axios";

const loudSpeakerApi = axios.create({
  baseURL: "https://nc-news-northcoders-project.onrender.com",
});

export const getAllArticles = (topic, sorted_by, order = "desc", limit, p) => {
  const params = {
    topic,
    sorted_by,
    order,
    limit,
    p,
  };
  return loudSpeakerApi.get("/api/articles", { params }).then(({ data }) => {
    return data.results;
  });
};

export async function getArticle(id) {
  return loudSpeakerApi.get(`/api/articles/${id}`).then(({ data }) => {
    return data.article;
  });
}

export async function patchArticle(id, inc_votes) {
  return loudSpeakerApi
    .patch(`/api/articles/${id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
}
