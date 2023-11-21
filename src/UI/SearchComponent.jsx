import { Input } from "antd";
import { ConcatArray,searchArray } from "../utils";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import SearchListRender from "../components/SearchListRender";


function SearchComponent() {
  const { categoriesState } = useSelector((state) => state.categoriesData);
  const { salesState } = useSelector((state) => state.salesData);
  const [searchValue,setSearchValue] = useState('');
  const [searchResult,setSearchResult]= useState([]);
    
  const concatResult = useMemo(() => {
    return (
      ConcatArray(categoriesState, salesState, "concatArray") ||
      JSON.parse(localStorage.getItem("concatArray"))
    );
  }, [categoriesState, salesState]);
 useEffect(()=>{
    setSearchResult(searchArray(concatResult,searchValue))
 },[concatResult,searchValue]);
 
  return (
    <div className="searchContainer">
      <Input defaultValue='' className="searchInput" onChange={(event)=>setSearchValue(event.target.value)} placeholder="Search"/>
      {searchValue&&(<SearchListRender arr={searchResult} setState={setSearchValue}/>)}
    </div>
  );
}
export default SearchComponent;
