export default function Footer(props){

    const {showModal, handleToggleModal} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>The brutal martian landscape</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick = {handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i> 
            </button>
        </footer>
    )
}