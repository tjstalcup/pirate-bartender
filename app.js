var bartender = {
    questions: [
        "Do ye like yer drinks strong?",
        "Do ye like it with a salty tang?",
        "Are ye a lubber who likes it bitter?",
        "Would ye like a bit of sweetness with yer poison?",
        "Are ye one for a fruity finish?"
    ],

    preferences: [],

    askQuestion: function(question) {
      $(".question-space").html("<h2>" + this.questions[question] + "</h2>");
      $(".btn-success").click(function() {
        this.preferences.push(question);
        question++;
      });
      $(".btn-danger").click(function() {
        question++;
      });
    },
    askQuestions: function() {
      //Should iterate through the quesitons array and populate the preferences array with user answers of yes or no
      $.each(this.questions, function(question) {
        this.askQuestion(question);
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
    }
};
