$(document).ready(function(){

  $("#firstName").blur(function(){
    var nama  = $("#firstName").val();
    if (nama == "") {
      $(".firstName").text("Harap Isi dulu");
    }else {
      $(".firstName").text("");
    }
  })

  $("#lastName").blur(function(){
    var nama  = $("#lastName").val();
    if (nama == "") {
      $(".lastName").text("Harap Isi dulu");
    }else {
      $(".lastName").text("");
    }
  })

  function nama(){
    var firstName = $("#firstName").val();
    var lastName  = $("#lastName").val();
    if (firstName !== "" && lastName !== "") {
      var fullName = firstName + " " + lastName;
      $("#fullName").val(fullName);
    }
  }

  $("#fullName").focus(function(){
    nama();
  });

  function username(){
    var firstName = $("#firstName").val();
    var lastName  = $("#lastName").val();
    if (firstName !== "" && lastName !== "") {
      var userName = firstName + "_" + lastName;
      $("#userName").val(userName);
    }
  }

  $("#userName").focus(function(){
    username();
  })

  $("#email").blur(function(){
    var email   = $("#email").val();
    if (email == "") {
      var pesan   = "Masukkan Email";
      $(".textEmail").text(pesan);
    } else if (email.search('@') >= 0) {
      var pesan2   = "Email Terverifikasi";
      $(".textEmail").text(pesan2);
    }else {
      var pesan3   = "Masukkan Email";
      $(".textEmail").text(pesan3);
    }
  })

  $("#pass").blur(function(){
    var passNew   = $("#pass").val();
    var konfirPass  = $("#konfirPass").val();
    if (passNew == "" && konfirPass == "") {
      $(".textPassword, .textKonfirPass").text("Isi Password Terlebih dahulu");
    } else if (passNew.length < 5) {
      $(".textPassword").text("Masukkan minimal 5 Karakter");
    }else {
      $(".textPassword").text("");
    }
  })

  $("#konfirPass").blur(function(){
    var passNew     = $("#pass").val();
    var konfirPass  = $("#konfirPass").val();
    if (konfirPass !== passNew) {
      $(".textKonfirPass").text("Password tidak sama");
    }else if (konfirPass.length < 5) {
      $(".textKonfirPass").text("Lengkapi Password anda");
    }else {
      $(".textKonfirPass").text("Password Terverifikasi");
    }
  })

  $("#url").blur(function(){
    var textUrl   = $("#url").val();
    if (textUrl == "") {
      $(".textUrl").text("Isi terlebih dahulu");
    }else if (textUrl.search('https://') == -1 || textUrl.search('.com') == -1){
      $(".textUrl").text("Isi alamat Internet dengan benar");
    }else {
      $(".textUrl").text("");
    }
  })

});
