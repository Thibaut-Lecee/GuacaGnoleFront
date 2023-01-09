import React, {useState} from 'react';
import Navbar from "../navigation/Navbar";
import {Container, HeaderInfos, Wrapper} from "../layout/layoutStyles";
import {FilterChoice, ItemTitle, SearchButton, SearchDiv, SearchInput} from "../layout/cardStyles";
import {SearchOutlined} from "@mui/icons-material";
import {Button} from '../navigation/styles/styleNavbar';
import CardArticle from "./CardArticle";
import vinRouge from "../../assets/vinRouge.png";
import vinBlanc from "../../assets/vinBlanc.png";

const Article = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [messageError, setMessageError] = useState("");
    const [error, setError] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        //regex contient tous les caractères sauf @"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        const regex = /^[a-zA-Z0-9\s]*$/;
        if (regex.test(search)) {
            const result = searchResult.filter((item) => item.name === search);
            setSearchResult(result);
            setError(false);
        } else {
            setError(true)
            setMessageError('Pas de caractères spéciaux');
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <HeaderInfos className={'article'}>
                    <SearchDiv>
                        <SearchInput type="text" placeholder="Search" onKeyDown={(event) => handleKeyPress(event)}
                                     onChange={(e) => setSearch(e.target.value)}/>
                        <SearchButton type="submit" onClick={(e) => handleSearch(e)}><SearchOutlined/></SearchButton>
                        {error && <p style={{marginLeft: '5px'}}>{messageError}</p>}
                    </SearchDiv>
                    <FilterChoice>
                        <Button className={"article"}>
                            <ItemTitle className={"article"}>
                                Vin Rouge
                            </ItemTitle>
                        </Button>
                        <Button className={"article"}>
                            <ItemTitle className={"article"}>
                                Vin Blanc
                            </ItemTitle>
                        </Button>
                        <Button className={"article"}>
                            <ItemTitle className={"article"}>
                                Vin Rosé
                            </ItemTitle>
                        </Button>
                        <Button className={"article"}>
                            <ItemTitle className={"article"}>
                                Digestifs
                            </ItemTitle>
                        </Button>
                        <Button className={"article"}>
                            <ItemTitle className={"article"}>
                                Autres
                            </ItemTitle>
                        </Button>
                    </FilterChoice>
                </HeaderInfos>
                <Wrapper className={'wrap'}>
                    <CardArticle image={vinRouge}/>
                    <CardArticle image={vinBlanc}/>
                    <CardArticle image={vinRouge}/>
                    <CardArticle image={vinBlanc}/>
                    <CardArticle image={vinRouge}/>
                    <CardArticle image={vinBlanc}/>
                </Wrapper>
            </Wrapper>
        </Container>

    );
};

export default Article;