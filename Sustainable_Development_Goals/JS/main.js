/* jshint esversion: 6 */

import { targetDescription } from "./sub.js";

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const SDG__URL =
  "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true&goal&code&targets";
fetch(SDG__URL)
  .then((response) => {
    return response.json();
  })
  .then((data) =>
    data.map((goal) => {
      let goals__li = createNode("li"),
        goals__span = createNode("span"),
        goals__button = createNode("button");

      goals__li.innerHTML = `${goal.title}`;
      goals__span.innerHTML = `${goal.description}`;
      goals__button.innerHTML = "Learn More";

      append(goals__li, goals__span);
      append(goals__li, goals__button);
      const newLocal = append(goals__ul, goals__li);

      const goalTargets = goal.targets;
      goals__button.addEventListener("click", () => {
        targetDescription(goalTargets);
      });
    })
  )

  .catch((error) => {
    console.log(error);
  });
