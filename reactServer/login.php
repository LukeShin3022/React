<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    if($_SERVER['REQUEST_METHOD']=="POST"){
        session_start();
        include './config.php';
        $username = $_POST['uName'];
        $pass = $_POST['pass'];
        $IP = $_POST['gip'];
        $dbCon = new mysqli($dbServername,$dbUsername,$dbPass,$dbname);
        if($dbCon->connect_error){
            echo "DB connection error".$dbCon->connect_error;
        }else{
            $selectCmd = "SELECT * FROM `user_tb` WHERE email='$username';";
            // $updateCmd ="UPDATE `user_tb` SET lastLogin = ''"
            $result = $dbCon->query($selectCmd);
            if($result->num_rows > 0){
                $user = $result->fetch_assoc();
                $dbCon->close();
                $hashedPass = $user['pass'];
                if(password_verify($pass,$hashedPass)){
                    $user['gip'] = $IP;
                    $_SESSION['user']=$user;
                    $user['sid']=session_id();
                    echo json_encode($user);
                }else{
                    header("status-Text: username/password wrong",true,401);
                    echo "username/pass is wrong";
                }
            }else{
                $dbCon->close();
                header("status-Text: username/password wrong",true,401);
                echo "username/pass is wrong";
            }
        }
    }else{
        header("status-Text: bad request",true,400);
    }

?>