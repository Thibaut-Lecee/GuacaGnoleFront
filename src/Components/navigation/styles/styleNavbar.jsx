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

  &.imageArticle {
    height: 90%;
    width: 90%;
  }
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
  &.article {
    height: 40px;
    width: 80px;
    border-radius: 10px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    background-color: #568203;
    color: #F5F5F5;
    &:hover {
        background-color: #F5F5F5;
        color: #568203;
    }
  }
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
