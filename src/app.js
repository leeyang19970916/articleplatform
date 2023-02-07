import React, { Fragment, useState } from "react"
import { Route, } from "react-router-dom"
import Navbar from "./component/navbar/navbar";
import Main from "./component/main/main";
// import {}
// const className = {

// }
const App = () => {
    const initHeight = window.innerHeight;

    const [height, setHeight] = useState(initHeight);
    // setHeight(initHeight)
    console.log(height);
    return (
        <div className="w-100 d-flex" style={{ height: height }}>
            <div className="h-100 bg-dark" style={{ width: '15%' }}>
                <Navbar></Navbar>
            </div>
            <div className="h-100 px-5 pt-4 pb-2" style={{ width: '85%',background:"rgb(241,241,241)" }}>
                <Main></Main>
            </div>

        </div>
    )
}
export default App