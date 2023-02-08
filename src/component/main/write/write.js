// import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment,useState } from "react"
import "../../../scss/write/write.scss"
import WriteHeader from "./writeHeader"
import WriteSetting from "./writeSetting";
import CKEditor from "./ckEditor";
const Write = () => {
    // const [EditHeight, setEditHeight] = useState(0);
    let headerHeight=0
    const heightHandler=(h)=>{
        headerHeight=h
    }
    const styles = {
        height:`calc(100% - ${headerHeight}px)`
      };
      
    // console.log(EditHeight,"EditHeight")
    return (<Fragment>
        <div className="w-100 ">
            <WriteHeader height={heightHandler}></WriteHeader>
        </div>
        <div className="d-flex w-100" style={styles}>
            <WriteSetting></WriteSetting>
            <CKEditor></CKEditor>
        </div>
    </Fragment>)
}
export default Write