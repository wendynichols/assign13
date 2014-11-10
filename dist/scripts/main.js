(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albums'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li> "
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"artist","hash":{},"data":data}) : helper)))
    + " </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.albums : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
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
