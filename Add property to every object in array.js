"use strict";
function addSome(questions) {
	questions.forEach((elem) => {
		elem.usersAnswer = null;
	});
	return questions;
}
addSome(questions);
