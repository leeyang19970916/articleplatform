import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../../../store/articleSlice"
const EditImage = (props) => {
    let dispatch = useDispatch()
    let image = useSelector(state => state.article.image)
    console.log(image, "immmaa")
    // let { confirmStatus } = props
    // console.log(confirmStatus, "confirmStatus")

    // const [imageState, setImageState] = useState(null);
    // imageState船上去store

    const imageHandler = (e) => {
        if (!e.target.files[0]) return;
        var reader = new FileReader();
        reader.onload = function () {
            dispatch(addImage(reader.result))
            // setImageState(reader.result);

        };
        reader?.readAsDataURL(e?.target?.files[0]);
        e.target.value = "";

        // props.image(imageState)
    }
    const removeImage = () => {
        // setImageState("")
        dispatch(removeImage(""))
    }

    return (<div className="pt-3">
        <div className="d-flex pb-2"> 
        <input type='file' onChange={imageHandler} accept="image/*,.pdf" />
        {image && <button className="btn btn-danger" onClick={removeImage}>X</button>}

        </div>
        {image && <img src={image} className="img-thumbnail w-100 " alt="..."></img>}

    </div>)
}
export default EditImage