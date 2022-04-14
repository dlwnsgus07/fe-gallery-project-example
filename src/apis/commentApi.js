import { comments } from "./fakeResponse";

export const getCommentsByImageId = async (imageId) => {
  return comments;
};

export const deleteCommentById = async (id) => {
  return comments.find((comment) => comment.id === id);
};

export const createComment = async (imageId, content) => {
  const newComment = { ...comments[comments.length - 1] };
  newComment.id = String(Math.random());
  newComment.content = content;
  return newComment;
};
