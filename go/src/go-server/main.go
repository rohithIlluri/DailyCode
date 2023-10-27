package main

import "fmt"

func main() {

	mybill := newBill("anki's bill")

	fmt.Println(mybill)

}

// func updateName(x *string) {
// 	*x = "wedge"
// }

// 	// name := "tifa"
// 	// //updateName(name)
// 	// fmt.Println("memory location of name is : ", &name)

// 	// m := &name
// 	// // fmt.Println("memory location of m is : ", m)
// 	// // fmt.Println("value at memory address:", *m)
// 	// // fmt.Println("name is ", name)
// 	// fmt.Println(name)
// 	// updateName(m)
// 	// fmt.Println(name)

// }

// func updateName(x string) string {

// 	x = "wedge"
// 	return x
// }

// func updateMenu(y map[string]float64) {
// 	y["coffee"] = 2.99
// }

// func main() {

// 	name := "mick"

// 	name = updateName(name)
// 	fmt.Println("The value of the variable is: ", name) // This will print mick, not wedge as expected

// 	menu := map[string]float64{
// 		"soup":           4.99,
// 		"pie":            7.99,
// 		"salad":          6.99,
// 		"toffee pudding": 3.55,
// 	}

// 	updateMenu(menu)
// 	fmt.Println(menu)

// 	fmt.Println(menu)
// 	fmt.Println(menu["pie"])

// 	//looping maps
// 	for k, v := range menu {
// 		fmt.Println(k, "-", v)
// 	}

// 	//ints as key type
// 	phonebook := map[int]string{
// 		1234567890: "alice",
// 		987654321:  "bob",
// 	}

// 	fmt.Println(phonebook)
// 	fmt.Println(phonebook[1234567890])

// 	phonebook[987654321] = "mask"
// 	fmt.Println(phonebook)

// 	phonebook[1234567890] = "kaske"
// 	fmt.Println(phonebook)

// 	sayHello("wednesday")

// 	for _, v := range points {
// 		fmt.Println(v)
// 	}

// 	showScore()
// }

// // const (
// // 	myAge    = 30
// // 	myName   = "Alice"
// // 	constVal = 42
// // )

// // func getInitials(n string) (string, string) {
// // 	s := strings.ToUpper(n)
// // 	names := strings.Split(s, " ")

// // 	var initials []string
// // 	for _, v := range names {
// // 		initials = append(initials, v[:1])
// // 	}

// // 	if len(initials) > 1 {
// // 		return initials[0], initials[1]
// // 	}

// // 	return initials[0], "_"
// // }

// // func sayGreeting(n string) {
// // 	fmt.Printf("Good morning, %v!\n", n)
// // }

// // func sayBye(n string) {
// // 	fmt.Printf("Goodbye, %v!\n", n)
// // }

// // func cycleNames(n []string, f func(string)) {
// // 	for _, v := range n {
// // 		f(v)
// // 	}
// // }

// func circleArea(r float64) float64 {
// 	return math.Pi * r * r
// }

// func main() {

// 	// New variables and string values
// 	age := myAge
// 	name := myName

// 	// Print
// 	fmt.Print("Hello,  ")
// 	fmt.Print("World!\n")
// 	fmt.Print("newline\n")

// 	fmt.Println("hello ", name, "!")
// 	fmt.Println("goodbye ", name, "!")

// 	fmt.Println("my age is ", age, "and my name is ", name)

// 	// Printf (formatted strings)
// 	fmt.Printf("my age is %v and my name is %v\n", age, name)
// 	fmt.Printf("my age is %q and my name is %q\n", age, name)
// 	fmt.Printf("age is of type %T\n", age)
// 	fmt.Printf("constVal is %d\n", constVal)

// 	// Sprintf (save formatted strings)
// 	var str1 = fmt.Sprintf("saved_string_format")
// 	fmt.Println("the saved string is: ", str1)

// 	// Strings
// 	var nameOne string = "Luigi"
// 	var nameTwo string = "Peach"
// 	fmt.Println(nameOne, nameTwo)

