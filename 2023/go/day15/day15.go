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

func main() {

	// read the input file
	bytes, err := os.ReadFile("input.txt")
	check(err)
	initialSequence := strings.Split(string(bytes), ",")

	boxes := make(map[string][]string)

	i := 0
	for i < len(initialSequence) {
		seq := initialSequence[i]

		var label, operation, focus string
		if strings.Contains(seq, "-") {
			label = strings.Split(seq, "-")[0]
			operation = "-"
		} else {
			label = strings.Split(seq, "=")[0]
			focus = strings.Split(seq, "=")[1]
			operation = "="
		}
		labelHashAlgo := HashAlgo(strings.Split(label, ""))

		// check if box with number labelHashAlgo exists
		// if not, create it
		// if yes, add the new label with the focusing power
		boxLabel := fmt.Sprintf("Box %v", labelHashAlgo)
		lensFocus := fmt.Sprintf("%s %s", label, focus)

		val, ok := boxes[boxLabel]

		if !ok {
			val = append(val, lensFocus)
			boxes[boxLabel] = val
		} else {
			if operation == "=" {

				// iterate through the boxes
				for boxKey, vb := range boxes {

					if boxKey == boxLabel {

						lensHasBeenUpdate := false

						for i, v := range vb {
							vLabel := strings.Split(v, " ")[0]

							if vLabel == label {

								v = lensFocus
								vb[i] = v
								lensHasBeenUpdate = true
							}

						}
						if !lensHasBeenUpdate {
							vb = append(vb, lensFocus)
						}
						//
						boxes[boxLabel] = vb

					}
				}
			}

			if operation == "-" {
				for boxKey, v := range boxes {

					for i := 0; i < len(v); i++ {
						if strings.Split(v[i], " ")[0] == label {

							copy(v[i:], v[i+1:]) // Shift a[i+1:] left one index.
							v[len(v)-1] = ""     // Erase last element (write zero value).
							v = v[:len(v)-1]

							boxes[boxKey] = v
						}
					}
				}
			}

		}
		i++
	}

	sum := 0
	for k, v := range boxes {
		boxNo := strings.Split(k, " ")[1]

		boxNoInt, err := strconv.Atoi(boxNo)

		if err != nil {
			fmt.Println("oops, error when getting box number", err)
			fmt.Println("value", boxNo)
		}

		if len(v) > 0 {

			for i := 0; i < len(v); i++ {
				focus := strings.Split(v[i], " ")[1]
				focusInt, err := strconv.Atoi(focus)

				if err != nil {
					fmt.Println("oops, error")
				}
				calc := (boxNoInt + 1) * (i + 1) * focusInt
				sum += calc
			}
		}
	}

	fmt.Println("Part two:", sum)

}

func partOne(s []string) int {
	sum := 0
	for _, v := range s {
		sum += HashAlgo(strings.Split(v, ""))
	}

	return sum
}

// HashAlgo takes an array of letters and returns the Hash Algorithm value of that array
func HashAlgo(input []string) int {
	sum := 0
	i := 0
	for i < len(input) {
		c := input[i]
		cA := int([]byte(c)[0])
		sum += cA
		sum = (sum * 17)
		sum = (sum % 256)
		i++
	}

	return sum
}
