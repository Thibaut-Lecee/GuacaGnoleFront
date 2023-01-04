import React from 'react';
import {
    BodyInfos,
    ContainerCardList,
    FirstItem,
    HeaderTitle,
    ItemTitleList,
    NumberItemList,
    SecondItem, ThirdItem,
    Title
} from "./cardStyles";
import {faker} from "@faker-js/faker";

const CardList = () => {
    const [number] = React.useState({
        number1: faker.random.numeric(2),
        number2: faker.random.numeric(2),
        number3: faker.random.numeric(2),
    })
    return (
        <ContainerCardList>
            <BodyInfos>
                <HeaderTitle>
                    <Title>Support</Title>
                </HeaderTitle>
                <FirstItem>
                    <NumberItemList> {number.number1} </NumberItemList>
                    <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit..." </ItemTitleList>
                </FirstItem>
                <SecondItem>
                    <NumberItemList> {number.number2}   </NumberItemList>
                    <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit..." </ItemTitleList>
                </SecondItem>
                <ThirdItem>
                    <NumberItemList> {number.number3} </NumberItemList>
                    <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit..." </ItemTitleList>
                </ThirdItem> <FirstItem>
                <NumberItemList> {number.number1} </NumberItemList>
                <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit..." </ItemTitleList>
            </FirstItem>
                <SecondItem>
                    <NumberItemList> {number.number2}   </NumberItemList>
                    <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit..." </ItemTitleList>
                </SecondItem>
                <ThirdItem>
                    <NumberItemList> {number.number3} </NumberItemList>
                    <ItemTitleList> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit..." </ItemTitleList>
                </ThirdItem>

            </BodyInfos>

        </ContainerCardList>
    );
};

export default CardList;