const displayData = (data)=>{
    result.value+=data
}
const calcClear=()=>{
    result.value=""
}
const ResultValue=()=>{
    if(result.value!=""){
   try{result.value=eval(result.value)

    }catch{
        result.value="Error!!"
       }
    }
}
const removeLast=()=>{
    result.value=result.value.slice(0,-1)
}