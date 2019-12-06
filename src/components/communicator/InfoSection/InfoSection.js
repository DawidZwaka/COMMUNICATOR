import React, { useEffect } from 'react';
import './InfoSection.scss';
import gsap from 'gsap';
import { Col } from 'react-bootstrap';

const InfoSection = props => {
    const loading = true;
    const refs = [];
    const tl = gsap.timeline({repeat: -1, repeatDelay: .8, yoyo: true});

    const getRandomPerc = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    useEffect(() => {

        refs.forEach( ref => {
            tl.fromTo(
                    ref,
                    .6,
                    {width: 0},
                    {width: `${getRandomPerc(40, 100)}%`},
                );
        });
    });

    const getLoader = () => {
        const infoList = [];

        for(let i=0; i<3; i++) {
            infoList.push(
                    <div
                        key={`infoLoader${i}`} 
                        className="loader__bg infoList__item--loading my-2 rounded"
                        ref={ref => refs.push(ref)}>
                    </div>
                );
        }

        return (
            <>
                <Col xs="12" xl="5" className="mx-auto">
                    <div className="ratio ratio--1x1">
                        <div className="ratio__inside rounded-circle loader__bgAnim">
                        </div>
                    </div>
                </Col>
                {infoList}
            </>
        );
    }
    
    let render;

    if( loading ) {
        render = getLoader();
    } else {
        render = (
            <>
                <div className="ratio ratio--1x1">
                    <img className="ratio__inside rounded-circle" src="http://unsplash.it/g/500?random&blur&gravity=center"/>
                </div>
                <h1>Lorem Ipsum</h1>
            </>
        );
    }
    return (
            <div className="px-5 w-100">
                {render}
            </div>
        );
}

export default InfoSection;