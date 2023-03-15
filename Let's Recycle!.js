"use strict";
function recycle(array) {
	const bins = ["paper", "glass", "organic", "plastic"];
	const output = [[], [], [], []];
	bins.forEach((bin, index) => {
		array.forEach((item) => {
			if (bin == item.material || bin == item.secondMaterial) {
				output[index].push(item.type);
			}
		});
	});
	return output;
}
recycle([
	{ type: "rotten apples", material: "organic" },
	{
		type: "out of date yogurt",
		material: "organic",
		secondMaterial: "plastic",
	},
	{ type: "wine bottle", material: "glass", secondMaterial: "paper" },
	{ type: "amazon box", material: "paper" },
	{ type: "beer bottle", material: "glass", secondMaterial: "paper" },
]);