// 	nameOne = "Yoshi"
// 	nameTwo = "Bowser"
// 	fmt.Println(nameOne, nameTwo)

// 	nameThree := "Mario"
// 	fmt.Println(nameThree)

// 	// Ints
// 	var ageOne1 int = 28
// 	var ageTwo2 = 33
// 	ageThree := 37
// 	fmt.Println(ageOne1, ageTwo2, ageThree)

// 	// Bits & memory
// 	var numOne int8 = 25
// 	var numTwo int8 = -128
// 	var numThree uint16 = 256

// 	fmt.Println(numOne, numTwo, numThree)

// 	// Float64
// 	var scoreOne1 float64 = 324.34
// 	var scoreTWO float64 = 8888888828273738837.7
// 	scoreThree3 := 32.5
// 	fmt.Println(scoreOne1, scoreTWO, scoreThree3)

// 	// Print type
// 	fmt.Printf("scoreOne is of type %T\n", scoreOne1)
// 	fmt.Printf("scoreTwo is of type %T\n", scoreTWO)
// 	fmt.Printf("scoreThree is of type %T\n", scoreThree3)

// 	// String variables
// 	var nameOne1 string = "Ella"
// 	var nameTwo2 = "Oliver"
// 	var nameThree3 string

// 	fmt.Print(nameOne1, nameTwo2, nameThree3)

// 	nameOne = "Ava"
// 	nameThree = "Liam"

// 	fmt.Print(nameOne, nameTwo, nameThree)

// 	// The following is allowed inside functions only
// 	nameFour := "Grace"
// 	fmt.Print(nameFour)

// 	// Int variables
// 	var ageOne int = 35
// 	var ageTwo = 40
// 	ageThree3 := 45

// 	fmt.Print(ageOne, ageTwo, ageThree3)

// 	// Bits & memory
// 	// var numOne int8 = 25
// 	// var numTwo int8 = 128 // too large a number for 8-bit
// 	// var numTwo uint = -25 unsigned ints cannot be negative

// 	var scoreOne float32 = 45.75
// 	var scoreTwo float64 = 1965385877.5
// 	var scoreThree = 1.5 // inferred as float64

// 	fmt.Print(scoreOne, scoreTwo, scoreThree)

// 	// For more info see https://golang.org/ref/spec#Numeric_types
// 	age6 := 28
// 	name7 := "Olivia"

// 	// Print
// 	fmt.Print("hello, ")
// 	fmt.Print("world!\n")
// 	fmt.Print("new line\n")

// 	// Println
// 	fmt.Println("hello, ninjas!")
// 	fmt.Println("goodbye, ninjas!")
// 	fmt.Println("my age is", age6, "and my name is", name7)

// 	// Printf (formatted string), %_ = format specifier
// 	fmt.Printf("my age is %v and my name is %v\n", age6, name7) // %v = value in default format
// 	fmt.Printf("my age is %q and my name is %q\n", age6, name7) // %q = quotes
// 	fmt.Printf("age is of type %T\n", age6)                     // %T is the type
// 	fmt.Printf("you scored %f points!\n", 225.55)               // %f = float format
// 	fmt.Printf("you scored %0.1f points!\n", 225.55)            // %0.2f = float with 2 decimal points

// 	// Sprintf (save formatted strings)
// 	var str = fmt.Sprintf("my age is %v and my name is %v\n", age, name)
// 	fmt.Println("the saved string is:", str)

// 	// See more format specifiers here:
// 	// https://golang.org/pkg/fmt/

// 	// var ages [3]int = [3]int{20, 25, 30}
// 	var ages = [3]int{20, 25, 30}

// 	names := [4]string{"Yoshi", "Mario", "Peach", "Bowser"}
// 	names[1] = "Luigi"

// 	fmt.Println(ages, len(ages))
// 	fmt.Println(names, len(names))

// 	// Slices (use arrays under the hood)
// 	var scores = []int{100, 50, 60}
// 	scores[2] = 75
// 	scores = append(scores, 85)

// 	fmt.Println(scores, len(scores))

