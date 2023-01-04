import styled from "styled-components";

const Container = styled.div` 
   height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #707070;
    margin: 10px auto;
    `
const ContainerCardList = styled.div` 
   height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px auto;
    `
const HeaderTitle = styled.div`
height: 50px;
width: 100%;
margin-top: 5px;
border-bottom: 1px solid #707070;
`
const HeaderTitleList = styled.div`
height: 40px;
width: 100px;
margin-top: 5px;
border-bottom: 1px solid #707070;

`


const Title = styled.p`
margin-left: 10px;
margin-top: 10px;
    font-size: 1.1em;
    `
const BodyInfos = styled.div`
    height: 70%;
    width: 60%;
    transition: 0.3s ease-in-out;
    &:hover{
    -ms-transform: scale(1.05); /* IE 9 */
-webkit-transform: scale(1.05); /* Safari 3-8 */
transform: scale(1.05);
   }
    margin-left: 5px;
     background-color: #F5F5F5;
     border-radius: 10px;
     -webkit-box-shadow: 5px 5px 5px 1px rgba(200,200,200,0.65);
     overflow: scroll;
    -webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    `

const BodyList = styled.div`
    height: 80%;
    width: 90%;
    margin-left: 5px;
   
    `
const BodyGraph = styled.div`
    height: 100%;
    width: 90%;
    transition: 0.3s ease-in-out;
    &:hover{
    -ms-transform: scale(1.05); /* IE 9 */
-webkit-transform: scale(1.05); /* Safari 3-8 */
transform: scale(1.05);
   }
    margin-left: 5px;
    margin-bottom: 20px;
     background-color: #F5F5F5;
     border-radius: 10px;
    `
const FirstItem = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
    justify-content: space-around;
    `
const SecondItem = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    margin-left: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    `
const ThirdItem = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    align-items: center;
    justify-content: space-around;
    `
const ItemTitle = styled.p`
    font-size: 1em;
    font-weight: 600;
    width: 80%;
    
    `
const NumberItem = styled.p`
    font-size: 1em;
    font-weight: 600;
    width:150px;
    `
const NumberItemList = styled.p`
    font-size: 1em;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F5F5F5;
    height: 50px;
    border-radius: 40px;
    width: 50px;
    background-color: #568203;
    `

const ItemTitleList = styled.p`
     display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80%;
    font-size: 1em;
   
   `

export {Container, ContainerCardList,HeaderTitle, HeaderTitleList,BodyList,ItemTitleList, NumberItemList, BodyGraph, BodyInfos, FirstItem, SecondItem, ThirdItem, ItemTitle, NumberItem, Title}