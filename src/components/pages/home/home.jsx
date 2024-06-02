import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import Toolbar from "../../layouts/toolbar";
import Feeds from "../../layouts/feed";
import Aside from "../../layouts/aside";

const HomePage = () => {

    const [height, setHeight] = useState(window.innerHeight * 0.75); // Initialize with 100% of viewport height

    useEffect(() => {
        const updateHeight = () => {
        setHeight(window.innerHeight); // Update height to 100% of viewport height
        };

        window.addEventListener('resize', updateHeight);
        return () => {
        window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div class="d-flex flex-column flex-root">
            <div class="page d-flex flex-column flex-column-fluid">
                <Header />
                <div id="kt_content_container" class="d-flex flex-column-fluid align-items-stretch container-xxl">
                    <Sidebar />
                    <div class="wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10" id="kt_wrapper">
                        <div class="content flex-column-fluid" id="kt_content">
                            <Toolbar />
                            <div class="post" id="kt_post">
                                <div class="hover-scroll-y" style={{ height: `${height}px` }}>
                                    <Feeds />
                                    {/* <Feeds />
                                    <Feeds />
                                    <Feeds />
                                    <Feeds />
                                    <Feeds /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Aside />
                </div>
            </div>
        </div>
    );
};

export default HomePage;