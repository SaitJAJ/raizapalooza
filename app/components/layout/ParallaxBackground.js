'use client'
import Image from 'next/image'
import {Suspense, useRef} from "react";
import Loading from "@/components/Loading";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
export default function ParallaxBackground({children},policy){

    return(
        <div className="parallax ">
            <div id="group1" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                    {children}
                </div>
                <div className="parallax__layer parallax__layer--deep">
                    <p>text</p>
                </div>
            </div>
            <div id="group3" className="parallax__group">
                <div className="parallax__layer parallax__layer--fore">
                    <div className="title">Foreground Layer</div>
                </div>
                <div className="parallax__layer parallax__layer--base">
                    <div className="title">Base Layer</div>
                </div>
            </div>
            {/*<div id="group4" className="parallax__group">*/}
            {/*    <div className="parallax__layer parallax__layer--base">*/}
            {/*        <div className="title">Base Layer</div>*/}
            {/*    </div>*/}
            {/*    <div className="parallax__layer parallax__layer--back">*/}
            {/*        <div className="title">Background Layer</div>*/}
            {/*    </div>*/}
            {/*    <div className="parallax__layer parallax__layer--deep">*/}
            {/*        <div className="title">Deep Background Layer</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id="group5" className="parallax__group">*/}
            {/*    <div className="parallax__layer parallax__layer--fore">*/}
            {/*        <div className="title">Foreground Layer</div>*/}
            {/*    </div>*/}
            {/*    <div className="parallax__layer parallax__layer--base">*/}
            {/*        <div className="title">Base Layer</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id="group6" className="parallax__group">*/}
            {/*    <div className="parallax__layer parallax__layer--back">*/}
            {/*        <div className="title">Background Layer</div>*/}
            {/*    </div>*/}
            {/*    <div className="parallax__layer parallax__layer--base">*/}
            {/*        <div className="title">Base Layer</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id="group7" className="parallax__group">*/}
            {/*    <div className="parallax__layer parallax__layer--base">*/}
            {/*        <div className="title">Base Layer</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}