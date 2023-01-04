import React from 'react';
import {
    Container,
    HeaderTitle,
    Title,
    FirstItem,
    SecondItem,
    ThirdItem,
    ItemTitle,
    NumberItem,
    BodyInfos
} from "./cardStyles";
import {faker} from "@faker-js/faker";
const CardBody = () => {
    const [number] = React.useState({
        number1: faker.random.numeric(2),
        number2: faker.random.numeric(2),
        number3: faker.random.numeric(2),
    })
    return (
        <Container>
            <BodyInfos>
            <HeaderTitle>
                <Title>Product Details</Title>
            </HeaderTitle>
                <FirstItem>
                    <ItemTitle> Low stock </ItemTitle>
                    <NumberItem> {number.number1}  </NumberItem>
                </FirstItem>
                <SecondItem>
                    <ItemTitle> All items </ItemTitle>
                    <NumberItem> {number.number2}   </NumberItem>
                </SecondItem>
                <ThirdItem>
                    <ItemTitle> All Family </ItemTitle>
                    <NumberItem> {number.number3}   </NumberItem>
                </ThirdItem>
            </BodyInfos>
        </Container>
    );
};

export default CardBody;