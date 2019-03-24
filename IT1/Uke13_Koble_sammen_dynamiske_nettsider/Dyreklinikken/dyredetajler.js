// hente URL parameter. Kopier inn denne koden.
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);
