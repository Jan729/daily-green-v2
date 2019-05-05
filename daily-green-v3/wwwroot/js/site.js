// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var score = 0;

var data = [
    { "id": "1", "title": "After a refreshing sleep, you wake up and feel ready to start the day. You head over to the washroom to brush your teeth. <BR/>Do you leave the water running or turn off the tap?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "2" },
    { "id": "2", "title": "If you turned off the tap, you realize that even saving small amounts of water every day will add up. Now it's time to take a shower. <BR/>You aim to take a shorter shower to save water, but should you leave the water hot or a little cooler than usual?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "3" },
    { "id": "3", "title": "Using less hot water helps to save energy! After you finish your shower, you head over to the kitchen to make breakfast. What type of protein do you choose: a vegetarian-based protein (ex eggs), or another breakfast meat?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "4" },
    { "id": "4", "title": "Meat requires more energy and resources to produce compared to plant-based foods, so making an effort to reduce the amount of meat you eat makes a difference. Now it's almost time to head to work! <BR/>Should you turn the lights off in the house, or leave them on because you're running a little late?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "5" },
    { "id": "5", "title": "Now, what's the best way to get to work? It's pretty close to home.", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "6" }, //bike is option1, car is option2
    { "id": "6", "title": "A good way to reduce your carbon emissions is to avoid using the car whenever possible. <BR/>You start working and before you know it, it's time for a quick lunch! Should you grab some take out or eat a packed lunch?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "7" },
    { "id": "7", "title": "Bringing your own lunch or drink in a resusable container helps reduce packaging waste from single-use items. <BR/>A few hours pass and the workday ends. You need to stop by the grocery store before heading home. Do you choose the local market or the grocery store with more imported foods?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "8" },
    { "id": "8", "title": "Buying local foods reduces carbon emissions needed to transport food grown in other places.<BR/>You arrive at home and find that the house feels rather cold. Should you turn up the heat or save enerergy and put on a sweater?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "9" },
    { "id": "9", "title": "After cooking a tasty dinner with your groceries, you realize you have to wash a few dishes. Should you start the dishwasher or handwash them?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "10" }, //dishwasher is option1, handwash is option2
    { "id": "10", "title": "If you only have a few dishes, handwashing saves electricity! <BR/>Finally you have some leisure time! How about watching TV? Or maybe go for a walk?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "11" },
    { "id": "11", "title": "There's a pile of stuff lying on the counter that you don't need. Should you take the time to sort and recycle them or throw them all in the trash to save time?", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "0" },
];

function getQuestById(id) {
    var data_length = data.length;
    for (var i = 0; i < data_length; i++) {
        if (data[i]["id"] == id) {
            
            return data[i];
        }
    }
}

$(document).ready(function () {

    init();    

    $("#option1").click(function () {
        processOption(this);
    });


    $("#option2").click(function () {
        processOption(this);
    });

    $("#playAgain").click(function () {
        init();
    });
});

function init() {
    score = 0;
    $("#score").html(score);

    $("#option1").show();
    $("#option2").show();

    setQuestion(1);
    $("#playAgain").hide();
}

function setQuestion(questId) {

    var questData = getQuestById(questId);

    $("#question").html(questData.title);
    $("#option1").data("points", questData.points1).data("nextquest", parseInt(questData.nextquest));
    $("#option2").data("points", questData.points2).data("nextquest", parseInt(questData.nextquest));
    $("#option1").attr("src", questData.option1);
    $("#option2").attr("src", questData.option2);
}

function processOption(obj) {
    
    score += parseInt($(obj).data("points"));

    $("#score").html(score);

    if ($(obj).data("nextquest") == "0") {

        endGame();
    }
    else {

        setQuestion($(obj).data("nextquest"));
    }
};

function endGame() {
    $("#option1").hide();
    $("#option2").hide();
    $("#playAgain").show();
}
