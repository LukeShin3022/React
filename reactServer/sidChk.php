<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    if($_SERVER['REQUEST_METHOD']=="POST" && isset($_POST['sid'])){
        session_id($_POST['sid']);
        session_start();
        $user = $_SESSION['user'];
        // echo $user['firstName']." Welcome";
        echo json_encode($user); 
    }
?>