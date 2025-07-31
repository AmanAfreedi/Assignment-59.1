import { useParams } from "react-router";
import Alldata from "./Alldata";

function getProducts(){
    console.log("getProduct called")
    return Alldata;
    
}
export default getProducts;