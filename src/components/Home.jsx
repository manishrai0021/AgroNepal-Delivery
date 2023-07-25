import React, { useState } from "react";
import Preloder from "../preloader/preloder";
import Carousel from "./Carousel";
import Content from "./Content";
import FeturedJobs from "./FeturedJobs";
import TopJobs from "./TopJobs";

const Home = () => {
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        <>
            {loading ? (
                <Preloder />
            ) : (
                <div>
                    <Carousel />
                    <TopJobs />
                    <FeturedJobs />
                    <Content />
                </div>
            )}
        </>
    );
};

export default Home;
