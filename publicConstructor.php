<?php

class User{
    public string $name;
    public int $age;

    public function __construct(string $name, int $age){
        $this->name = $name;
        $this->age = $age;
    }
}

$user = new User("Sano", 25); // works anywhere
echo $user->name; //outputs "Sano"

?>