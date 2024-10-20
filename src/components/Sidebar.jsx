export default function Sidebar(props){
    const {handleToggleModal} = props
    
    return(
        <div className="sidebar">
            <div className="bgOverlay" onClick = {handleToggleModal}></div>
            <div className="sidebarContents">
                <h2>The brutal martian landscape</h2>
                <div>
                    <p>Description</p>
                    <p>sadwadwadwad awd wad wad awd wadadwadw adwa dwad a </p>
                </div>
                <button onClick = {handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>

            
        </div>
    )
}