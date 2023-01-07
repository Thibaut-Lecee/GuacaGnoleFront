import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #EEEBE3;
    `
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  &.articleCard {
    flex-direction: row;
    justify-content: space-around;
  }
  &.wrap{
    overflow: scroll;
    // scrollbar none
    ::-webkit-scrollbar {
      display: none;
    }
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px 5px 5px 5px;
    height: 90%;
    width: 95%;
  }
  
`

const HeaderInfos = styled.div`
    height: 20%;
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  
  &.article {
    height: 110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
  }
  
      
@media (max-width: 800px) and (max-height: 600px) {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: space-around;
    }
    `

const BodyInfos = styled.div`   
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
   

@media (max-width: 800px) and (max-height: 600px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    justify-content: space-around;
    }
    
    `


export {Container, HeaderInfos, BodyInfos, Wrapper}