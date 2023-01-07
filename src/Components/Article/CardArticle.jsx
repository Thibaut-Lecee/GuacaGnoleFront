import React from 'react';
import {
    BodyInfos,
    Container,
    FirstItem,
    HeaderTitle,
    Title,
    ItemTitle,
    SecondCard,
    FirstCard
} from "../layout/cardStyles";
import {Image} from "../navigation/styles/styleNavbar";
import {Wrapper} from "../layout/layoutStyles";


const CardArticle = ({image}) => {
    return (
        <Container className={'articleWrap'}>
            <Wrapper className={'articleCard'}>
                <BodyInfos className={'articleList'}>
                    <FirstCard>
                        <HeaderTitle>
                            <Title>
                                Les anges de la nuit
                            </Title>
                        </HeaderTitle>
                        <FirstItem>
                            <ItemTitle>
                                Vin Rouge
                            </ItemTitle>
                        </FirstItem>
                    </FirstCard>
                    <SecondCard className={'article'}>
                        <Image src={image} alt="vin rouge" className={'imageArticle'}/>
                    </SecondCard>
                </BodyInfos>
            </Wrapper>
        </Container>

    );
};

export default CardArticle;