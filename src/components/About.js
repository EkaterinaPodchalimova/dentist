import React from "react";
import Main from "./Main";
import AboutUs from "./AboutUs";

function About(props) {
    React.useEffect(() => {
        props.openPage();
        props.editAbout(true)
    }, []);

    return (
        <>
            <Main/>
            <AboutUs/>
        </>
    )
}

export default About;