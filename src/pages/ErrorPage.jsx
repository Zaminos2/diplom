import { errorPage } from "../utils";
import '../components/styles/errorPage.css'


function ErrorPage(){
    return(
        <div className="errorpageWrap">
            <img src={errorPage} alt="404Img" className="errorPage" />
        </div>
    )
}
export default ErrorPage;