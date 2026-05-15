<?php

class ParentClass{
    public function __construct(){
        echo "Parent Constructor\n";
    }
}

class ChildClass extends ParentClass{
    public function __construct(){
        parent::__construct(); // Explicitly call parent constructor
        echo "Child constructor\n";
    }
}

$obj = new ChildClass();
//output: "Parent constructor" then "Child Constructor"

?>