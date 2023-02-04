import React, { Fragment, useState } from "react"
import { Route, } from "react-router-dom"
import Navbar from "./component/navbar/navbar";
import Main from "./component/main/main";
// const className = {

// }
const App = () => {
    const initHeight = window.innerHeight;

    const [height, setHeight] = useState(initHeight);
    // setHeight(initHeight)
    console.log(height);
    return (
        <div className="w-100 d-flex" style={{ height: height }}>
            <div className="h-100 bg-primary" style={{ width: '15%' }}>
                <Navbar></Navbar>
            </div>
            <div className="h-100 bg-light px-3 py-3" style={{ width: '85%' }}>
                <Main></Main>
            </div>

        </div>
    )
}
export default App