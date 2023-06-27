import axios from "axios"

export const api = axios.create({
  baseURL: process.env.STRAPI_URL+'/api',
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + process.env.STRAPI_JWT
  },
});

export const getStrapiUrl = (path = "") => {
  if (path.startsWith("http")) {
    return path;
  }
  if (path.startsWith("/")) {
    return `${process.env.STRAPI_URL}${path}`;
  } else {
    return `${process.env.STRAPI_URL}/${path}`;
  }
}