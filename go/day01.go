package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

const inputFile = "input.txt"
const inputFile2 = "input2.txt"
const inputFile3 = "input3.txt"

func main() {

	// read the input file
	bytes, err := ioutil.ReadFile(inputFile)

	if err != nil {
		fmt.Printf("file couldn't be read %v. Got error: %v", inputFile, err)
	}

	// remove all new lines
	input := strings.Split(string(bytes), "\n")
	numbers := make(map[int]int)

	for i, number := range input {
		// convert the entry to number
		n, err := strconv.Atoi(number)

		// continue if entry is grater than 2020
		if n > 2020 {
			continue
		}

		// break if entry is negative
		if n < 0 {
			fmt.Printf("entry is negative %d", n)
			break
		}

		if err != nil {
			fmt.Printf("Failed to parse %v", err)
		}

		numbers[n] = i
	}

	// multiply 2 number which sum is 2020
	for n, i := range numbers {
		if index, ok := numbers[2020-n]; index != i && ok {
			fmt.Println("Product of the two entries that sum to 2020 is: ", n * (2020 - n))
			break
		}
	}

	// multiply 3 numbers which sum is 2020
	for n, i := range numbers {
		for m, j := range numbers {
			sumTemp := m + n

			if sumTemp > 2020 {
				continue
			}
			if index, ok := numbers[2020-sumTemp]; ok && index != i && index != j {
				fmt.Println("Product of the three entries that sum to 2020 is: ", n * m * (2020 - sumTemp))
				break
			}
		}
	}

}
