import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import guacaLogo from "../../assets/GuacaGnoleLogo.png"
import {
    BodyContainer,
    Container,
    Header,
    Image,
    Title,
    Button,
    TitleLink,
    LinkedComponent
} from "./styles/styleNavbar";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import HailTwoToneIcon from '@mui/icons-material/HailTwoTone';

const Navbar = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState({
        dashboard: false,
        support: false,
        customer: false,
        article: false,
        supplier: false
    })
    const handleActive = (params) => {
        if (params === 'dashboard') {
            setActive({
                dashboard: true,
                support: false,
                customer: false,
                article: false,
                supplier: false
            })
        navigate('/')
        }
        else if (params === 'support') {
            setActive({
                dashboard: false,
                support: true,
                customer: false,
                article: false,
                supplier: false
            })
            navigate('/Support')
        }
       else if (params === 'customer') {
            setActive({
                dashboard: false,
                support: false,
                customer: true,
                article: false,
                supplier: false
            })
            navigate('/Customer')
        } else if (params === 'articles') {
            setActive({
                dashboard: false,
                support: false,
                customer: false,
                article: true,
                supplier: false
            })
            navigate('/Articles')
        } else if (params === 'suppliers') {
            setActive({
                dashboard: false,
                support: false,
                customer: false,
                article: false,
                supplier: true
            })
            navigate('/Suppliers')
        }
    }

    return (
        <Container>
            <Header>
                <Image src={guacaLogo} alt="logo"/>
                <Title>GuacaDesk</Title>
            </Header>
            <BodyContainer>
                <LinkedComponent>
                    <HomeTwoToneIcon/>
                    <Button onClick={() => handleActive("dashboard")}>
                        <TitleLink className={active.dashboard ? "active" : ""}>Dashboard</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <SupportAgentTwoToneIcon/>
                    <Button onClick={() => handleActive("support")}>
                        <TitleLink>Support</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <ShoppingCartTwoToneIcon/>
                    <Button onClick={() =>handleActive('articles')}>
                        <TitleLink>Articles</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <HailTwoToneIcon/>
                    <Button onClick={() => handleActive("suppliers")}>
                        <TitleLink>Suppliers</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <GroupTwoToneIcon/>
                    <Button onClick={() => handleActive("customer")}>
                        <TitleLink>Customer</TitleLink>
                    </Button>
                </LinkedComponent>
            </BodyContainer>
        </Container>
    );
};

export default Navbar;