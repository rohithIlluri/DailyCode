package main

import "fmt"

func main() {

	age := 35
	name := "Mike"

	//Print
	fmt.Print("Hello,  ")
	fmt.Print("World! \n ")
	fmt.Print("newline \n")

	fmt.Println("hello mike!")
	fmt.Println("goodbye mike!")

	fmt.Println("my age is ", age, "and my name is ", name)

	//Printf (formatted strings)
	fmt.Printf("my age is %v and my name is %v \n", age, name)
	fmt.Printf("my age is %q and my name is %q \n", age, name)
	fmt.Printf("age is of type %T \n", age)
	fmt.Printf("you scored %.1f points !\n", 255.22)

	//Sprintf (save formatted strings)
	var str = fmt.Sprintf("saved_string_format")
	fmt.Println("the saved string is: ", str)

	//Strings

	var nameOne string = "punk"
	var nameTwo string = "luigi"
	fmt.Println(nameOne, nameTwo)

	nameOne = "peach"
	nameTwo = "bowser"
	fmt.Println(nameOne, nameTwo)

	nameThree := "batman"
	fmt.Println(nameThree)

	//ints
	var ageOne int = 25

	var ageTwo = 30

	ageThree := 40

	fmt.Println(ageOne, ageTwo, ageThree)

	//bits & memory
	// var numOne int8 = 25
	// var numTwo int8 = -128
	// var numThree uint16 = 256

	//-128 127

	//float64
	var scoreOne float64 = 324.34
	var scoreTWO float64 = 8888888828273738837.7
	scoreThree := 32
	fmt.Println(scoreOne, scoreTWO, scoreThree)

}
