import { useState } from "react";
const EditImage = (props) => {
    let { confirmStatus } = props
    // console.log(confirmStatus, "confirmStatus")

    const [imageState, setImageState] = useState(null);
    // imageState船上去store

    const imageHandler = (e) => {
        if (!e.target.files[0]) return;
        var reader = new FileReader();
        reader.onload = function () {
            setImageState(reader.result);
        };
        reader?.readAsDataURL(e?.target?.files[0]);
        e.target.value = "";
        props.image(imageState)
    }

    return (<div className="pt-3">
        <input type='file' onChange={imageHandler} accept="image/*,.pdf" />
        {imageState && <img src={imageState} className="img-thumbnail w-100 " alt="..."></img>}

    </div>)
}
export default EditImage