import React,{useState} from 'react';
import "./style.css";
import Menue from "./menueApi.js";
import MenueCard from "./MenueCard.js";
import Navbar from "./Navbar.js";
const uniqueList=[
    ...new Set (Menue.map((curElem)=>{
return curElem.category;
})),"All"];
console.log(uniqueList);
const Restaurant = () => {
    const[menueData,setMenueData]=useState(Menue);
    const[menueList,setMenueList]=useState(uniqueList);
   const filterItem =(category)=>{
       if(category==="All"){
           setMenueData(Menue);
           return;
       }
       const updatedList=Menue.filter((curElem)=>{
           return curElem.category===category;
       })
       setMenueData(updatedList);
   }

    return (
        <> 
            <Navbar filterItem ={filterItem } menueList={menueList} />
            <MenueCard menueData={menueData} />
        </>
    )
}

export default Restaurant
