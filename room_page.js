var firebaseConfig = {
    apiKey: "AIzaSyCwquwDda1Q5jcxIyWYVIkmsGo60YuAreU",
    authDomain: "let-s-chat-82f60.firebaseapp.com",
    projectId: "let-s-chat-82f60",
    storageBucket: "let-s-chat-82f60.appspot.com",
    messagingSenderId: "117704036504",
    appId: "1:117704036504:web:5db7af4021db245aaf40ed"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send() {
      message=document.getElementById("message_input").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
        });
document.getElementById("message_input").value="";
  }