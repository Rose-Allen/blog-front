import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3004" });

client.interceptors.request.use((config) => {
  console.log({ config });
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default client;
