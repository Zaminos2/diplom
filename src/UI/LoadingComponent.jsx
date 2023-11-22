
import { ThreeDots } from "react-loader-spinner";
import '../components/styles/loading.css'

function LoadingComponent(){
    return(
    <div className="loadingwrap">
            <p className="Loader">Loading</p>
            <ThreeDots
             height={80}
             width={100}
             radius={9}
             color="#4fa94d"
             ariaLabel="three-dots-loading"/>
    </div>
    )
}
export default LoadingComponent;