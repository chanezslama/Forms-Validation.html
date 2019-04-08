function Testinputsempty (){
    Casename = document.getElementById("InputName").value
    if( Casename ===""){
    alert('Empty Case ! ') }


    Caseaddress = document.getElementById("InputAddress").value
    if ( Caseaddress ==="") { 
        alert('Empty Case ! '); 
    }

    Caseemail = document.getElementById("InputEmail").value
    if ( Caseemail ==="" ) { 
        alert('Empty Case ! '); 
    }
    Casepassword = document.getElementById("InputPassword").value
    if ( Casepassword ==="") { 
        alert('Empty Case !'); 
    }
    
    let re1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{1,8}$/
    testpassword = document.getElementById("InputPassword")
    if (testpassword === !re1.test(testpassword)){
        alert ( 'Invalid Password')
   
    // return false
}   
    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    testemail = document.getElementById("InputEmail").value
    if ( testemail == '' || !re.test( testemail)){
        alert('Please enter a valid email address.');
        return false;
}
     
}
function TestReset (){
    document.getElementById("InputName").value ===""
    document.getElementById("InputAddress").value ===""
    document.getElementById("InputEmail").value ===""
    document.getElementById("InputPassword").value ===""
}