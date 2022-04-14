import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.div`
  height: 400px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const TextWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
  color: #495057;
`;

const DetailImage = ({ image, title, description }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title> {title} </Title>
        <Description> {description} </Description>
      </TextWrapper>
      <Image image={image} />
    </Wrapper>
  );
};

export default DetailImage;
