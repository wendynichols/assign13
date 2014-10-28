  var library = {
  albums : [
    { album: '1989', artist: 'Taylor Swift' },
    { album: 'Montevallo', artist: 'Sam Hunt'},
    { album: 'Rise', artist: 'Trip Lee'},
    { album: 'Black Veil Brides', artist: 'Black Veil Brides'},
    { album: 'Forever Together', artist: 'Emblem3'}
    ]
  };

    // Grabbing our template string
  var template = $('#album').html();

    // Creating our handlebars function
  var rendered = Handlebars.templates['albums'];


    // Append to my album
  $('#albums').append( rendered(library) );
