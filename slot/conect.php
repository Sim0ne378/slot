<?php 
$nume=$_POST["nume"];
$high=filter_input(INPUT_POST,"high",FILTER_VALIDATE_INT);


$host="http://localhost/phpmyadmin/";
$dbname="pacanele";
$username="root";
$password="";
$conn=mysqli_connect(hostname:$host,database:$dbname,username:$username,password:$password);
if(mysqli_connect_errno()){
    die("Connection error:". mysqli_connect_error());
}
$sql="INSERT INTO scoruri (nume,credite)
VALUES(?,?)";
$stmt=mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}
mysqli_stmt_bind_param($stmt,"si",$nume,$high);
mysqli_stmt_execute($stmt);
echo"Bravo !";