
import '../components/styles/navBarStyle.css'

function CartCounter({cartState}){
    
    return(
        <div className="cartCounter">
            <p className="counterValue">{cartState.length}</p>
        </div>
    )
}
export default CartCounter;