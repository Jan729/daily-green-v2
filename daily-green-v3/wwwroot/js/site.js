﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var score = 0;

var data = [
    { "id": "1", "title": "Question 1", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "2" },
    { "id": "2", "title": "Question 2", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "3" },
    { "id": "3", "title": "Question 3", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "4" },
    { "id": "4", "title": "Question 4", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "0" }
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