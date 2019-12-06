import React, {useEffect} from "react";
import propTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../styles/index.scss';
import Header from "./header/Header";
import ArticleIndex from "./article/ArticleIndex";
import {connect} from "react-redux";
import {setInnerWidthAC} from "../store/actions/app";
import Footer from "./footer/Footer";

const App = (props) => {

    props.innerWidth === 0 && props.setInnerWidth(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            props.setInnerWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [props.innerWidth]);

    return (
        <div>
            <Header />
            <ArticleIndex />
            <Footer />
        </div>
    );
}

App.propTypes = {
    innerWidth: propTypes.number,
    setInnerWidth: propTypes.func
};

let mapStateToProps = (state) => {
    return {
        innerWidth: state.app.innerWidth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setInnerWidth: (innerWidth) => {
            dispatch(setInnerWidthAC(innerWidth));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

