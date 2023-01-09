import "../../../scss/_card.scss"
import TagsList from "./card-tagsList";
import CardTitle from "./card-title";
const Card = (props) => {
    console.log(props,"obj")

    let {title,tags,time,id}=props.item
    return (
        <div className="border px-2 py-2 ">
            {tags &&<TagsList tags={tags} ></TagsList>}
            <CardTitle id={id} title={title} time={time} ></CardTitle>
        </div>
    )
}
export default Card