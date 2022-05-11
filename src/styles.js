import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        }
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitleForm = styled.div`
    width: 80%;
    font-size: 20px;
    background: transparent;

    h1{
        color: #EBEBEB;
        font-weight: bolder;
        font-family: 'Roboto', sans-serif;
    }
`


export const Form = styled.div`
    width: 100%;
    padding: 8px;
    margin-top: 20px;

    input{
        width: 100%;
        height: 50px;
        padding: 4px;
        margin-bottom: 8px;
        border: 1px solid transparent;
        font-size: 18px;
    }

    div p {
        color: #EBEBEB;
        margin-bottom: 0.4rem;
        margin-top: -0.5rem;
    }

    input:nth-child(4){
        border: 1px solid black;
        cursor: pointer;
    }
`

export const SendConfirmation = styled.div`
    width: 50%;
    height: 10rem;
    padding: 4px;
    background: rgba(0,0,0, 0.9);
    position: absolute;
    top: 0%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: confirmation 1s;

    @keyframes confirmation {
        0% {top: -400%};
        100% {top: 0}
    }

    @media screen and (max-width: 870px){
        width: 80%;
        height: 12rem;

        h1{
            text-align: center;
        }
    }
`