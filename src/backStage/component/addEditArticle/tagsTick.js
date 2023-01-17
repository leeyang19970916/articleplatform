import { useSelector } from "react-redux"


const tagsTick=(props)=>{
    console.log(props)
    let {id,value}=props.item
    // const formalTagsList=useSelector(state=>state.tagList)
    
    const tickTag=(id)=>{
        console.log(id,"==")
    }

    return <button id={id}
    className="btn btn-outline-success py-0 mx-1 singleTagBtn"
    // style={{ backgroundColor: tickTagState ? 'yellow' : 'white' }}
    > 
   {value} <div className="px-2 text-bg-primary"  onClick={()=>{tickTag(id)}}>Ｏ</div></button>
}
export default tagsTick