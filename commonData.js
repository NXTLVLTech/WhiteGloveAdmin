var baseUrl="http://admin.whiteglove.us/";
var API_KEY="AIzaSyCzCIQMlJ3t06D-5YgyXGaizk-Css-f_m0";	
var AUTH_DOMAIN="whiteglove-57e46.firebaseapp.com";	
var DATABASE_URL="https://whiteglove-57e46.firebaseio.com";
var PROJECT_ID="whiteglove-57e46";	
var MESSAGE_SENDER_ID="459963573366";	
var STORAGE_BUCKET="gs://whiteglove-57e46.appspot.com";
var TITLE="title";
var YOUTUBE="youtubeUrl";
var TEXT="text";
var TIMESTAMP="timestamp";
var IMAGEURL="imageUrl";


var config = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: DATABASE_URL,
	projectId: PROJECT_ID,
	messagingSenderId: MESSAGE_SENDER_ID,
	storageBucket: STORAGE_BUCKET
};


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            
				return c.substring(name.length, c.length);
		   
        }
    }
}

function logout(){
	document.cookie = "username=expire";
	var cokie=getCookie('username');
	window.location.href="./login.php";
	return false;
}

function setEmail(){
document.getElementById('emailid').innerHTML="Hello"+getCookie('email');

}
	