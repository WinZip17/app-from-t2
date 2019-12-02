import React from 'react';
import Block01 from "./Block01";
import Block02 from "./Block02";
import Block03 from "./Block03";
import Block04 from "./Block04";
import Block05OurCheerfulUsers from "./Block05OurCheerfulUsers/Block05OurCheerfulUsers";
import Block06Register from "./Block06Register/Block06Register";

const Article = () => {
    return (
        <article>
            <Block01/>
            <Block02/>
            <Block03/>
            <Block04/>
            <Block05OurCheerfulUsers/>
            <Block06Register/>
        </article>
    );
};

export default Article;
