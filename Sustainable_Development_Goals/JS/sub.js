/* jshint esversion: 6 */

export { targetDescription };

function targetDescription(goalTargets) {
  function append(parent, el) {
    return parent.appendChild(el);
  }

  goalTargets.forEach((goal) => {
    document.getElementById("goals__container").style.display = "flex";

    const targetList = document.createElement("p");

    targetList.innerHTML = `${goal.code}. ${goal.description}.`;
    append(goals__container, targetList);
  });
}
