import '../components/styles/modal.css'

function ModalComponent({text}){
    return(
        <div className="modalWrap">
            <div className="modalContainer">
                <h3 className="modalText">{text}</h3>
            </div>
        </div>
    )
}
export default ModalComponent;