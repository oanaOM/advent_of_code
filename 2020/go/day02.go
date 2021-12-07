package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

type password struct {
	policy string
	letter string
	pass   string
}

func main() {
	bytes, err := ioutil.ReadFile("inputDay2.txt")

	if err != nil {
		fmt.Printf("file couldn't be read. Got %v", err)
	}

	input := strings.Split(string(bytes), "\n")

	var validPasswords, validStrongPasswords []string
	var minInt, maxInt int

	for _, line := range input {
		min := strings.Split(strings.Split(line, " ")[0], "-")[0]
		minInt, err = strconv.Atoi(min)
		if err != nil {
			fmt.Errorf("%v", err)
		}
		max := strings.Split(strings.Split(line, " ")[0], "-")[1]
		maxInt, err = strconv.Atoi(max)
		if err != nil {
			fmt.Errorf("%v", err)
		}
		letter := strings.Split(strings.Split(line, " ")[1], ":")[0]
		password := strings.Split(line, " ")[2]

		rPassword := []rune(password)
		letterCounter := 0

		// part I
		for _, l := range rPassword {

			if l == []rune(letter)[0] {
				letterCounter++
			}
		}

		if letterCounter >= minInt && letterCounter <= maxInt {
			validPasswords = append(validPasswords, line)
		}

		// part II
		if string(rPassword[minInt-1]) == letter && string(rPassword[maxInt-1]) != letter || string(rPassword[minInt-1]) != letter && string(rPassword[maxInt-1]) == letter {
			validStrongPasswords = append(validStrongPasswords, line)
		}

	}

	fmt.Printf("%v\n", len(validPasswords))
	fmt.Printf("%v\n", len(validStrongPasswords))
}
