import React, {useEffect} from 'react';
import {
    BodyInfos,
    Container,
    FirstItem,
    HeaderTitle,
    Title,
    ItemTitle,
    SecondCard,
    FirstCard,
    Circle
} from "../layout/cardStyles";
import {Image} from "../navigation/styles/styleNavbar";
import {Wrapper} from "../layout/layoutStyles";


const CardArticle = ({image}) => {
    const [color, setColor] = React.useState('');
   useEffect(() => {
       if (image.split('.')[0].split('/')[3] === 'vinRouge') {
           setColor('#800000')
       } else if (image.split('.')[0].split('/')[3] === 'vinBlanc') {
           setColor('#FCF1D2')
       }
   }, [image])
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
                    <SecondCard className={'article '}>
                        <Image src={image} alt="vin" className={'imageArticle'}/>
                        <Circle className={'half-circle'} color={color}/>
                    </SecondCard>
                </BodyInfos>
            </Wrapper>
        </Container>

    );
};

export default CardArticle;