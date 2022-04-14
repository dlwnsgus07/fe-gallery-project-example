import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  aspect-ratio: 1;
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

const GridImage = ({ imageId, image, title, description }) => {
  return (
    <Wrapper>
      <Link to={`/${imageId}`}>
        <Image image={image} />
      </Link>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default GridImage;
