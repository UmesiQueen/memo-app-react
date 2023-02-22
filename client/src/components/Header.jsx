import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import styled from "styled-components";

function Header() {
  const Title = styled.h1`
    color: #ffffff;
    font-family: "McLaren", cursive;
    font-weight: 200;
  `;

  const Header = styled.header`
    background-color: rgb(151, 64, 99);
    padding: 15px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  `;

  return (
    <Header>
      <Title>
        <NotesIcon /> Memo
      </Title>
    </Header>
  );
}

export default Header;
