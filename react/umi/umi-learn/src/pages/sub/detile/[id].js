export default function $id(props) {
    console.log(props);
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}
