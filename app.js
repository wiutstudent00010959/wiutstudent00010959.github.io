//start
 // Form validation code will come here.
 
 function validate() {
      
    if( document.hireMeForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.hireMeForm.name.focus() ;
       return false;
    }
    if( document.hireMeForm.email.value == "" ) {
       alert( "Please provide your email!" );
       document.hireMeForm.email.focus() ;
       return false;
    }
    if( document.hireMeForm.phone.value == "" || isNaN( document.hireMeForm.phone.value )) {
       
       alert( "Please provide a phone number!" );
       document.hireMeForm.phone.focus() ;
       return false;
    }
    if( document.hireMeForm.startDate.value == "-1" ) {
       alert( "Please provide your approximate start date!" );
       return false;
    }
    if( document.hireMeForm.endDate.value == "-1" ) {
        alert( "Please provide your approximate end date!" );
        return false;
     }
     else {
        document.hireMeForm.submit();
        alert( "Your offer was submitted!");
    }
 }


 function validate2() {
    var feedback_input = document.getElementById("feedback-input");
    if( document.contactMeForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.contactMeForm.Name.focus() ;
       return false;
    }
    if( document.contactMeForm.Email.value == "" ) {
       alert( "Please provide your email!" );
       document.contactMeForm.Email.focus() ;
       return false;
    }
    //if( document.contactMeForm.text.value == "" ) {
       
      // alert( "Please provide a message!" );
      // document.contactMeForm.text.focus() ;
      // return false;
    //}
    if( document.contactMeForm.text.value == "" ) {
        alert( "Please provide your message!" );
        document.contactMeForm.text.focus() ;
        return false;
     }
    else {
        document.contactMeForm.submit();
        alert( "Your message was sent!");
    }
    
 }
function disableDarkMode(){
      var element = document.getElementById("darkmodebody");
      element.classList.remove("dark-mode");
    }
function enableDarkMode(){
   var element = document.getElementById("darkmodebody");
      element.classList.add("dark-mode"); }




// function darkMode() {
  // var element = document.body;
   //element.classList.toggle("dark-mode");
//}


