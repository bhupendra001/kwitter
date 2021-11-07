
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var  firebaseConfig = {
      apiKey: "AIzaSyDRt8DJj4FuhpoSAnsO3x21lfG1V1nGo00",
      authDomain: "kwitter2-daa4f.firebaseapp.com",
      databaseURL: "https://kwitter2-daa4f-default-rtdb.firebaseio.com",
      projectId: "kwitter2-daa4f",
      storageBucket: "kwitter2-daa4f.appspot.com",
      messagingSenderId: "807241270553",
      appId: "1:807241270553:web:f9834051175809bf95f188"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome-" + user_name;

    function addroomname(){

     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
     purpose: "Adding room name"

     });
     localStorage.setItem("room_name",room_name);
     window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){

console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";

}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location = "index.html"
}

