import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function Code({
    id,
    htmlPath = "",
    cssPath = "",
    jsPath = "",
}) {

    const [activeTab, setActiveTab] = useState("html");
    const [code, setCode] = useState({});
    const [copy, setCopy] = useState(true);


    const getCode = async () => {
        try {
            const [htmlCode, cssCode, jsCode] = await Promise.all([
                fetch(htmlPath).then((code) => code.text()),
                fetch(cssPath).then((code) => code.text()),
                fetch(jsPath).then((code) => code.text()),
            ]);

            setCode({
                html: htmlCode,
                css: cssCode,
                js: jsCode
            });
        } catch (error) {
            console.log("Code.jsx :: getCode :: error :: ", error.message);
        }
    };

    useEffect(() => {
        if (id && htmlPath && cssPath && jsPath) {
            getCode();
        }

    }, [id, htmlPath, cssPath, jsPath]);


    return (
        <div className="w-full bg-transparent">
            <div className="w-full bg-[#3a404d] rounded-md overflow-hidden shadow-lg">
                {/* Buttons */}
                <div className="w-full flex justify-between items-center px-4 pt-2 text-xs text-white">
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setActiveTab("html")}
                            className={`px-5 py-2 border-x-2 border-slate-400 transition-all duration-300 font-semibold ${activeTab === "html"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            HTML
                        </button>
                        <button
                            onClick={() => setActiveTab("css")}
                            className={`px-5 py-2 transition-all duration-300 font-semibold ${activeTab === "css"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            CSS
                        </button>
                        <button
                            onClick={() => setActiveTab("js")}
                            className={`px-5 py-2 border-x-2 border-slate-400 transition-all duration-300 font-semibold ${activeTab === "js"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            JS
                        </button>
                    </div>
                    <div>
                        <button
                         className='flex justify-center items-center gap-2 px-2 text-slate-300 hover:text-white cursor-pointer'
                         onClick={() => {
                            navigator.clipboard.writeText(code[activeTab])
                            setCopy(false);

                            setTimeout(() => {
                                setCopy(true);
                            }, 3000);
                         }}
                         >
                            <span className='text-lg'>{copy ? <i className="fa-regular fa-clipboard"></i> : <i className="fa-solid fa-check"></i>}</span>
                            <span>{copy ? "Copy" : "Copied!"}</span>
                        </button>
                    </div>
                </div>

                {/* Code Display Area */}
                {/* <div className="w-full h-[600px] bg-[#1e1e2e] rounded-b-md p-4 overflow-auto"> */}
                {activeTab === "html" && (
                    <SyntaxHighlighter
                        language="html"
                        style={atomDark}
                        customStyle={{ padding: "20px", borderRadius: "8px", height: "600px" }}
                        wrapLongLines
                    >
                        {code.html}
                    </SyntaxHighlighter>
                )}
                {activeTab === "css" && (
                    <SyntaxHighlighter
                        language="css"
                        style={atomDark}
                        customStyle={{ padding: "20px", borderRadius: "8px", height: "600px" }}
                        wrapLongLines
                    >
                        {code.css}
                    </SyntaxHighlighter>
                )}
                {activeTab === "js" && (
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomDark}
                        customStyle={{ padding: "20px", borderRadius: "8px", height: "600px" }}
                        wrapLongLines
                    >
                        {code.js}
                    </SyntaxHighlighter>
                )}
                {/* </div> */}
            </div>
        </div>

    )
}

export default Code;