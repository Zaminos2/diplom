import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import LoadingComponent from "../UI/LoadingComponent";
import ServerError from "../UI/ServerError";

function AllCategories(){
    const categoryStatus = useSelector((state)=>state.categoriesData.statusState);
    return(<>
    {categoryStatus === 'pending'&&<LoadingComponent/>}
    {categoryStatus === 'rejected'&&<ServerError/>}
     <Categories/>
    </>
       
    )
}
export default AllCategories;