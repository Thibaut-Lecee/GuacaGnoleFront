import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #EEEBE3;
   flex-direction:row;
    `
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeaderInfos = styled.div`
    height: 20%;
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
      
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