const languages = ["Python", "C++", "C#", "PHP"];
const languageToCheck = "Java Script";

if (!languages.includes(languageToCheck)) {
  console.log("Значення Java Script в списку немає, додаємо в масив");
  languages.push(languageToCheck);
}

console.log(languages);