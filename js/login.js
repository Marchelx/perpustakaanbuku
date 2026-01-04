document.getElementById("formLogin").addEventListener("submit", function(e){
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user === "" || pass === ""){
    alert("Username dan Password wajib diisi!");
  } else {
    window.location.href = "beranda.html";
  }
});
