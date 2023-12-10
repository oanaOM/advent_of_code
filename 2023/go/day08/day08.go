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

type Tree struct {
	left, right string
}

func main() {

	// read the input file
	bytes, err := os.ReadFile("input.txt")
	check(err)

	input := strings.Split(string(bytes), "\n\n")
	instructions := input[0]
	nodes := strings.Split(input[1], "\n")

	nodesTree := make(map[string]Tree)

	// var counter int
	for i := 0; i < len(nodes); i++ {
		var node = strings.Split(nodes[i], " = ")[0]
		var instructions = strings.Split(nodes[i], " = ")[1]
		var left = strings.Split(instructions, ", ")[0]
		var right = strings.Split(instructions, ", ")[1]

		nodesTree[node] = Tree{left: strings.ReplaceAll(left, "(", ""), right: strings.ReplaceAll(right, ")", "")}

	}
	// map[AAA: FBA: PRA: PTA: PVA: XLA:]
	// fmt.Println(nodesTree)
	instructionsArray := strings.Split(instructions, "")

	startEndMap := make(map[string]string)

	for k := range nodesTree {
		if strings.HasSuffix(k, "A") {
			startEndMap[k] = ""

		}
	}

	// 44396 too low
	fmt.Println(startEndMap)

	// GetSteps("AAA", instructionsArray, nodesTree)
	// GetSteps("FBA", instructionsArray, nodesTree)
	// GetSteps("PRA", instructionsArray, nodesTree)
	// GetSteps("PVA", instructionsArray, nodesTree)
	// GetSteps("XLA", instructionsArray, nodesTree)
	// -----
	// 12082 = 1124 - 132,902
	// 13206 = 1686
	// 14892 = 1686
	// 19950 = 5058

	// 22198 = 2248

	GetSteps("11A", instructionsArray, nodesTree)
	GetSteps("11A", instructionsArray, nodesTree)
	GetSteps("22A", instructionsArray, nodesTree)

}

func GetSteps(start string, instructions []string, nodes map[string]Tree) {
	steps := 0
	results := make(map[string]string)
	// for k := range startEndMap {
	// fmt.Println("--start again: ", startEndMap)
	fmt.Println("start: ", start)
	for i := 0; i < len(instructions); i++ {
		// if steps == 100 {
		// 	fmt.Println("!!! step is 3")
		// 	break
		// }
		var nextNode string
		if instructions[i] == "L" {
			nextNode = nodes[start].left
		} else {
			nextNode = nodes[start].right
		}

		// fmt.Println("--- instruction: ", instructions[i], "--start", start, "-- nextNode", nextNode)

		if strings.HasSuffix(nextNode, "Z") {
			// v = nextNode
			// fmt.Println("--found Z, the start now is: ", start)
			// ends = append(ends, v)
			// fmt.Println(">>>FOUND Z: ")
			// start = k
			results[start] = nextNode
			break
		} else {
			instructions = append(instructions, instructions[i])
			// fmt.Println("Not Z")
			start = nextNode
		}

		// fmt.Println("--startEndMap: ", startEndMap, k)

		steps++
		// fmt.Println("--results: ", results, len(results))

	}

	// fmt.Println("---------------------")
	// fmt.Println("--ends: ", results, len(results))
	// }
	fmt.Println("--steps", steps)

}
