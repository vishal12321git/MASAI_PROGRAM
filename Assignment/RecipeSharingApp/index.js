document.addEventListener("DOMContentLoaded", () => {
    const recipeForm = document.getElementById("recipe-form");
    const recipeList = document.getElementById("recipe-list");
    const filter = document.getElementById("filter");

    function getRecipes() {
        return JSON.parse(localStorage.getItem("recipes")) || [];
    }

    function saveRecipes(recipes) {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    function renderRecipes() {
        const recipes = getRecipes();
        const category = filter.value;
        recipeList.innerHTML = "";
        
        recipes.filter(recipe => category === "All" || recipe.category === category)
            .forEach(recipe => {
                const recipeCard = document.createElement("div");
                recipeCard.className = "recipe-card";
                recipeCard.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <p><strong>Category:</strong> ${recipe.category}</p>
                    <p><strong>Ingredients:</strong></p>
                    <table><tr><td>${recipe.ingredients.split("\n").map(ing => ing.trim()).map((val)=>`<tr><td>${val}</td></tr>`)}</td></tr></table>
                    <p><strong>Steps:</strong></p>
                    <p>${recipe.steps}</p>
                `;
                recipeList.appendChild(recipeCard);
            });
    }

    recipeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const category = document.getElementById("category").value;
        const steps = document.getElementById("steps").value;
        
        const recipes = getRecipes();
        recipes.push({ name, ingredients, category, steps });
        saveRecipes(recipes);
        renderRecipes();
        recipeForm.reset();
    });

    filter.addEventListener("change", renderRecipes);
    renderRecipes();
});