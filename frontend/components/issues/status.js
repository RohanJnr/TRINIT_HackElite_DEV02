export default function Status(props) {
    const status = props.status
    return(
        <span className={
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
            (status === "Approved" ? "bg-green-200 text-green-800": <></>)+
            (status === "WIP" ? "bg-yellow-200 text-yellow-800": <></>)+
            (status === "Closed" ? "bg-red-200 text-red-800": <></>)+
            (status === "Resolved" ? "bg-blue-200 text-blue-800": <></>)
        }
        >
            {props.status}
        </span>
    )

}