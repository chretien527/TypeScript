<?php

define("DB_HOST","localhost");
define("DB_USER",'root');
define("DB_PASS","2010");
define("DB_NAME","user_app");

$conn = new mysqli(DB_HOST,DB_NAME,DB_PASS);

if(!$conn->connect_error){
    die("Connection Error".$conn->connect_error);
}

$conn->query("CREATE DATABASE IF NOT EXISTS ".DB_NAME);
$conn->select_db(DB_NAME);

$conn->query("
 
   CREATE TABLE user(

       id INT PRIMARY KEY AUTO INCREMENT,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL UNIQUE,
       gender ENUM("male","female","other") NOT NULL,
       password VARCHAR(150) NOT NULL,
   )
");

?>