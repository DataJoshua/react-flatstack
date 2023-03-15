import styled from "styled-components";

const ImageItem = styled.img`
  height: 500px;
  padding: 10px;
`;

const Image = ({ url }) => {
  return <ImageItem src={url} alt="background" />;
};

export default Image;
