import React from 'react'
import * as XLSX from 'xlsx'
import axios from 'axios'

export default function Form(){
    
    const [excelFile,setexcelFile]=React.useState(null);
    const [excelData,setExcelData]=React.useState(null);
   
    async function handleFile(event){
        const selectedFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
            // console.log(e.target.result);
            setexcelFile(e.target.result);
          } 
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(excelFile!==null){
          const workbook = await XLSX.read(excelFile,{type:'buffer'});
          const worksheetName = await workbook.SheetNames[0];
          const worksheet=await workbook.Sheets[worksheetName];
          const data = await XLSX.utils.sheet_to_json(worksheet);
          console.log(data)
          const abc = await axios.post("http://localhost:3001/save-data",{color:data[0].name})
          console.log(abc);
          setExcelData(data);
        }
        else{
          setExcelData(null);
        }
      }
    
    return (<>
        <input type="file" onChange={(e)=>{handleFile(e)}}></input>
        <button onClick={(e)=>{handleSubmit(e)}}>Submit</button>
        </>
        )
}