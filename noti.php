<?php 

$token= $_POST['token'];
$title= $_POST['title'];
$body= $_POST['body'];

$url = "https://fcm.googleapis.com/fcm/send";
$serverKey = 'AIzaSyC4-D8tm_oCPXc3B8AfQyqN8sVidx_RpOo';
//$title = "Title";
//$body = "Body of the message";
//$notification = array('title' =>$title , 'text' => $body, 'sound' => 'default', 'badge' => '1');
$notification = array('title' =>$title , 'text' => $body);
$arrayToSend = array('to' => $token, 'notification' => $notification,'priority'=>'high');
$json = json_encode($arrayToSend);
$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'Authorization: key='. $serverKey;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST,

"POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
//Send the request
$response = curl_exec($ch);
//Close request
if ($response === FALSE) {
die('FCM Send Error: ' . curl_error($ch));
}
curl_close($ch);

?>