export default function Main(props){
    const {data} = props

    return (
            <div className="imgContainer">
                <img alt={data.title || "bg-image"} class="bgImage" src={data.hdurl}/>
            </div>
    )
}
