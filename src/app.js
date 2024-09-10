/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", function() {
    generateRandom();
  });

  generateOwn();
};

let pronoun = ["", "the", , "your", "our"];
let adj = [
  "",
  "old",
  "big",
  "fat",
  "microscopic",
  "elegant",
  "happy",
  "lazy",
  "colossal"
];
let noun = [
  "",
  "cat",
  "grandpa",
  "titan",
  "car",
  "computer",
  "cockroach",
  "duck",
  "rat"
];
let domain = ["", ".com", ".es", ".us", ".net", ".org"];

const openSelect = "<select>";
const closingSelect = "</select>";

const generateOwn = () => {
  let nameOptions = openSelect;

  for (let i in pronoun) {
    nameOptions += "<option>" + pronoun[i] + "</option>";
  }
  nameOptions += closingSelect + openSelect;

  for (let x in adj) {
    nameOptions += "<option>" + adj[x] + "</option>";
  }
  nameOptions += closingSelect + openSelect;

  for (let y in noun) {
    nameOptions += "<option>" + noun[y] + "</option>";
  }
  nameOptions += closingSelect + openSelect;

  for (let z in domain) {
    nameOptions += "<option>" + domain[z] + "</option>";
  }
  nameOptions += closingSelect;

  document.querySelector("#ownName").innerHTML = nameOptions;
};

const generateRandom = () => {
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * (adj.length - 1)) + 1;
  let nounIndex = Math.floor(Math.random() * (noun.length - 1)) + 1;
  let domainIndex = Math.floor(Math.random() * (domain.length - 1)) + 1;

  let name =
    pronoun[pronounIndex] +
    adj[adjIndex] +
    noun[nounIndex] +
    domain[domainIndex];
  document.querySelector("#randomName").innerHTML = name;
};
