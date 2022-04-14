import styled from "styled-components";

const Wrapper = styled.div`
  aspect-ratio: 1;
  cursor: pointer;
`;

const Image = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
  color: #adb5bd;
`;

const GridImage = ({ image }) => {
  return (
    <Wrapper>
      <Image image={image} />
      <TextWrapper>
        <Title>이미지 제목</Title>
        <Description>이미지 설명</Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default GridImage;
