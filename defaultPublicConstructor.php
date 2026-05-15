<?php

class Product{
    public string $title;
    public floate $price;

    publif function __construct(string $title, float $price = 9.99){
        $this->title = $title;
        $this->price = $price;
    }
}

$item = new Product("Book"); // Price defaults to 9.99
echo $item->price; // Outputs 9.99

?>