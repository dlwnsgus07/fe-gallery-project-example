import styled from "styled-components";

import lionImage from "./images/lion.png";

const Wrapper = styled.div`
  padding: 40px 15px;
  display: flex;
`;

const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  margin-right: 15px;
  width: 120px;
  border-radius: 60px;
`;

const Name = styled.h1`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: bold;
`;

const Introduce = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  color: #495057;
`;

const PostCount = styled.p`
  font-size: 14px;
`;

const Profile = ({ postCount }) => {
  return (
    <Wrapper>
      <div>
        <Image src={lionImage} />
      </div>
      <VerticalCenter>
        <Name> likelion_10th_frontend </Name>
        <Introduce>
          멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다 😎
        </Introduce>
        <PostCount> 게시물 {postCount}개 </PostCount>
      </VerticalCenter>
    </Wrapper>
  );
};

export default Profile;
