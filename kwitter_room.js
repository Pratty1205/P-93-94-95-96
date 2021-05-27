var firebaseConfig = {
    apiKey: "AIzaSyCwquwDda1Q5jcxIyWYVIkmsGo60YuAreU",
    authDomain: "let-s-chat-82f60.firebaseapp.com",
    projectId: "let-s-chat-82f60",
    storageBucket: "let-s-chat-82f60.appspot.com",
    messagingSenderId: "117704036504",
    appId: "1:117704036504:web:5db7af4021db245aaf40ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("kwitter_room_user_name").innerHTML=user_name;
function addroom() {
  room_name=document.getElementById("Room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database()ref("/").child(room_name).update({
    purpose:"Adding Room Name"
  }
 );
 window.location="room_page.html";
}
function getData() {
  firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 row="<div class='Rooms' id="+room_names+" onclick='rediectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 });});}
getData();
function rediectToRoomName() {
 localStorage.setItem("room_name", room_name);
 window.location="room_page.html";

}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}