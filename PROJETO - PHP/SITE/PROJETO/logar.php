<?php
session_start();
$conexao = mysqli_connect("localhost","root","", "");

$email=$_POST["email"];
$senha=$_POST["senha"];

$sql = "SELECT * FROM usuarios WHERE email='$email' AND senha='$senha'";

$result = mysqli_query($conexao, $sql);

if(mysqli_num_rows($result)==1){
    $_SESSION['logado']= true;
    header('Location: index.html');
} else {
    header('Location:');
}
