import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function Code({
    id,
    title = "",
    path = ""
}) {
    console.log(title);
    const fileName = title.toLowerCase().replace(/\s+/g, "-");
    const htmlPath = `../../projects/${fileName}/index.html`;
    const cssPath = `../../projects/${fileName}/style.css`;
    const jsPath = `../../projects/${fileName}/script.js`;
    const [activeTab, setActiveTab] = useState("html");
    const codeString = `const user = {
    name: "Nitin",
    age: 18
    }`

    useEffect(() => {
      
        
      
    }, [])
    

    return (
        <div className='w-full'>
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code