"use strict";
class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort((a, b) => a - b)[0];
	}
}
