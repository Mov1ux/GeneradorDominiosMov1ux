/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generar() {
  let name = [
    "tech",
    "4weeks",
    "mov1ux",
    "array",
    "loops",
    "html",
    "python",
    "JS"
  ];
  let ext = [".com", ".es", ".info", ".org", ".dev"];

  let generateName = name[Math.floor(Math.random() * name.length)];
  let generateExt = ext[Math.floor(Math.random() * ext.length)];
  let domainName = generateName + generateExt;

  return generateName + generateExt;
}
let generateDomain = generar();
console.log("Nombre dominio:", generateDomain);
