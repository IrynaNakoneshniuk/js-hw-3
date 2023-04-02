let mood = prompt("Який у тебе настрій?");

switch(mood) {
  case "щасливий":
    console.log("😊");
    break;
  case "сумний":
    console.log("😢");
    break;
  case "злюсіль":
    console.log("😠");
    break;
  default:
    console.log("Не вдалося визначити настрій 😕");
}