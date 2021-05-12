let  names = ['John','Jeff','Rahul','Dipesh','Jashan','Jatin','Sagar','Jim','Gambhir','Sachin','Virat'];


for (let i = 0; i < names.length; i++){
    let firstLetter = names[i].charAt(0).toLowerCase();
    if(firstLetter === "j"){
    console.log('goodbye '+ names[i]);
    }else {
        console.log('hello '+ names[i]);
    }


}
