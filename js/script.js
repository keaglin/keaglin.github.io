console.log("hello world")

var skillsEl = document.querySelector('.collapsible.expandable');
var skillsInst = M.Collapsible.init(skillsEl, {
  accordion: false
});

var triviaEl = document.querySelector('.collapsible.trivia');
var triviaInst = M.Collapsible.init(triviaEl, {
  accordion: true
});