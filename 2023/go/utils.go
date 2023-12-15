package utils

import "strings"

// TransposeGrid is responsible to flip the grid horizontal
func TransposeGrid(grid []string) []string {

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
