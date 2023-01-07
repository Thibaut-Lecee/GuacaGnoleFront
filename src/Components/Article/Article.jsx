import React, {useState} from 'react';
import Navbar from "../navigation/Navbar";
import {BodyInfos, Container, HeaderInfos, Wrapper} from "../layout/layoutStyles";
import {FilterChoice, ItemTitle, SearchButton, SearchDiv, SearchInput} from "../layout/cardStyles";
import {SearchOutlined} from "@mui/icons-material";
import {Button} from '../navigation/styles/styleNavbar';
import CardArticle from "./CardArticle";
import vinRouge from "../../assets/villa-des-anges-reserve-2020-jeff-carrel.png";
import vinBlanc from "../../assets/3344200003230.png";

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
    return (
        <Container>
            <Navbar/>
            <Wrapper>

            <HeaderInfos className={'article'}>
                <SearchDiv>
                    <SearchInput type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                    <SearchButton type="submit" onClick={(e) => handleSearch(e)}><SearchOutlined/></SearchButton>
                    {error && <p>{messageError}</p>}
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
                <CardArticle image={vinRouge}/>
                <CardArticle image={vinBlanc}/>
                <CardArticle image={vinBlanc}/>
                <CardArticle image={vinBlanc}/>
                <CardArticle image={vinBlanc}/>
                <CardArticle image={vinBlanc}/>

            </Wrapper>
            </Wrapper>
        </Container>

    );
};

export default Article;