package main

import (
	"fmt"
)

var score = 99.1

var points = []int{20, 12, 222, 33, 4, 56}

func sayHello(n string) {
	fmt.Println("Hello ", n)
}

func showScore() {
	fmt.Println("you scored this many points: ", score)
}
