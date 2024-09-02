import React from 'react';
import Navbar from './Navbar'
import CenteredContent from './CenteredContent'
import CenteredImage from './CenteredImage'
import JoinSection from './JoinSection'
import bgimg from "../../../assets/bgimg2.png";

function HeroPage() {

    return (
        <>
            <div
                className="bg-cover bg-center h-auto pb-20 "
                style={{ backgroundImage: `url(${bgimg})` }}
            >

                <Navbar />
                <CenteredContent />
            </div>

            <CenteredImage />
            <JoinSection />
        </>
    );
}

export default HeroPage;
