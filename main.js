document.getElementById("fetchButton").addEventListener("click", function () {
  const characterName = document.getElementById("characterName").value;
  const fullUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

  fetch(fullUri)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.result && data.result.length > 0) {
        const characterData = data.result[0].properties;
        const outputText = `Name: ${characterName}, Height: ${characterData.height}, Mass: ${characterData.mass}, Gender: ${characterData.gender}, Hair Color: ${characterData.hair_color}`;
        document.getElementById("output").value = outputText;
      } else {
        document.getElementById("output").value = "Character not found.";
      }
    })
    .catch((err) => console.error(err));
});
