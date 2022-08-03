function upperCase() {
    const text = document.getElementById("text").value;
    const upper = text.toUpperCase();

    document.getElementById("text").value = upper;
}

function lowerCase() {
    const text = document.getElementById("text").value;
    const lower = text.toLowerCase();

    document.getElementById("text").value = lower;
}

function poperCase() {
    const text = document.getElementById("text").value;
    const arrText = text.split(" ");

    for (let i = 0; i < arrText.length; i++) {
        arrText[i] = arrText[i][0].toUpperCase() + arrText[i].substr(1);
    }

    const poper = arrText.join(" ")

    document.getElementById("text").value = poper;
}

function sentenceCase() {
    const text = document.getElementById("text").value;
    const sentence = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});

    document.getElementById("text").value = sentence;
}

function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}
document.getElementById("save-text-file")
    .addEventListener("click", function () {
        var text = document.getElementById("text").value;
        var filename = "text.txt";
        download(filename, text);
    }, false);



