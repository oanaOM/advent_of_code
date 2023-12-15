package main

import (
	"fmt"
	"os"
	"strconv"
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
	var count int

	inputs := strings.Split(string(bytes), "\n")
	for i := 0; i < len(inputs); i++ {
		input := strings.Split(inputs[i], " ")
		springs := input[0]
		groups := strings.Split(input[1], ",")

		groupsInt := make([]int, len(groups))
		for idx, i := range groups {
			j, err := strconv.Atoi(i)
			if err != nil {
				panic(err)
			}
			groupsInt[idx] = j
		}

		var springB strings.Builder
		for i := 0; i < 5; i++ {
			if i == 0 {
				springB.WriteString(springs)
			} else {
				springB.WriteString("?" + springs)
			}
		}

		var groupB []int
		for i := 0; i < 5; i++ {
			groupB = append(groupB, groupsInt...)
		}

		count += countArrangements(springB.String(), groupB)
		// fmt.Println("---springs: ", springB.String())
		// fmt.Println("---groups: ", groupB)
	}
	// a := []int{3, 2, 1}

	fmt.Print("--count", count)
}

func countArrangements(spring string, group []int) int {

	springArr := strings.Split(spring, "")

	if len(spring) == 0 {
		if len(group) == 0 {
			// fmt.Println("--")
			return 1
		}
		return 0
	}

	if len(group) == 0 {
		if strings.Contains(spring, "#") {
			return 0
		}
		// fmt.Println("???")
		return 1
	}

	sum := 0
	if springArr[0] == "." || springArr[0] == "?" {
		sum += countArrangements(spring[1:], group)
	}

	if springArr[0] == "#" || springArr[0] == "?" {

		if group[0] <= len(spring) &&
			!strings.Contains(spring[0:group[0]], ".") && (group[0] == len(spring) || springArr[group[0]] != "#") {

			if group[0] == len(spring) {
				sum += countArrangements("", group[1:])
			} else {
				sum += countArrangements(spring[(group[0]+1):], group[1:])
			}
		}

	}

	// fmt.Println("---SUM", sum)

	return sum
}
