import axios from 'axios';

export default function strapi(user) {
  console.log(user);
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: user && {
      Authorization: `Bearer ${user?.strapiToken}`,
    }
  })
}