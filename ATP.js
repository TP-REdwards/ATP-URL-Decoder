function decode_url()
  {
 setTimeout("my_decoded_url(), 30");
}

function my_decoded_url() {
  var link = document.getElementById("safelink").value;
  var url_parts = link.split("?")[1];
  var params = url_parts.split("&");
  var target_url = "Error:  couldn't find target URL.";

  for (x = 0; x < params.length; x++) {
    namval = params[x].split("=");
    if (namval[0] == "url") target_url = namval[1];
    else if (false) {
      aler("Please enter a valid SafeLinks");
    }
  }
  decode_url = decodeURIComponent(target_url);

}

function clear() {
  location.reload();
}
function target_url() {
    alert(location.url_target=decode_url);
    prompt("Copy to clipboard: Ctrl+C, Enter", location.url_target=decode_url);
    location.reload();
}
