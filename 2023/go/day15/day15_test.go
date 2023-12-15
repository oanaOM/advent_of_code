package main

import (
	"testing"
)

// TestHashAlgo calls HashAlgo with an array of characters, return the value of the HashAlgo.
func TestHashAlgo(t *testing.T) {
	want := 200
	hash := HashAlgo([]string{"H"})
	if hash != want {
		t.Fatalf(`HashCharacter("H") = %v, want match for %#v`, hash, t)
	}
}
