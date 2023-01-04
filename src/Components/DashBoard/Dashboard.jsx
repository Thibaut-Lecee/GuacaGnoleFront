import React, {useState} from 'react';
import Navbar from "../navigation/Navbar";
import {Container, HeaderInfos, BodyInfos, Wrapper} from "../layout/layoutStyles"
import CardInfo from "../layout/CardInfo";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CardBody from "../layout/CardBody";
import CardGraphique from "../layout/CardGraphique";

const Dashboard = () => {
    const [message] = useState({
        messageVerified: "Verified",
        messageShipped: "Shipped",
        messageDelivered: "Delivered",
        messageInvoiced: "Invoiced",
    })

    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <HeaderInfos>
                    <CardInfo Icon={<VerifiedUserOutlinedIcon/>} message={message.messageVerified} color={'#0089FF'}/>
                    <CardInfo Icon={<AirplanemodeActiveOutlinedIcon/>} message={message.messageShipped}
                              color={"#D62159"}/>
                    <CardInfo Icon={<LocalShippingOutlinedIcon/>} message={message.messageDelivered} color={"#00BAFF"}/>
                    <CardInfo Icon={<DescriptionOutlinedIcon/>} message={message.messageInvoiced} color={"#FFD800"}/>
                </HeaderInfos>
                <BodyInfos>
                    <CardBody/>
                    <CardGraphique/>
                </BodyInfos>
            </Wrapper>
        </Container>
    );
};

export default Dashboard;