import styled from 'styled-components';

function Header() {
  const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
  `;
  const Logo = styled.div`
    font-size: 2em;
    display: inline-block;
    margin: 0 auto;
  `;
  const ButtonWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
  `;
  const Button = styled.button`
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    padding: 0.25em 0.5em;
    margin: 1em;
    margin-left: 0;
    font-size: 1em;
    background-color: #00000000;

    &:hover {
      font-weight: bold;
      color: sienna;
    }
  `;

  return (
    <StyledDiv>
      <Logo>In The Cafe</Logo>
      <ButtonWrapper>
        <Button>로그인/회원가입</Button>
        <Button>마이페이지</Button>
      </ButtonWrapper>
    </StyledDiv>
  );
}

export default Header;
