import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  height: 5rem;
  background-color: lightskyblue;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    vertical-align: middle;
  }
`;

const Nav = () => {
  const highLight = {
    fontWeight: "bold",
    color: "red"
  };
  return (
    <NavBar>
      <div>
        <NavLink activeStyle={highLight} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={highLight} to="/add-dept">
          Add Department
        </NavLink>
      </div>
    </NavBar>
  );
};

export default Nav;