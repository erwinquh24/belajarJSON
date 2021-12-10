let content = "";
function allMenu(param) {
  content = "";
  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, async function (i, data) {
      // if (data.kategori.toLowerCase() === kategori.toLowerCase()) {
      content +=
        '<div class="col-md-4"> <div class="card mb-3"> <img src="img/menu/' +
        data.gambar +
        ' "class="card-img-top"> <div class="card-body"> <h5 class="card-title">' +
        data.nama +
        '</h5> <p class="card-text">' +
        data.deskripsi +
        '</p> <h5 class="card-title">Rp. ' +
        data.harga +
        '</h5> <a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
      // }
    });
    $("#daftar-menu").html(content);
  });
}
//wdw
allMenu();

$(".nav-link").on("click", function () {
  content = "";
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori === "All Menu") {
    allMenu();
    return;
  }
  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, async function (i, data) {
      if (data.kategori.toLowerCase() === kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"> <div class="card mb-3"> <img src="img/menu/' +
          data.gambar +
          ' "class="card-img-top"> <div class="card-body"> <h5 class="card-title">' +
          data.nama +
          '</h5> <p class="card-text">' +
          data.deskripsi +
          '</p> <h5 class="card-title">Rp. ' +
          data.harga +
          '</h5> <a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
      }
    });
    $("#daftar-menu").html(content);
  });
});
