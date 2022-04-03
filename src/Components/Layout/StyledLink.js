import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:link,
  &:focus,
  &:hover,
  &:visited {
    text-decoration: none;  
    /* text-decoration-color:currentColor; */
    color: currentColor;
  }
`;

export default StyledLink;
