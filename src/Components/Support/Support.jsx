import React from 'react';
import Navbar from "../navigation/Navbar";
import {Container, HeaderInfos, Wrapper} from "../layout/layoutStyles"
import CardInfo from "../layout/CardInfo";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {BodyList} from "../layout/cardStyles";
import CardList from "../layout/CardList";

const Support = () => {
    const [message] = React.useState({
        messageClosed: "Closed",
        messageOpen: "Open",
        messagePending: "Pending",
    })

    return (
        <>
            <Container>
                <Navbar/>
                <Wrapper>
                    <HeaderInfos>
                        <CardInfo Icon={<VerifiedUserOutlinedIcon/>} message={message.messageOpen} color={'#0089FF'}/>
                        <CardInfo Icon={<AirplanemodeActiveOutlinedIcon/>} message={message.messagePending}
                                  color={"#D62159"}/>
                        <CardInfo Icon={<LocalShippingOutlinedIcon/>} message={message.messageClosed}
                                  color={"#00BAFF"}/>
                    </HeaderInfos>
                    <BodyList>
                        <CardList/>
                    </BodyList>
                </Wrapper>
            </Container>
        </>
    );
};

export default Support;