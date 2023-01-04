import React from 'react';
import Navbar from "../navigation/Navbar";
import {Container} from "../layout/layoutStyles";

const Article = () => {
    return (
        <Container>
            <Navbar params={'article'}/>
            <h1>Article</h1>
        </Container>

    );
};

export default Article;