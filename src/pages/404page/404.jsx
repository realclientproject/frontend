import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImage from "../../images/404.png";

const Container = styled.div`
  background-color: #95c2de;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.div`
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 11rem;
`;

const ErrorDigit = styled.span`
  animation: pulse 1s infinite alternate;
  display: inline-block;
  transform-origin: center;
  font-size: 15rem;
  font-weight: bold;

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
`;

const Message = styled.div`
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.6rem;
  margin-top: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2.5rem;

  & > * {
    margin-bottom: 1rem;
  }

  & a {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid blue;
    }
  }
`;

const SpinnerIcon = styled.i`
  font-size: 8.5rem;
  color: #ffffff;
  animation: spin 2s infinite linear;
  margin-right: 0.5rem;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #f7df1e;
    transform: scale(1.1);
  }
`;
const ErrorImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 5rem;
  width: 500px;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <ErrorText>
        <ErrorDigit>4</ErrorDigit>
        <ErrorDigit>0</ErrorDigit>
        <ErrorDigit>4</ErrorDigit>
      </ErrorText>
      <SpinnerIcon className="far fa-question-circle fa-spin" />
      <Message>
        Oops! It looks like you've stumbled upon a page that doesn't exist.
        <br></br>
        Maybe you mistyped the URL or the page has been deleted or moved.
        <br></br> Why not try going <HomeLink to="/">Home</HomeLink> and see if
        you can find what you're looking for there?
      </Message>
      <ErrorImage src={errorImage} alt="404" /> {/* added */}

    </Container>
  );
};

export default NotFoundPage;
