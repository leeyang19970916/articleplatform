import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment } from "react"
import { useRef,useEffect,useState } from "react";
const WriteSetting = (props) => {
// let headerRef=useRef()
// let [headerHeight,setHeaderHeight]=useState(0)
//     useEffect(()=>{
//         let height=headerRef.current.getBoundingClientRect().height
//         setHeaderHeight(height)
//         props.height(headerHeight)
//     }, [headerHeight])
    return (<Fragment>
        <div className="bg-white py-3 px-4 d-flex justify-content-end">
            <button type="button" className="btn btn-primary px-4 mx-3">儲存文章</button>
            <button type="button" className="btn btn-outline-primary px-4 mx-3">預覽文章</button>

        </div>
    </Fragment>)
}
export default WriteSetting