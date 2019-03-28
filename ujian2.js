$(document).ready(function() {

  $("#nama").blur(function(){
    var nama  = $("#nama").val();
    if (nama == "") {
      $(".textNama").text("Harap Isi dulu");
    }else {
      $(".textNama").text("");
    }
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

});
