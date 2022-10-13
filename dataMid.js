document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function (){
    const transducer = document.querySelector('#transducer').value;
    if(transducer == "flow" || transducer == "Flow"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(flowdata => {
            console.log(flowdata);
            const number = document.querySelector('#number').value;
            if(number >= 0 && number <= 2 ){
                const flowname = flowdata[number].name;
                const flowplant = flowdata[number]["plant-site"];
                const flowrange = flowdata[number].range;
                const flowtype = flowdata[number].type;
                const flowunit = flowdata[number].unit; 
                const flowvalue = flowdata[number].value;
                document.querySelector('#r1_1').innerHTML = `Name : &nbsp; ${flowname}`;
                document.querySelector('#r1_2').innerHTML = `Type  &nbsp; : &nbsp; ${flowtype} &nbsp;&nbsp;/&nbsp; Range &nbsp; : &nbsp; ${flowrange}`;
                document.querySelector('#r1_3').innerHTML = `Value &nbsp; : &nbsp; ${flowvalue} &nbsp; ${flowunit}`;
                document.querySelector('#r1_4').innerHTML = `Plant-Site : &nbsp; ${flowplant}`;
            } else{
                document.querySelector('#r1_1').innerHTML = `Sorry, no information found. Please try again.`;
                document.querySelector('#r1_2').innerHTML = ``;
                document.querySelector('#r1_3').innerHTML = ``;
                document.querySelector('#r1_4').innerHTML = ``;
                alert(`Sorry, no information found. Please try again.`);
            }
        })
    
    .catch(error => {
        console.log('Error:', error);
    });

    return false;
    }
    if(transducer == "level" || transducer == "Level"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(leveldata => {
            console.log(leveldata);
            const number = document.querySelector('#number').value;
            if(number >= 0 && number <= 2 ){
                const levelname = leveldata[[number]].name;
                const levelplant = leveldata[[number]]["plant-site"];
                const levelrange = leveldata[[number]].range;
                const leveltype = leveldata[[number]].type;
                const levelunit = leveldata[[number]].unit; 
                const levelvalue = leveldata[[number]].value;
                document.querySelector('#r1_1').innerHTML = `Name : &nbsp; ${levelname}`;
                document.querySelector('#r1_2').innerHTML = `Type  &nbsp; : &nbsp; ${leveltype} &nbsp;&nbsp;/&nbsp; Range &nbsp; : &nbsp; ${levelrange}`;
                document.querySelector('#r1_3').innerHTML = `Value &nbsp; : &nbsp; ${levelvalue} &nbsp; ${levelunit}`;
                document.querySelector('#r1_4').innerHTML = `Plant-Site : &nbsp; ${levelplant}`;
            } else{
                document.querySelector('#r1_1').innerHTML = `Sorry, no information found. Please try again.`;
                document.querySelector('#r1_2').innerHTML = ``;
                document.querySelector('#r1_3').innerHTML = ``;
                document.querySelector('#r1_4').innerHTML = ``;
                alert(`Sorry, no information found. Please try again.`);
            }
        })
    
    .catch(error => {
        console.log('Error:', error);
    });

    return false;
    }
    if(transducer == "temperature" || transducer == "Temperature" || transducer == "Temp" || transducer == "temp"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(tempdata => {
            console.log(tempdata);
            const number = document.querySelector('#number').value;
            if(number >= 0 && number <= 2 ){
                const tempname = tempdata[[number]].name;
                const tempplant = tempdata[[number]]["plant-site"];
                const temprange = tempdata[[number]].range;
                const temptype = tempdata[[number]].type;
                const tempunit = tempdata[[number]].unit; 
                const tempvalue = tempdata[[number]].value;
                document.querySelector('#r1_1').innerHTML = `Name : &nbsp; ${tempname}`;
                document.querySelector('#r1_2').innerHTML = `Type  &nbsp; : &nbsp; ${temptype} &nbsp;&nbsp;/&nbsp; Range &nbsp; : &nbsp; ${temprange}`;
                document.querySelector('#r1_3').innerHTML = `Value &nbsp; : &nbsp; ${tempvalue} &nbsp; ${tempunit}`;
                document.querySelector('#r1_4').innerHTML = `Plant-Site : &nbsp; ${tempplant}`;
            } else{
                document.querySelector('#r1_1').innerHTML = `Sorry, no information found. Please try again.`;
                document.querySelector('#r1_2').innerHTML = ``;
                document.querySelector('#r1_3').innerHTML = ``;
                document.querySelector('#r1_4').innerHTML = ``;
                alert(`Sorry, no information found. Please try again.`);
            }
        })
    
    .catch(error => {
        console.log('Error:', error);
    });

    return false;
    }
    if(transducer == "pressure"|| transducer == "Pressure"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(pressuredata => {
            console.log(pressuredata);
            const number = document.querySelector('#number').value;
            if(number >= 0 && number <= 2 ){
                const pressurename = pressuredata[[number]].name;
                const pressureplant = pressuredata[[number]]["plant-site"];
                const pressurerange = pressuredata[[number]].range;
                const pressuretype = pressuredata[[number]].type;
                const pressureunit = pressuredata[[number]].unit; 
                const pressurevalue = pressuredata[[number]].value;
                document.querySelector('#r1_1').innerHTML = `Name : &nbsp; ${pressurename}`;
                document.querySelector('#r1_2').innerHTML = `Type  &nbsp; : &nbsp; ${pressuretype} &nbsp;&nbsp;/&nbsp; Range &nbsp; : &nbsp; ${pressurerange}`;
                document.querySelector('#r1_3').innerHTML = `Value &nbsp; : &nbsp; ${pressurevalue} &nbsp; ${pressureunit}`;
                document.querySelector('#r1_4').innerHTML = `Plant-Site : &nbsp; ${pressureplant}`;
            } else{
                document.querySelector('#r1_1').innerHTML = `Sorry, no information found. Please try again.`;
                document.querySelector('#r1_2').innerHTML = ``;
                document.querySelector('#r1_3').innerHTML = ``;
                document.querySelector('#r1_4').innerHTML = ``;
                alert(`Sorry, no information found. Please try again.`);
            }
        })
    
    .catch(error => {
        console.log('Error:', error);
    });

    return false;
    }
    else{
        document.querySelector('#r1_1').innerHTML = `Sorry, no information found. Please try again.`;
        document.querySelector('#r1_2').innerHTML = ``;
        document.querySelector('#r1_3').innerHTML = ``;
        document.querySelector('#r1_4').innerHTML = ``;alert(`Sorry, no information found. Please try again.`);
    }
    return false;
    
}});