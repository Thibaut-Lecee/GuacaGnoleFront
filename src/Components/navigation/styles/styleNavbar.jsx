import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 250px;
    background-color: #F7F4EC;
    `
const Header = styled.div`
margin: 15px auto;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`
const Image = styled.img`
    height: 70px;
    width: 70px;
    `
const Title = styled.h1`
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: #2D2D2D;
    `
const BodyContainer = styled.div`
    display: flex;
    width: 250px;
    height: 85%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `

const LinkedComponent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    `
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7F4EC;
    border: none;
    cursor: pointer;
    `
const TitleLink = styled.h1`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #2D2D2D;
    &.active {
        border-bottom: 2px solid red;
    }
    `


export {Container, Image, Title, Header, BodyContainer, LinkedComponent, Button, TitleLink}
