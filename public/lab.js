/*const Name = document.getElementById("name");
const Email = document.getElementById("email");

Name.addEventListener("onClick", CorrectName);
Email.addEventListener("onClick", CorrectEmail);

function CorrectName() {
  let s = "";
  const x = document.getElementsByName("nameArea");
  if (x == "") s += "Ім'я не вказане";
  // todo: read about prototype methods (or if your bold enought about regex)
  else if ([A - Za - z].exec(x)) s += "Некоректні символи" + " ";
  else s += "Ім'я коректне";
  document.getElementsByName("resultName").firstChild.nodeValue = s;
}
function CorrectEmail() {
  // todo: read about html5 type=email
  let s = "";
  const x = document.getElementsByName("emailArea");
  if (x == "") s += "Email не вказаний";
  else if (x.indexOf("@", 0) == -1) s += "Немає @" + " ";
  else s += "Email коректний";
  document.write(s);
}
*/