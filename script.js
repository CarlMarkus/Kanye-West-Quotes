const colorArray = [
    "#fb3640",
    "#542e71",
    "#fdca40",
    "#a799b7",
    "#ba135d",
    "#3d84b8",
    "#fc5404",
    "#cf0000"
];



const quote = document.getElementById("quote")

function generateQuote() {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then((data) => {
            quote.innerHTML = data.quote
        });

    const calculateColor = Math.floor(Math.random() * colorArray.length);
    document.querySelector("body").setAttribute("style", "background-color:" + colorArray[calculateColor]);

    var audio = new Audio("sound/kanye-robot.mp3")
    audio.play();

}
