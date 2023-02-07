// import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment } from "react"
import "../../../scss/write/write.scss"
import WriteHeader from "./writeHeader"
import WriteSetting from "./writeSetting";
import CKEditor from "./ckEditor";
const Write = () => {
    return (<Fragment>
        <div className="w-100 border">
            <WriteHeader></WriteHeader>
        </div>
        <div className="d-flex w-100 border">
            <WriteSetting></WriteSetting>
            <CKEditor></CKEditor>
        </div>
    </Fragment>)
}
export default Write