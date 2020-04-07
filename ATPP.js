<script type="text/javascript">

function decode_url()
  {
 setTimeout("generate_decode_url(), 10");
}

function generate_decode_url() {
  var link = document.getElementById("safelink").value;
  var url_parts = link.split("?")[1];
  var params = url_parts.split("&");
  var target_url = "Error:  couldn't find target URL.";

  {
  alert("Please input a Value");
  return false;
  }
  else
  {
  alert('Code has accepted : you can try another');
  return true;

  for (x = 0; x < params.length; x++) {
    namval = params[x].split("=");
    if (namval[0] == "url") target_url = namval[1];
  }
  decode_url = decodeURIComponent(target_url);




}

function clear() {
  location.reload();
}
function target_url() {
    alert(location.url_target=decode_url);
    prompt("Copy to clipboard: Ctrl+C, Enter", location.url_target=decode_url);
}

</script>