// 	// Slice ranges
// 	rangeOne := names[1:4] // Doesn't include pos 4 element
// 	rangeTwo := names[2:]  // Includes the last element
// 	rangeThree := names[:3]

// 	fmt.Println(rangeOne, rangeTwo, rangeThree)
// 	fmt.Printf("The type of rangeOne is %T\n", rangeOne)

// 	rangeOne = append(rangeOne, "Koopa")
// 	fmt.Println(rangeOne)

// 	greeting := "Hello there, friends!"

// 	fmt.Println(strings.Contains(greeting, "Hello"))
// 	fmt.Println(strings.Contains(greeting, "bye"))
// 	fmt.Println(strings.ReplaceAll(greeting, "Hello", "Hi"))
// 	fmt.Println(strings.ToUpper(greeting))
// 	fmt.Println(strings.Index(greeting, "ll"))
// 	fmt.Println(strings.Split(greeting, " "))

// 	// The original value is unchanged
// 	fmt.Println("Original string value =", greeting)

// 	ages1 := []int{50, 25, 35, 30, 75, 65, 55, 28}

// 	sort.Ints(ages1)
// 	fmt.Println(ages)

// 	index := sort.SearchInts(ages1, 30)
// 	fmt.Println(index)

// 	names1 := []string{"Yoshi", "Mario", "Peach", "Bowser", "Luigi"}

// 	sort.Strings(names1)
// 	fmt.Println(names1)

// 	fmt.Println(sort.SearchStrings(names1, "Bowser"))

// 	x := 0
// 	for x < 7 {
// 		fmt.Println("Value of x is:", x)
// 		x++ // Infinite loop without this
// 	}

// 	for i := 0; i < 7; i++ {
// 		fmt.Println("Value of i is:", i)
// 	}

// 	names2 := []string{"Mario", "Luigi", "Yoshi", "Peach"}

// 	for i := 0; i < len(names2); i++ {
// 		fmt.Println(names2[i])
// 	}

// 	for index, val := range names2 {
// 		fmt.Printf("The value at pos %v is %v\n", index, val)
// 		val = "New string"
// 	}

// 	for _, val := range names2 {
// 		fmt.Print(val, ",")
// 		val = "New string"
// 	}

// 	// Changing val in a loop does not mutate the original slice
// 	fmt.Println(names2)

// 	age3 := 45

// 	fmt.Println(age3 <= 55)
// 	fmt.Println(age3 >= 55)
// 	fmt.Println(age3 == 45)
// 	fmt.Println(age3 != 55)

// 	if age3 < 35 {
// 		fmt.Println("Age is less than 35")
// 	} else if age3 < 45 {
// 		fmt.Println("Age is less than 45")
// 	} else {
// 		fmt.Println("Age is not less than 45")
// 	}

// 	names4 := []string{"Yoshi", "Mario", "Peach", "Bowser", "Luigi"}

// 	for index, val := range names4 {
// 		if index == 1 {
// 			fmt.Println("Continuing at pos", index)
// 			continue
// 		}
// 		if index > 2 {
// 			fmt.Println("Breaking at pos", index)
// 			break
// 		}
// 		fmt.Printf("The value at pos %v is %v\n", index, val)
// 	}

// 	sayGreeting("Mario")
// 	sayGreeting("Luigi")
// 	sayBye("Mario")

// 	cycleNames([]string{"Cloud", "Barret", "Tifa"}, sayGreeting)
// 	cycleNames([]string{"Cloud", "Barret", "Tifa"}, sayBye)

// 	a1 := circleArea(9.5)
// 	a2 := circleArea(14)

// 	fmt.Println(a1, a2)
// 	fmt.Printf("Circle 1 area is %0.3f & Circle 2 area is %0.3f\n", a1, a2)

// 	fn1, sn1 := getInitials("Tifa Lockhart")
// 	fmt.Println(fn1, sn1)

// 	fn2, sn2 := getInitials("Cloud Strife")
// 	fmt.Println(fn2, sn2)

// 	fn3, sn3 := getInitials("Barret")
// 	fmt.Println(fn3, sn3)
// }
