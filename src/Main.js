import React from 'react'
import * as XLSX from 'xlsx'
import {csv} from 'd3'

export default function Main(){
    const [one,setOne]=React.useState('f')
    const [two,setTwo]=React.useState('f')
    const [three,setThree]=React.useState('f')
    const [four,setFour]=React.useState('f')
    const [five,setFive]=React.useState('f')
    const [six,setSix]=React.useState('f')
    const [code,setCode] = React.useState('#ffffff')
    const [color,setColor] = React.useState('white')


    const [excelData,setExcelData]=React.useState(null);
    
    React.useEffect(()=>{
        setCode(prevCode=>{return ('#'+one+two+three+four+five+six)})
    },[one,two,three,four,five,six])
    
    React.useLayoutEffect(async()=>{
        csv(process.env.PUBLIC_URL+"/colornames.csv")
        .then(data=> setExcelData(data))
        .catch(err=>setExcelData(null))
    },[])

    const changeColor = async() =>{
        const searchBar = document.getElementById("search").value.toUpperCase();
        if(searchBar){
            const hexCode=excelData.find(c => c.name.toUpperCase()===searchBar).hex;
            // setCode(hexCode)
            setColor(searchBar)
            setOne(hexCode[1])
            setTwo(hexCode[2])
            setThree(hexCode[3]) 
            setFour(hexCode[4])
            setFive(hexCode[5])
            setSix(hexCode[6])
            document.getElementById("search").value="";
        }
        else
        {
            const colorName = excelData.find(c => c.hex===code)
            
            setColor(colorName?colorName.name:"No color Name")
            console.log(colorName)
        }

    }



    function incrOne(){
        setOne(prev=>{
            if(prev==='0'){return '1'}
           else if(prev==='1'){return '2'}
           else if(prev==='2'){return '3'}
           else if(prev==='3'){return '4'}
           else if(prev==='4'){return '5'}
           else if(prev==='5'){return '6'}
           else if(prev==='6'){return '7'}
           else if(prev==='7'){return '8'}
           else if(prev==='8'){return '9'}
           else if(prev==='9'){return 'a'}
           else if(prev==='a'){return 'b'}
           else if(prev==='b'){return 'c'}
           else if(prev==='c'){return 'd'}
           else if(prev==='d'){return 'e'}
           else if(prev==='e'){return 'f'}
           else if(prev==='f'){return '0'}
       })
   }

   function decrOne(){
    setOne(prev=>{
        if(prev==='0'){return 'f'}
       else if(prev==='1'){return '0'}
       else if(prev==='2'){return '1'}
       else if(prev==='3'){return '2'}
       else if(prev==='4'){return '3'}
       else if(prev==='5'){return '4'}
       else if(prev==='6'){return '5'}
       else if(prev==='7'){return '6'}
       else if(prev==='8'){return '7'}
       else if(prev==='9'){return '8'}
       else if(prev==='a'){return '9'}
       else if(prev==='b'){return 'a'}
       else if(prev==='c'){return 'b'}
       else if(prev==='d'){return 'c'}
       else if(prev==='e'){return 'd'}
       else if(prev==='f'){return 'e'}
   })
}
function incrTwo(){
    setTwo(prev=>{
        if(prev==='0'){return '1'}
       else if(prev==='1'){return '2'}
       else if(prev==='2'){return '3'}
       else if(prev==='3'){return '4'}
       else if(prev==='4'){return '5'}
       else if(prev==='5'){return '6'}
       else if(prev==='6'){return '7'}
       else if(prev==='7'){return '8'}
       else if(prev==='8'){return '9'}
       else if(prev==='9'){return 'a'}
       else if(prev==='a'){return 'b'}
       else if(prev==='b'){return 'c'}
       else if(prev==='c'){return 'd'}
       else if(prev==='d'){return 'e'}
       else if(prev==='e'){return 'f'}
       else if(prev==='f'){return '0'}
   })
}

function decrTwo(){
    setTwo(prev=>{
    if(prev==='0'){return 'f'}
   else if(prev==='1'){return '0'}
   else if(prev==='2'){return '1'}
   else if(prev==='3'){return '2'}
   else if(prev==='4'){return '3'}
   else if(prev==='5'){return '4'}
   else if(prev==='6'){return '5'}
   else if(prev==='7'){return '6'}
   else if(prev==='8'){return '7'}
   else if(prev==='9'){return '8'}
   else if(prev==='a'){return '9'}
   else if(prev==='b'){return 'a'}
   else if(prev==='c'){return 'b'}
   else if(prev==='d'){return 'c'}
   else if(prev==='e'){return 'd'}
   else if(prev==='f'){return 'e'}
})
}
function incrThree(){
    setThree(prev=>{
        if(prev==='0'){return '1'}
       else if(prev==='1'){return '2'}
       else if(prev==='2'){return '3'}
       else if(prev==='3'){return '4'}
       else if(prev==='4'){return '5'}
       else if(prev==='5'){return '6'}
       else if(prev==='6'){return '7'}
       else if(prev==='7'){return '8'}
       else if(prev==='8'){return '9'}
       else if(prev==='9'){return 'a'}
       else if(prev==='a'){return 'b'}
       else if(prev==='b'){return 'c'}
       else if(prev==='c'){return 'd'}
       else if(prev==='d'){return 'e'}
       else if(prev==='e'){return 'f'}
       else if(prev==='f'){return '0'}
   })
}

function decrThree(){
setThree(prev=>{
    if(prev==='0'){return 'f'}
   else if(prev==='1'){return '0'}
   else if(prev==='2'){return '1'}
   else if(prev==='3'){return '2'}
   else if(prev==='4'){return '3'}
   else if(prev==='5'){return '4'}
   else if(prev==='6'){return '5'}
   else if(prev==='7'){return '6'}
   else if(prev==='8'){return '7'}
   else if(prev==='9'){return '8'}
   else if(prev==='a'){return '9'}
   else if(prev==='b'){return 'a'}
   else if(prev==='c'){return 'b'}
   else if(prev==='d'){return 'c'}
   else if(prev==='e'){return 'd'}
   else if(prev==='f'){return 'e'}
})
}
function incrFour(){
    setFour(prev=>{
        if(prev==='0'){return '1'}
       else if(prev==='1'){return '2'}
       else if(prev==='2'){return '3'}
       else if(prev==='3'){return '4'}
       else if(prev==='4'){return '5'}
       else if(prev==='5'){return '6'}
       else if(prev==='6'){return '7'}
       else if(prev==='7'){return '8'}
       else if(prev==='8'){return '9'}
       else if(prev==='9'){return 'a'}
       else if(prev==='a'){return 'b'}
       else if(prev==='b'){return 'c'}
       else if(prev==='c'){return 'd'}
       else if(prev==='d'){return 'e'}
       else if(prev==='e'){return 'f'}
       else if(prev==='f'){return '0'}
   })
}

function decrFour(){
setFour(prev=>{
    if(prev==='0'){return 'f'}
   else if(prev==='1'){return '0'}
   else if(prev==='2'){return '1'}
   else if(prev==='3'){return '2'}
   else if(prev==='4'){return '3'}
   else if(prev==='5'){return '4'}
   else if(prev==='6'){return '5'}
   else if(prev==='7'){return '6'}
   else if(prev==='8'){return '7'}
   else if(prev==='9'){return '8'}
   else if(prev==='a'){return '9'}
   else if(prev==='b'){return 'a'}
   else if(prev==='c'){return 'b'}
   else if(prev==='d'){return 'c'}
   else if(prev==='e'){return 'd'}
   else if(prev==='f'){return 'e'}
})
}
function incrFive(){
    setFive(prev=>{
        if(prev==='0'){return '1'}
       else if(prev==='1'){return '2'}
       else if(prev==='2'){return '3'}
       else if(prev==='3'){return '4'}
       else if(prev==='4'){return '5'}
       else if(prev==='5'){return '6'}
       else if(prev==='6'){return '7'}
       else if(prev==='7'){return '8'}
       else if(prev==='8'){return '9'}
       else if(prev==='9'){return 'a'}
       else if(prev==='a'){return 'b'}
       else if(prev==='b'){return 'c'}
       else if(prev==='c'){return 'd'}
       else if(prev==='d'){return 'e'}
       else if(prev==='e'){return 'f'}
       else if(prev==='f'){return '0'}
   })
}

function decrFive(){
setFive(prev=>{
    if(prev==='0'){return 'f'}
   else if(prev==='1'){return '0'}
   else if(prev==='2'){return '1'}
   else if(prev==='3'){return '2'}
   else if(prev==='4'){return '3'}
   else if(prev==='5'){return '4'}
   else if(prev==='6'){return '5'}
   else if(prev==='7'){return '6'}
   else if(prev==='8'){return '7'}
   else if(prev==='9'){return '8'}
   else if(prev==='a'){return '9'}
   else if(prev==='b'){return 'a'}
   else if(prev==='c'){return 'b'}
   else if(prev==='d'){return 'c'}
   else if(prev==='e'){return 'd'}
   else if(prev==='f'){return 'e'}
})
}
function incrSix(){
    setSix(prev=>{
        if(prev==='0'){return '1'}
       else if(prev==='1'){return '2'}
       else if(prev==='2'){return '3'}
       else if(prev==='3'){return '4'}
       else if(prev==='4'){return '5'}
       else if(prev==='5'){return '6'}
       else if(prev==='6'){return '7'}
       else if(prev==='7'){return '8'}
       else if(prev==='8'){return '9'}
       else if(prev==='9'){return 'a'}
       else if(prev==='a'){return 'b'}
       else if(prev==='b'){return 'c'}
       else if(prev==='c'){return 'd'}
       else if(prev==='d'){return 'e'}
       else if(prev==='e'){return 'f'}
       else if(prev==='f'){return '0'}
   })
}

function decrSix(){
setSix(prev=>{
    if(prev==='0'){return 'f'}
   else if(prev==='1'){return '0'}
   else if(prev==='2'){return '1'}
   else if(prev==='3'){return '2'}
   else if(prev==='4'){return '3'}
   else if(prev==='5'){return '4'}
   else if(prev==='6'){return '5'}
   else if(prev==='7'){return '6'}
   else if(prev==='8'){return '7'}
   else if(prev==='9'){return '8'}
   else if(prev==='a'){return '9'}
   else if(prev==='b'){return 'a'}
   else if(prev==='c'){return 'b'}
   else if(prev==='d'){return 'c'}
   else if(prev==='e'){return 'd'}
   else if(prev==='f'){return 'e'}
})
}



    function handleChange(event){
        [event.target.name] = event.target.value
    }
    
    return(
        <div className="external_div" style={{backgroundColor:code}}>
        <div  style={{backgroundColor:code}} className="main_div">
            <div className="center_div">
                <h1 style={{backgroundColor:"midColor",borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}} >"{color}"</h1>
                <form>
                <input type='text' id='search' className='search-bar' placeholder='Serch Color Name'></input>
                <div className="btn_div">
                     <div className='field-div'>   
                     <button type="button" id='d1' onClick={()=>{incrOne()}}  className='field-btn'>+</button>   
                    <input type='text' id='f1' name='f1' className='field-input' value={one} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i1' onClick={()=>{decrOne()}} className='field-btn'>-</button>   
                    </div>
                    <div className='field-div'>   
                     <button type="button" id='d2' onClick={()=>{incrTwo()}} className='field-btn'>+</button>   
                    <input type='text' id='f2' name='f2' className='field-input' value={two} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i2' onClick={()=>{decrTwo()}} className='field-btn'>-</button>   
                    </div>
                    <div className='field-div'>   
                     <button type="button" id='d3' onClick={()=>{incrThree()}} className='field-btn'>+</button>   
                    <input type='text' id='f3' name='f3' className='field-input' value={three} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i3' onClick={()=>{decrThree()}} className='field-btn'>-</button>   
                    </div>
                    <div className='field-div'>   
                     <button type="button" id='d4' onClick={()=>{incrFour()}}  className='field-btn'>+</button>   
                    <input type='text' id='f4' name='f4' className='field-input' value={four} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i4' onClick={()=>{decrFour()}} className='field-btn'>-</button>   
                    </div>
                    <div className='field-div'>   
                     <button type="button" id='d5' onClick={()=>{incrFive()}} className='field-btn'>+</button>   
                    <input type='text' id='f5' name='f5' className='field-input' value={five} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i5' onClick={()=>{decrFive()}} className='field-btn'>-</button>   
                    </div>
                    <div className='field-div'>   
                     <button type="button" id='d6' onClick={()=>{incrSix()}} className='field-btn'>+</button>   
                    <input type='text' id='f6' name='f6' className='field-input' value={six} onChange={(e)=>{handleChange(e)}}></input>
                    <button type="button" id='i6' onClick={()=>{decrSix()}} className='field-btn'>-</button>   
                    </div>
                </div>
                <button type="button" onClick={()=>{changeColor()}} className='submit-btn'>Get Color Code</button>
                
                </form>

                <h3>color:{code} </h3>
            </div>

        </div>
         
    </div>            
    
    )
}