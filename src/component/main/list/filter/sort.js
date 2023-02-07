import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom";
import SortTagsBtn from "./sort_tagsBtn";
const tagsArray =[{id:"q1",name:"癌症"},{id:"q22",name:"高血壓"},{id:"88ffff",name:"飲食"},{id:"q1rrrr",name:"體重"},] 
const Sort = () => {

    return (
        <div className="bg-white my-2 sort py-2 px-3">
            <section>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{width:"20%"}}>搜尋文章</div>
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="fw-bolder text-primary" style={{width:"20%"}}>搜尋標籤</div>
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div>
                {tagsArray.map(item=><SortTagsBtn key={item.id} item={item}></SortTagsBtn>)}
                </div>
            </section>

            <section>

            </section>
        </div>
    )
}
export default Sort