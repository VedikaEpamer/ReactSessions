import { axiosInstance } from "./axiosConfig";
import type { Post } from "./models";

export function getPosts() {
  return axiosInstance.get("/posts");
}

export function addPost(post: { title: string; views: number }) {
  return axiosInstance.post("/posts", post);
}

export function deletePost(id: string) {
  return axiosInstance.delete(`/posts/${id}`);
}

export function getPostById(id: string) {
  return axiosInstance.get(`/posts/${id}`);
}

export function editPost(id: string, post: { title: string; views: number }) {
  return axiosInstance.put(`/posts/${id}`, post);
}

// export const postService = {
//   getAll: () => axiosInstance.get("/posts"),
//   getById: (id: string) => axiosInstance.get(`/posts/${id}`),
//   add: (post: Omit<Post, "id">) => axiosInstance.post("/posts", post),
// };
