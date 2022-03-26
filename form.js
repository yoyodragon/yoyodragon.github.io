function open_page(){
  let a = document.createElement('a');
  //a.target= '_blank';
  a.href = './main.html';
  a.click();
};

function validate() {
    if(document.loginform.name.value==''){
        alert('Fill the Input name');
        name.focus();
        return false;
    }
    if(document.loginform.email.value==''){
        alert('Fill the Input email');
        email.focus();
        return false;
    }
}



function go(){
  // (A) VARIABLES TO PASS
  var lname = document.getElementById("lname").value
  var lmail = document.getElementById("lmail").value
  // (B) OPEN NEW WINDOW
  // Just pass variables over to new window
  sessionStorage.setItem("lname", lname);
  sessionStorage.setItem("lmail", lmail);
  
   // prompt("inside if" + name + " " + mail);
    //window.open("./ssc.html");//window.location.href = "./ssc.html";
    //prompt("inside if" + name + " " + mail);
  // prompt(lname, lmail);.
  
  
};
go();


