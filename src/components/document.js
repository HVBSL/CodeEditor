import React from "react";
import Nav from "./nav";

function Intro() {
    return (
        <div>
            <Nav />
        <p>What is an HTML Element? An HTML element is defined by a start tag, some content, and an end tag: Content goes here... The HTML element is everything from the start tag to the end tag:</p>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
<p>Start tagElement contentEnd tag</p>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
<p><br /></p>
<p>nonenone Note: Some HTML elements have no content (like the</p>
<p>element). These elements are called empty elements. Empty elements do not have an end tag!</p>
    </div>
    )
}

export default Intro;