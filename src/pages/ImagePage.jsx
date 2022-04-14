import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as imageApi from "../apis/imageApi";
import * as commentApi from "../apis/commentApi";

import DetailImage from "../components/DetailImage";
import CommentForm from "../components/CommentForm";
import TextField from "../components/TextField";
import CommentButton from "../components/CommentButton";
import CommentContainer from "../components/CommentContainer";
import Comment from "../components/Comment";

const ImagePage = () => {
  const { id } = useParams();

  const [image, setImage] = useState(); // 이미지
  const [comments, setComments] = useState(); // 댓글 목록
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    // 이미지 불러오기 API 호출
    imageApi.getImageById(id).then((image) => {
      setImage(image);
    });
  }, [id]);

  useEffect(() => {
    // 댓글 불러오기 API 호출
    commentApi.getCommentsByImageId(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);

  // 댓글 작성 텍스트필드 내용이 변경될 때 호출되는 함수
  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  // 댓글 작성 버튼을 클릭했을 때 호출되는 함수
  const handleCommentButtonClick = () => {
    commentApi.createComment(id, commentInput).then((createdComment) => {
      const newComments = [...comments, createdComment];
      setComments(newComments);
      setCommentInput("");
    });
  };

  // 댓글 삭제 버튼 클릭 시 호출되는 함수
  const handleDeleteClick = (commentId) => {
    commentApi.deleteCommentById(commentId).then(() => {
      const newComments = comments.filter(
        (comment) => comment.id !== commentId
      );

      setComments(newComments);
    });
  };

  if (!image || !comments) return "이미지 로딩중";

  return (
    <>
      <DetailImage
        image={image.image}
        title={image.title}
        description={image.description}
      />
      <CommentForm>
        <TextField
          placeholder="댓글 작성..."
          value={commentInput}
          onChange={handleCommentInputChange}
        />
        <CommentButton onClick={handleCommentButtonClick}>게시</CommentButton>
      </CommentForm>

      <CommentContainer>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            onDelete={() => handleDeleteClick(comment.id)}
          />
        ))}
      </CommentContainer>
    </>
  );
};

export default ImagePage;
