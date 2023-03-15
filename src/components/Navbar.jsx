import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #ffffff;
  height: 20px;
  margin-right: 10px;
  text-shadow: 0 0 10px #cecece;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 400px;
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Icons = styled.div``;

const Button = styled.button`
font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
//   box-shadow: 2px 4px 6px rgba(196, 196, 196, 0.3);
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(to left,#ac0253,#10109e);
  margin-top: 10px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 2px 4px 6px rgba(196, 196, 196, 0.2);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 0px 2px 4px rgba(196, 196, 196, 0.3);
  }

  &:active span {
    transform: translateY(1px);
  }
  
  span {
    display: inline-block;
    transition: all 0.2s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <StyledIcon icon={faSearch} />
          <Button>Hire Now</Button>
        </Icons>
        <Links></Links>
      </Container>
    </Section>
  );
};

export default Navbar;
