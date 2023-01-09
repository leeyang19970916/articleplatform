const tags = (props) => {
    if (!props.tags) {
        return
    }
    let btnUI = props.tags.map((t) => {
        return (<button key={t.id} className="btn btn-success py-0 mx-1">{t.value}</button>)
    })
    return (
        <div>
            {btnUI}
        </div>
    )
}
export default tags