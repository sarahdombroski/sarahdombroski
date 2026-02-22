export default {
    "recipe-book": {
        "name": "Recipe Book",
        "tagline": "A website for tracking, saving, and sharing recipes.",
        "description": "With recipe book, you can create an account, create recipes, view other people's recipes, make a shopping list, and share with your friends! This provides an easier way to have mom's recipes without having to ask her every single time.",
        "tech": [".NET Blazor", "C#", "SQLite"],
        "features": [
            { "name": "Profile Creation", "description": "Create your own profile to save and edit your recipes" },
            { "name": "Recipe Creation", "description": "Create and edit your own recipes" },
            { "name": "Recipe Viewing", "description": "View all the recipes that have been added to the recipe database" },
            { "name": "Shopping List", "description": "Create a dynamic shopping list based off the recipes you've saved" },
            { "name": "Share with friends", "description": "Send an email to your friends and family to invite them to the website and get their recipes easily" }
        ],
        "pictures": [
            { "src": "images/recipehome.png", "alt": "Home Page" }, 
            { "src": "images/recipeall.png", "alt": "All Recipes" },
            { "src": "images/recipemy.png", "alt": "My Recipes" },
            { "src": "images/recipenew.png", "alt": "Create a New Recipe" },
            { "src": "images/recipeshopping.png", "alt": "Shopping List" },
            { "src": "images/recipeshare.png", "alt": "Share with Friends" },
            { "src": "images/recipesettings.png", "alt": "Settings" }
        ],
        "github": "https://github.com/sarahdombroski/RecipeCenter",
        "live": ""
  },
    "writing-pro": {
        "name": "Writing Pro",
        "tagline": "A Writer's Hub with saving, ideas generator, and motivational quotes.",
        "description": "Have you ever wanted to write but don't know where to start? With Writing Pro, you can write ideas, stories, and more in the textbox. Get some ideas from the idea generator, or motivational quotes from the home page!",
        "tech": ["HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
        "features": [
            { "name": "Text Box", "description": "Write your ideas in the text area, save them, edit them, and view them" },
            { "name": "Grammar and Spelling", "description": "Check your grammar and spelling with a simple button click" },
            { "name": "Save", "description": "Save your writing to txt or pdf files" },
            { "name": "Text to Speech", "description": "Read your work out loud with text to speech" },
            { "name": "Settings", "description": "Change your writing settings for font, dark mode, and even voice" },
            { "name": "Ideas Generator", "description": "Click the button for ideas on setting, characters, prompts, and more" },
            { "name": "Home Page", "description": "The home page holds your writing stats, motivational quotes, and direct links to get back to work" }
        ],
        "pictures": [
            { "src": "images/writingdash.png", "alt": "Home" }, 
            { "src": "images/writingwrite.png", "alt": "Writing Page" },
            { "src": "images/writingworks.png", "alt": "My Works" },
            { "src": "images/writinggenerator.png", "alt": "Idea Generator" },
            { "src": "images/writingsettings.png", "alt": "Settings" }
        ],
        "github": "https://github.com/sarahdombroski/writingpro",
        "live": "https://writingpro.onrender.com/"
  },
  "cat-attack": {
        "name": "Cat Attack",
        "tagline": "A website full of cat information and pictures.",
        "description": "Cat Attack lets you view images of cats and learn more about them! You can save your favorite cats to your list, view information about a specific cat breed, and find some fun cats! This website pulls from thecatapi.com, a free api with cat pictures and images.",
        "tech": ["HTML", "CSS", "JavaScript", "REST API"],
        "features": [
            { "name": "Slideshow", "description": "View images of cats on the home page and see their information with just a click of a button" },
            { "name": "Save Cats", "description": "Heart your favorite cats to always come back to them! This feature uses LocalStorage" },
            { "name": "View Cats", "description": "View all the cats of a specific breed that you select" },
            { "name": "Form", "description": "We want to hear from you! The contact form helps us gather information on what you want. Note: the contact form doesn't actually send us information, it just logs it to your console. Sorry :(" }
        ],
        "pictures": [
            { "src": "images/cathome.png", "alt": "Home" }, 
            { "src": "images/catinfo.png", "alt": "Cat Info" },
            { "src": "images/catall.png", "alt": "All Cats" },
            { "src": "images/catmy.png", "alt": "Favorite Cats" },
            { "src": "images/catform.png", "alt": "Contact Form" }
        ],
        "github": "https://github.com/sarahdombroski/Cat-Attack",
        "live": "https://sarahdombroski.github.io/Cat-Attack/index.html"
  },
  "nutrition-tracker": {
        "name": "Nutrition Tracker",
        "tagline": "A mobile application for tracking macros and making goals.",
        "description": "This nutrition tracker works well for people trying to make sure they're eating enough of the right things! Track your macros, including calories, fat, carbs, protein, and fiber. Save your foods in our food dictionary. Set goals, and see how you've been doing overall.",
        "tech": ["Dart", "Flutter"],
        "features": [
            { "name": "Macro Counting", "description": "Quickly add your macros and water count to view on the home page" },
            { "name": "Food Dictionary", "description": "Add your food to a dictionary for quick re-logging" },
            { "name": "Goals", "description": "Set goals and see how you're doing with your current macros" },
            { "name": "Calendar", "description": "Look back and see how you've done on different days with both your goals and your progress" }
        ],
        "pictures": [
            { "src": "images/nutritionhome.png", "alt": "Home" }, 
            { "src": "images/nutritiondic.png", "alt": "Food Dictionary" },
            { "src": "images/nutritioncalendar.png", "alt": "Calendar" }
        ],
        "github": "https://github.com/sarahdombroski/nutrition-tracker",
        "live": ""
  }
}