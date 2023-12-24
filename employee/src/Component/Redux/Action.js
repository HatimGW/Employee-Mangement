import axios from "axios"
import BASE_URL from "../uri"

const Fetch = () =>async(dispatch)=>{
try {
    const fetch = await axios.get(`${BASE_URL}/fetch`,{withCredentials:true,credentials:'include'})
    const response = fetch.data.Data
    const Name = fetch.data.Name
    dispatch({
        type:"Success",
        payload:{
            data:response,
            name:Name
        }
    })
} catch (error) {
    dispatch({
        type:"Failed",
        payload:error
    })
}       
}
export default Fetch;
         