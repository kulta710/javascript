let displayBox = document.querySelector(".generator>input[type=text]");
let generateBtn = document.querySelector(".generator>button");

function generateIndex() {

    let today = new Date();

    // Add '0'in front of the value of the Date property, and slice.
    // It is a smart method.
    let year = today.getFullYear().slice(-4);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + (today.getDate())).slice(-2);
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let milliseconds = ("00" + today.getMilliseconds()).slice(-3);

    let rndNums = ("00000" + Math.floor(Math.random()*1000000)).slice(-6);

    let index = year + "-" + month + "-" + day + "-" + hours + "-" + minutes + "-" + seconds + "-" + milliseconds + "-" + rndNums;

    return index;
}

generateBtn.addEventListener("click", () => {
  let index = generateIndex();

  displayBox.value = index;

  // Function select() makes me possible to select (which is the same as dragging texts or elements with mouse) the texts inside an input[type=text] or textarea.
  // If we use select() properly, we need to focus() to the element first. We need to tell the engine which element we want to appley select() to.
  displayBox.focus();
  displayBox.select();

  document.execCommand("copy");
});