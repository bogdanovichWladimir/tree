import styled from "styled-components";
import {IColumProps} from "./types";

export const WorldColumStyle = styled.div<IColumProps>`
    background-color: ${props=> props.color};  
    width: 100%;
    height: 100%;
`