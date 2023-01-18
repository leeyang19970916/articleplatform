import "../../../scss/_card.scss"
import TagsList from "./card-tagsList";
import CardList from "./cardList";
const Card = (props) => {
    // console.log(props,"好亂你媽機掰")
    let item=props.item
    let {tags}=item

    return (
        <div className="border px-2 py-2 ">
            {tags &&<TagsList tags={tags} ></TagsList>}
            <CardList item={item}></CardList>
        </div>
    )
}
export default Card