import styled from "styled-components";
import {WorldSize} from "./types";

export const WorldStyle = styled.div<WorldSize>`
  display: grid;
  grid-template-columns: repeat(${props => props.width || 200}, 6px);
  grid-template-rows: repeat(${props => props.height || 200}, 6px);
  width: ${props => (props.width * 7) - 1 + 'px'  || 200};
  height: ${props => (props.height * 7) - 1 + 'px'  || 200};
  gap: 1px; 
  background-color: black;
  border: 1px solid black;
`


