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
	var rowsInput [][]string
	rows := strings.Split(string(bytes), "\n")

	for _, row := range rows {
		rowsInput = append(rowsInput, strings.Split(row, ""))
	}

	copyPlatform := copyMatrix(rowsInput)

	for i := 0; i < len(copyPlatform); i++ {
		for j := 0; j < len(copyPlatform[i]); j++ {
			for z := i - 1; z >= 0; z-- {
				if string(copyPlatform[z][j]) == "." && string(copyPlatform[z+1][j]) == "O" {
					copyPlatform[z][j] = "O"
					copyPlatform[z+1][j] = "."
				}
			}
		}
	}

	// fmt.Println("-----", copyPlatform)

	sum := 0
	for z := 0; z < len(copyPlatform); z++ {
		for q := 0; q < len(copyPlatform[z]); q++ {
			if copyPlatform[z][q] == "O" {
				sum += len(copyPlatform) - z
			}
		}
	}

	fmt.Println("SUM: ", sum)

}

func copyMatrix(rows [][]string) [][]string {
	matrix := make([][]string, len(rows))
	// Initialize the matrix with zero values
	for i, row := range rows {
		matrix[i] = append([]string(nil), row...)
	}
	return matrix
}
