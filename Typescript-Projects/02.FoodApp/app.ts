interface Recipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
    strInstructions: string;
    [key: string]: string;
  }
  
  async function fetchRecipes() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='); // Effectue une requête pour récupérer les recettes depuis l'API
    const data = await response.json(); // Convertit la réponse en JSON
    return data.meals; // Renvoie la liste des recettes
  }
  
  function createRecipeCard(recipe: Recipe) {
    const card = document.createElement('div'); // Crée un élément div pour représenter la carte de recette
    card.classList.add('recipe-card'); // Ajoute la classe 'recipe-card' à la carte
  
    const image = document.createElement('img'); // Crée un élément img pour afficher l'image de la recette
    image.src = recipe.strMealThumb; // Définit l'URL de l'image de la recette
    card.appendChild(image); // Ajoute l'image à la carte
  
    const name = document.createElement('h3'); // Crée un élément h3 pour afficher le nom de la recette
    name.textContent = recipe.strMeal; // Définit le texte du nom de la recette
    card.appendChild(name); // Ajoute le nom à la carte
  
    const category = document.createElement('p'); // Crée un élément p pour afficher la catégorie de la recette
    category.textContent = `Category: ${recipe.strCategory}`; // Définit le texte de la catégorie de la recette
    card.appendChild(category); // Ajoute la catégorie à la carte
  
    const area = document.createElement('p'); // Crée un élément p pour afficher la zone de la recette
    area.textContent = `Area: ${recipe.strArea}`; // Définit le texte de la zone de la recette
    card.appendChild(area); // Ajoute la zone à la carte
  
    card.addEventListener('click', () => { // Ajoute un écouteur d'événement de clic à la carte
      openModal(recipe); // Appelle la fonction openModal avec la recette correspondante
    });
  
    return card; // Renvoie la carte de recette créée
  }
  
  function openModal(recipe: Recipe) {
    const modal = document.getElementById('modal'); // Récupère l'élément modal par son ID
    const modalTitle = document.getElementById('modal-title'); // Récupère l'élément modal-title par son ID
    const modalIngredients = document.getElementById('modal-ingredients'); // Récupère l'élément modal-ingredients par son ID
  
    if (modal && modalTitle && modalIngredients) { // Vérifie si les éléments sont présents
      modalTitle.textContent = recipe.strMeal; // Définit le texte du titre du modal avec le nom de la recette
      modalIngredients.innerHTML = ''; // Réinitialise le contenu de la liste des ingrédients du modal
  
      for (let i = 1; i <= 20; i++) { // Parcourt les 20 ingrédients possibles
        const ingredientKey = `strIngredient${i}`; // Construit la clé de l'ingrédient
        const measureKey = `strMeasure${i}`; // Construit la clé de la mesure
  
        if (recipe[ingredientKey]) { // Vérifie si l'ingrédient est présent dans la recette
          const ingredientItem = document.createElement('li'); // Crée un élément li pour représenter l'ingrédient
          ingredientItem.textContent = `${recipe[ingredientKey]} - ${recipe[measureKey]}`; // Définit le texte de l'ingrédient avec son nom et sa mesure
          modalIngredients.appendChild(ingredientItem); // Ajoute l'ingrédient à la liste du modal
        }
      }
  
      modal.style.display = 'block'; // Affiche le modal
  
      const closeBtn = document.getElementsByClassName('close')[0]; // Récupère le bouton de fermeture du modal
      closeBtn.addEventListener('click', () => { // Ajoute un écouteur d'événement de clic au bouton de fermeture
        modal.style.display = 'none'; // Masque le modal
      });
  
      window.addEventListener('click', (event) => { // Ajoute un écouteur d'événement de clic à la fenêtre
        if (event.target === modal) { // Vérifie si l'événement de clic est sur le modal
          modal.style.display = 'none'; // Masque le modal
        }
      });
    }
  }
  
  async function displayRecipes() {
    const recipesContainer = document.getElementById('recipes'); // Récupère l'élément recipes par son ID
  
    if (recipesContainer) { // Vérifie si l'élément est présent
      try {
        const recipes = await fetchRecipes(); // Récupère les recettes depuis l'API
  
        recipes.forEach((recipe: Recipe) => { // Parcourt chaque recette
          const card = createRecipeCard(recipe); // Crée une carte de recette pour chaque recette
          recipesContainer.appendChild(card); // Ajoute la carte à l'élément recipes
        });
      } catch (error) {
        console.log('Une erreur s\'est produite lors de la récupération des recettes', error);
      }
    }
  }
  
  displayRecipes(); // Appelle la fonction pour afficher les recettes
  