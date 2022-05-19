function Login(){
  UserName = document.getElementById("username").value;
  localStorage.setItem("username_key",UserName);
  window.location = "kwitter_room.html";

}