<?php

class Car {
    public string $brand;

    public function __construct(){
        $this->brand = 'Toyota'; //Default value
    }
}

$car = new Car();
echo $car->brand; //Outputs "Toyota"

?>