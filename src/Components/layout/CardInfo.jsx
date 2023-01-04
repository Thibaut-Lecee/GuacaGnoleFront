import React from 'react';
import styled from "styled-components";
import {faker} from "@faker-js/faker";
import {Container} from "./cardStyles";

const Card = styled.div`
    height: 120px;
    border: 1px solid #707070;
    width: 150px;
    border-radius: 16px;
    background-color: #F5F5F5;
    `
const Line = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;    
    height: 100%;
    `
const TextNumber = styled.p`
    font-size: 2.1rem;
    height: 40px;
    margin: 5px auto;   
     `
const Text = styled.p`
display: flex;
    font-size: 14px;
 padding: 2px;
    align-items: center;
    `
const CardInfo = ({Icon, message, color}) => {
    let number = 0;
    const generateNumber = () => {
        number = faker.datatype.number({min: 0, max: 100, precision: 1})
        return number;
    }
    generateNumber()
    return (
        <Container>
            <Card>
                <Line>
                    <TextNumber style={{color: `${color}`}}>{number}</TextNumber>
                    <Text> {Icon} {message}</Text>
                </Line>
            </Card>
        </Container>
    );
};

export default CardInfo;