function searchMoview(params) {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '1efae51f',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == 'True') {
                let movies = result.Search;
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year+`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID+`">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                      <h1 class="text-center">` + result.Error + `</h1>
                    </div>
            `)
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMoview();
});

$('#search-input').on('keyup', function name(params) {
    if (params.keyCode === 13) {
        searchMoview();
    }
});

$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '1efae51f',
            'i': $(this).data('id')
        },
        success: function name(params) {
            if (params.Response === 'True') {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="`+params.Poster +`" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+params.Title+`</h3></li>
                                    <li class="list-group-item">Released : `+params.Released+`</li>
                                    <li class="list-group-item">Genre : `+params.Genre+`</li>
                                    <li class="list-group-item">Director : `+params.Director+`</li>
                                    <li class="list-group-item">Actors : `+params.Actors+`</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    })
});