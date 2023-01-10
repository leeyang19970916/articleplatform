import "../../../scss/_card.scss"
import TagsList from "./card-tagsList";
import CardTitle from "./card-title";
const Card = (props) => {
    let {tags}=props.object
    let articleDetail={
        ...props.object
    }
    return (
        <div className="border px-2 py-2 ">
            {tags &&<TagsList tags={tags} ></TagsList>}
            <CardTitle item={articleDetail}></CardTitle>
        </div>
    )
}
export default Card