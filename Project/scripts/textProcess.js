function textProcess() {
    const paragraphElement = document.getElementById("paragraph");
    // (Result Paragraph)
    const resultP = document.getElementById("result");

    const paragraph = paragraphElement.value.trim();
    const word = "uws";

    if (!paragraph) {
        resultP.innerText = "No text was entered.";
        return;
    }

    // Convert to lower case for better handling
    const paragraphLower = paragraph.toLowerCase();
    const wordLower = word.toLowerCase();

    const lastIndex = paragraphLower.lastIndexOf(wordLower);

    if (lastIndex === -1) {
        resultP.innerText = "UWS was not found in the paragraph. Try again.";
        return;
    }

    const beforeUWStext = paragraph.substring(0, lastIndex);
    // check for number of spaces before uws
    const numberOfSpaces = (beforeUWStext.match(/ /g) || []).length;

    resultP.innerText = `Number of spaces before last occurrence of UWS: ${numberOfSpaces}`;
}
