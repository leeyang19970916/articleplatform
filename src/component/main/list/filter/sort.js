import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom";
import SortTagsBtn from "./sort_tagsBtn";
const tagsArray = [{ id: "q1", name: "癌症" }, { id: "q22", name: "高血壓" }, { id: "88ffff", name: "飲食" }, { id: "q1rrrr", name: "體重" },]
const Sort = () => {

    return (
        <div className="bg-white my-2 sort py-2 px-3">
            <section className="px-2">
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>搜尋文章</div>
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>搜尋標籤</div>
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div>
                    {tagsArray.map(item => <SortTagsBtn key={item.id} item={item}></SortTagsBtn>)}
                </div>
            </section>

            <section className="px-2">
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>主分類</div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>熱門文章</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>次分類</div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>飲食習慣</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{ width: "20%" }}>發佈時間</div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="2023/2/7" aria-label="Username" />
                        <div className="px-2 d-flex align-items-center">~</div>
                        {/* <span class="">~</span> */}
                        <input type="text" class="form-control" placeholder="2023/6/7" aria-label="Server" />
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Sort