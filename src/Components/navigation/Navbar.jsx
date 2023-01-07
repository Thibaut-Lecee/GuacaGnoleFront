import React from 'react';
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
import version from "../../../package.json";

const Navbar = () => {
    const navigate = useNavigate()
    const location = window.location.pathname

    return (
        <Container>
            <Header>
                <Image src={guacaLogo} alt="logo"/>
                <Title>GuacaDesk {version.version}</Title>
            </Header>
            <BodyContainer>
                <LinkedComponent>
                    <HomeTwoToneIcon/>
                    <Button onClick={() => navigate('/Dashboard')}>
                        <TitleLink className={location === "/Dashboard" ? 'active' : ''}> Dashboard</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <SupportAgentTwoToneIcon/>
                    <Button onClick={() => navigate('/Support')}>
                        <TitleLink className={location === "/Support" ? 'active' : ''}>Support</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <ShoppingCartTwoToneIcon/>
                    <Button onClick={() => navigate('/Articles')}>
                        <TitleLink className={location === "/Articles" ? 'active' : ''}>Articles</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <HailTwoToneIcon/>
                    <Button onClick={() => navigate('/Suppliers')}>
                        <TitleLink className={location === "/Suppliers" ? 'active' : ''}>Suppliers</TitleLink>
                    </Button>
                </LinkedComponent>
                <LinkedComponent>
                    <GroupTwoToneIcon/>
                    <Button onClick={() => navigate("/Customer")}>
                        <TitleLink className={location === "/Customer" ? 'active' : ''}>Customer</TitleLink>
                    </Button>
                </LinkedComponent>
            </BodyContainer>
        </Container>
    );
};

export default Navbar;