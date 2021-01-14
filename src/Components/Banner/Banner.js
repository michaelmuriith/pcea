import React, { Component } from 'react';
import './Banner.css';

function Banner({    
    headline,
    tagline,
    description
}) {
    return (
        <>
            <div className="banner">
                <div className="bannercontainer">
                    <div className="bannertextcontainer">
                        <h1 className="headline">
                            {headline}
                        </h1>
                        <p className="tagline">
                            {tagline}
                        </p>
                        <p className="description">
                            {description}                        
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

