import DetailImage from "../components/DetailImage";
import CommentForm from "../components/CommentForm";
import TextField from "../components/TextField";
import CommentButton from "../components/CommentButton";
import CommentContainer from "../components/CommentContainer";
import Comment from "../components/Comment";

const ImagePage = () => {
  return (
    <>
      <DetailImage
        image="https://picsum.photos/200"
        title="멋사 10기 연합 해커톤"
        description="멋쟁이사자처럼 10기 연합해커톤 사진입니다."
      />
      <CommentForm>
        <TextField placeholder="댓글 작성..." />
        <CommentButton>게시</CommentButton>
      </CommentForm>

      <CommentContainer>
        <Comment author="익명" content="안녕하세요" />
        <Comment author="익명" content="안녕하세요" />
        <Comment author="익명" content="안녕하세요" />
        <Comment author="익명" content="안녕하세요" />
      </CommentContainer>
    </>
  );
};

export default ImagePage;
