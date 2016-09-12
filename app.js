var bartender = {
    questions: [
        "Do ye like yer drinks strong?",
        "Do ye like it with a salty tang?",
        "Are ye a lubber who likes it bitter?",
        "Would ye like a bit of sweetness with yer poison?",
        "Are ye one for a fruity finish?"
    ],

    //An empty array for user preferences to be pushed to
    preferences: [],

    askQuestions: function() {
        //Should iterate through questions array and populate preferences array with indexes of questions that have been answered yes to
        var questionIndex = 0;
        $(".question-space").html(bartender.questions[questionIndex]);
        $(".btn-success").click(function() {
            if (questionIndex === bartender.questions.length) {
                bartender.preferences.push(questionIndex);
                $(".question-space").html("<h2>Here's yar drink matey!</h2>");
                $(".answer-space").empty();
                bartender.createDrink();
            } else {
                bartender.preferences.push(questionIndex);
                questionIndex++;
                $(".question-space").html(bartender.questions[questionIndex]);
            }

        });

        $(".btn-danger").click(function() {
            if (questionIndex === bartender.questions.length) {
                $(".question-space").html("<h2>Here's yar drink matey!</h2>");
                $(".answer-space").empty();
                bartender.createDrink();
            } else {
                questionIndex++;
                $(".question-space").html(bartender.questions[questionIndex]);
            }
        });

    },

    pantry: [
        ["Glug of rum", "slug of whisky", "splash of gin"], //Strong ingredients: 0
        ["Olive on a stick", "salt-dusted rim", "rasher of bacon"], //Salty ingredients: 1
        ["Shake of bitters", "splash of tonic", "twist of lemon peel"], //Bitter ingredients: 2
        ["Sugar cube", "spoonful of honey", "splash of cola"], //Sweet ingredients: 3
        ["Slice of orange", "dash of cassis", "cherry on top"] //Fruity ingredients: 4
    ],

    createDrink: function() {
        //Should iterate through the preference object to see which preferences are present
        //Should then randomly select items from pantry that correspond to preferences
        var drink = "<ul>";
        for (var i = 0; i < this.preferences.length; i++) {
            drink += "<li>" + this.pantry[parseInt(this.preferences[i])][Math.floor(Math.random() * 3)] + "</li>";
        }
        drink += "</ul>";
        $(".drink-space").html(drink);
    }
};

$(document).ready(function() {
    //Invoke bartender question function here
    bartender.askQuestions();
});
