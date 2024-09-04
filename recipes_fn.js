// Function to print recipe details
function printRecipe(dishName, ingredients, instructions) {
    console.log(`To make ${dishName}, use ingredients: ${ingredients}.`);
    console.log(`Instructions: ${instructions}`);
}

// Using the function to print different recipes
printRecipe(
    "Pancake", 
    "Flour, Eggs, Milk, Sugar, Baking Powder", 
    "Mix ingredients, heat pan, pour batter, cook until golden brown."
);

printRecipe(
    "Omelette", 
    "Eggs, Milk, Salt, Pepper, Cheese", 
    "Beat eggs with milk, pour into pan, cook until set, add cheese."
);

printRecipe(
    "Smoothie", 
    "Banana, Yogurt, Honey, Berries", 
    "Blend ingredients until smooth."
);
