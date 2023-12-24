const data = []
const name = ""
const Reducer = (state={data,name},action)=>{
    switch(action.type){
       case "Success":
        return {data:action.payload.data,
                name:action.payload.name
             }
       case "Failed":
        return {data:action.payload.data,
                 name:action.payload.name}
        default:
            return state;
    }
}

export default Reducer;
