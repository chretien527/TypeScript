<?php

class Point {
    public function __constructor(
        public int $x,
        public int $y = 0
    ){}
}

$p = new Point(5,10);
echo $p->x; //5
echo $p->y; //10

?>