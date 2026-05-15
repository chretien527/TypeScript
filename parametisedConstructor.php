<?php

//A constructor that accepts parameters

class Student {
    publi sting $name;
    public int $age;

    //parameterised constructor
    public function __constructor(string $name, int $age){
        $this->name = $name;
        $this->age = $age;
    }
}

$student = new Student("Sano",20);
echo $student->name;  //Outputs "Sano"
echo $student->age;  //Outputs 20

?>