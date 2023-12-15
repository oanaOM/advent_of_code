package main

import (
	"fmt"
	"os"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

// TODO: FINISH THIS - please look somewhere else
func main() {

	// read the input file
	bytes, err := os.ReadFile("input.txt")
	check(err)

	rows := strings.Split(string(bytes), "\n")

	// vt := transposeGrid(rows)

	// fmt.Println(vt)

	verticalLineMatch := findVerticalReflection(rows)

	fmt.Println(verticalLineMatch)

}

func transposeGrid(grid []string) []string {

	var verticalTranspose []string
	for i := 0; i < len(grid[0]); i++ {
		var newRow []string
		for j := 0; j < len(grid); j++ {
			newRow = append(newRow, string(grid[j][i]))
		}
		verticalTranspose = append(verticalTranspose, strings.Join(newRow, ""))
	}

	return verticalTranspose
}

func findVerticalReflection(gridString []string) int {

	counter := 0
	middle := len(gridString) / 2
	start := 0
	// end := len(gridString)
	for start < middle {
		range1Low := start
		range1High := middle + start
		range2Low := middle + start
		range2High := middle + range2Low

		if range2High <= len(gridString) {
			fmt.Println("range1Low: ", range1Low, range1High, strings.Join(gridString[range1Low:range1High], ""))
			fmt.Println("range2Low: ", range2Low, range2High, strings.Join(gridString[range2Low:range2High], ""))
			// 	fmt.Println("---------------")

			// 	// -1 means a<b
			if strings.Compare(strings.Join(gridString[range1Low:range1High], ""), strings.Join(gridString[range2Low:range2High], "")) != 0 {
				fmt.Println("--------------- they DON'T match")
				start++
			} else {
				fmt.Println("--------------- they match")
				counter++
			}
			fmt.Println("---------------")
		} else {
			break
		}
	}

	// }
	fmt.Println("---------------", counter)
	// if counter > 0 {
	// 	return counter/2 + 1
	// }
	return 0

}
