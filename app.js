


/// for testing sudent register form details, this values are fixed for testing ////

// Define an object with the values you want to set
// var studentData = {
//     "studentName": "test",
//     "fatherName": "test",
//     "roll-no": 1233132,
//     "contact-no": 3232323,
//     "cnic-no": 33332323,
//     "days": "Saturday",
//     "section": "Girls",
//     "teacher": "Mam Hina",
//     "course": "Flutter",
//     "batch": "03",
//     "timings": "9:00 am to 1:00 pm"
// };

// Loop through the object and set values for each element
// for (var key in studentData) {
//     if (studentData.hasOwnProperty(key)) {
//         var element = document.getElementById(key);
//         if (element) {
//             element.value = studentData[key];
//         }
//     }
// }


////////////  admin authentication//////////////

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"

import { getDatabase, set, ref, get , child } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"


const auth = getAuth()

const db = getDatabase()

   ///// admin signUp /////////
const signUp = () => {

    let email = document.getElementById("signUp-email").value
    let password = document.getElementById("signUp-password").value
   
    
   createUserWithEmailAndPassword(auth, email, password)

    .then((resol) => {

        alert("signup successfully")

        window.location.href = "./adminLogin.html"

        })

        

        .catch((rej) => {

            alert("signup failed!", rej)

        })
        }


        
   ////// admin logging
const login = () => {

    let loginEmail = document.getElementById("login-email")

    let loginPassword = document.getElementById("login-password")

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)

        .then((resol) => {

            alert("Successfully login")

            window.location.href = "./stdAttendenceReport.html"

                

                
        })

           .catch((rej) => {

            alert("login failed !")

        })
        
        
    }



     /// stusents details inputs feilds  ////

     let stdName = document.getElementById("studentName")
     let stdFatherName = document.getElementById("fatherName")
     let stdRollNo = document.getElementById("roll-no")
     let stdContactNo = document.getElementById("contact-no")
     let stdCnicNo = document.getElementById("cnic-no")
     let stdClassDays = document.getElementById("days")
     let stdSection = document.getElementById("section")
     let stdTeacherName = document.getElementById("teacher")
     let stdCourse = document.getElementById("course")
     let stdBatch = document.getElementById("batch")
     let stdCalssTime = document.getElementById("timings")


     //// setting data function ////
    
     function dataSubmitting() {
        // debugger
        set(ref(db, "theStudents/" + "rollNo:" + stdRollNo.value),{

          
            Name : stdName.value,
            FatherName : stdFatherName.value,
            RollNo : stdRollNo.value,
            ContactNo : stdContactNo.value,
            CnicNo : stdCnicNo.value,
            ClassDays : stdClassDays.value,
            Section : stdSection.value,
            TeacherName : stdTeacherName.value,
            Course : stdCourse.value,
            Batch : stdBatch.value,
            CalssTime : stdCalssTime.value
            
           
            
        })
        
        .then((resolve) =>{
            alert(`data submitted successfully`)
        })
      
        
        .catch((error) => {
            alert('unsuccessfully , error' +error)
        })
      }

      //// data cheecking function ///

       function dataSelecting() {
        //  debugger
        const studentRef = ref(db)
        get(child(studentRef, "theStudents/" + "rollNo:" + stdRollNo.value))
        .then((snapshot)=>{
            console.log(snapshot);
            // debugger
            if (snapshot.exists()){

                // document.getElementById("studentName").value = snapshot.val().Name   /// this is  also working , just it is another way to do
                // document.getElementById("teacher").value = snapshot.val().TeacherName
                
                stdName.value = snapshot.val().Name
                stdTeacherName.value = snapshot.val().TeacherName


                }
                
            else{
                
                console.log(" Data not found");
                }
        })
        
        .catch((error) =>{
            console.log('unsuccessful , error '  + error);
        })
    
        
    }

    ///// marking attendence function ////
    function markingAttendence() {
    alert("Attendence has been marked");

    var studentId = document.getElementById("roll-no").value;
    
    var studentName = document.getElementById("studentName").value;
    
    var studentAttendence = document.getElementById("std-attendence").value

    // Add student details to the table
    
    var tableBody = document.getElementById("student-table-body");
    var newRow = tableBody.insertRow(tableBody.rows.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = studentId;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = studentName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = studentAttendence;



     // Clear the form fields
    
     document.getElementById("roll-no").value = "";
    
    document.getElementById("studentName").value = "";
    
    document.getElementById("std-attendence").value = "";

    document.getElementById("teacher").value = "";


}
                    
    
//// admin card clicked function ////
    const adminClick = () => {
        window.location.href = "./adminSignUp.html"
    
    }

//// student card clicked function  ////
    
    const stdClick = () => {
        window.location.href = "./stdAttendence.html"
    
    }
    
    
    
//// buttons calling ////

    let signUpBtn = document.getElementById("signup-button")
    let loginBtn = document.getElementById("login-button")
    let cardOne = document.querySelector(".card-1") 
    let cardTwo = document.querySelector(".card-2")
    let markAttendenceBtn = document.getElementById("attendence-mark")
    let cheeckStdDataBtn = document.getElementById("std-data")
    let submitData = document.getElementById("data-submitted")



    ///// on found of button particular function will run ////

if (signUpBtn) {
    signUpBtn.addEventListener("click", signUp)
}

if (loginBtn) {
    loginBtn.addEventListener("click", login)
}


if (cardOne) {
    
    cardOne.addEventListener("click", adminClick)
}


if (cardTwo) {
    cardTwo.addEventListener("click", stdClick)
}



if (cheeckStdDataBtn) {
    cheeckStdDataBtn.addEventListener("click", dataSelecting)
}
if (submitData) {
    submitData.addEventListener("click", dataSubmitting)
}

if(markAttendenceBtn){
    markAttendenceBtn.addEventListener("click" , markingAttendence)
}








    
    








   

   























