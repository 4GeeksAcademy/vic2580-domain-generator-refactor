/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", function() {
    generateName();
  });
};

const generateName = () => {
  let pronoun = ["the", "your", "", "our"];
  let adj = [
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
    "cat",
    "grandpa",
    "titan",
    "car",
    "computer",
    "cockroach",
    "duck",
    "rat"
  ];
  let domain = [".com", ".es", ".us", ".net", ".org"];

  console.log("Pronouns:");
  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[i]);
  }

  console.log("Adjectives:");
  for (let i = 0; i < adj.length; i++) {
    console.log(adj[i]);
  }

  console.log("Nouns:");
  for (let i = 0; i < noun.length; i++) {
    console.log(noun[i]);
  }

  console.log("Domains:");
  for (let i = 0; i < domain.length; i++) {
    console.log(domain[i]);
  }

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domainIndex = Math.floor(Math.random() * domain.length);

  let name =
    pronoun[pronounIndex] +
    adj[adjIndex] +
    noun[nounIndex] +
    domain[domainIndex];
  document.querySelector("#domainName").innerHTML = name;
};
