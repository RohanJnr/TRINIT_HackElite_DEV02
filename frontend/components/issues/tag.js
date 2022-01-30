export default function Tag(props) {
    return(
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-black border-2">
            {props.tag}
        </span>
    )

}