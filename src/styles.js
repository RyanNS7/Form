import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerForm = styled.div`
    width: 400px;
    height: 90%;
    background: blue;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 10px 5px 5px #a0a0a0;
`