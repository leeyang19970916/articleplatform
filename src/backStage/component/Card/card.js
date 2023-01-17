import "../../../scss/_card.scss"
import TagsList from "./card-tagsList";
import CardList from "./cardList";
const Card = (props) => {
    let {tags}=props.object
    let articleDetail={
        ...props.object
    }
    return (
        <div className="border px-2 py-2 ">
            {tags &&<TagsList tags={tags} ></TagsList>}
            <CardList item={articleDetail}></CardList>
        </div>
    )
}
export default Card