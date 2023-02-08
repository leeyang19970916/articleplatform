import React, { Component, Fragment, useState, useRef } from "react"
import SortTagsBtn from "../list/filter/sort_tagsBtn";
import "../../../scss/list/_sort.scss"
const styles = {
    margin: "0 0 0 auto",
    color: 'white !important'
}
// const tagsArray=[]
const Offcanvas = () => {
    const [tagsArray, setTagsArray] = useState([]);
    let tagInputRef = useRef()
    const addTagsHandler = () => {
        let value=tagInputRef.current.value.trim();
        if (!value) {
            return
        }
        let tag={
            id:Math.random(),
            name:tagInputRef.current.value
        }
        setTagsArray([...tagsArray,tag])
        tagInputRef.current.value=""
    }
    const removeTagHandler=(item)=>{
        let {id}=item
        const newTagsArray=tagsArray.filter(item=>item.id!==id)
        setTagsArray(newTagsArray)
    }
    return (<Fragment>
        <div className="offcanvas offcanvas-start h-100 bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasBasicSetting" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header " style={styles}>
                <button type="button" className="btn-close  text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <div className="text-white fw-bolder pb-3">預覽圖片設定</div>
                    <div className="border w-100">image</div>
                </div>
                <div>
                    <div className="text-white fw-bolder py-3 pt-5">標題設定</div>
                    <div>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="主標題" aria-label="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="副標題" aria-label="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas offcanvas-start h-100 bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasTagsSetting" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header " style={styles}>
                <button type="button" className="btn-close  text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <div className="text-white fw-bolder pb-3">現有分類</div>
                    <div>
                        <div className="input-group mb-3 ">
                            <input type="text" className="form-control" placeholder="選擇主分類" aria-label="選擇主分類" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="選擇次分類" aria-label="選擇次分類" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-white fw-bolder  py-3 pt-5">現有標籤</div>
                    <div className="input-group mb-3">
                        <input ref={tagInputRef} type="text" className="form-control" placeholder="請輸入新標籤" aria-label="請輸入新標籤" />

                    </div>
                    <button type="button" className="btn btn-primary w-100 mb-3" onClick={addTagsHandler}>新增標籤</button>
                    {/* 這邊會有tagarry也可以打叉叉 */}
                    {tagsArray && tagsArray.map(item=><SortTagsBtn key={item.id} removeTag={removeTagHandler} status={"offcanvas"} item={item}></SortTagsBtn>) }
                </div>
            </div>
        </div>


    </Fragment>
    )
}
export default Offcanvas