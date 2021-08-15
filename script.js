const getMealName = mealName=>{
    const searchValue =document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchValue}`)
    .then(response => response.json())
    .then(data=> showMeal(data.meals));
    }
const showMeal = meal=>{
    const mealName = document.getElementById('meal-name');
    const mealDetails = document.getElementById('meal-details');
    mealDetails.style.display='none';
    mealName.style.display='block';
    meal.forEach(meals => {
        const mealItem = document.createElement('div');
        mealItem.className = 'meal'
        const mealInfo=`
        <img src="${meals.strMealThumb}" onclick="itemsDetails('${meals.idMeal}')">
        <h3>${meals.strMeal}</h3>
        
        `
        mealItem.innerHTML=mealInfo;
        mealName.appendChild(mealItem);
    });
}
const itemsDetails = item =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
    .then(response => response.json())
    .then(data=> mealDetails(data.meals[0]));
}

const mealDetails = details =>{
    const mealDetails = document.getElementById('meal-details');
    const mealName = document.getElementById('meal-name');
    mealDetails.style.display='block';
    mealName.style.display='none';
    const mealDetailsInfo=`
    <img src="${details.strMealThumb}">
    <h1>${details.strMeal}</h1>
    <h3>Ingredient<h3/>
    <h5>${details.strIngredient1 +' '+details.strMeasure1}</h5>
    <h5>${details.strIngredient1 +' '+details.strMeasure1}</h5>
    <h5>${details.strIngredient1 +' '+details.strMeasure1}</h5>
    <h5>${details.strIngredient2 +' '+details.strMeasure2}</h5>
    <h5>${details.strIngredient3 +' '+details.strMeasure3}</h5>
    <h5>${details.strIngredient4 +' '+details.strMeasure4}</h5>
    <h5>${details.strIngredient5 +' '+details.strMeasure5}</h5>
    <h5>${details.strIngredient6 +' '+details.strMeasure6}</h5>
    <h5>${details.strIngredient7 +' '+details.strMeasure7}</h5>
    <h5>${details.strIngredient8 +' '+details.strMeasure8}</h5>
    <h5>${details.strIngredient9 +' '+details.strMeasure9}</h5>
    <h5>${details.strIngredient10 +' '+details.strMeasure10}</h5>
    <h5>${details.strIngredient11+' '+details.strMeasure11}</h5>
    <h5>${details.strIngredient12 +' '+details.strMeasure12}</h5>
    <h5>${details.strIngredient13 +' '+details.strMeasure13}</h5>
    <h5>${details.strIngredient14 +' '+details.strMeasure14}</h5>
    <h5>${details.strIngredient15 +' '+details.strMeasure15}</h5>
    <h5>${details.strIngredient16 +' '+details.strMeasure16}</h5>
    <h5>${details.strIngredient17 +' '+details.strMeasure17}</h5>
    <h5>${details.strIngredient18 +' '+details.strMeasure18}</h5>
    <h5>${details.strIngredient19+' '+details.strMeasure19}</h5>
    


    `
    mealDetails.innerHTML=mealDetailsInfo;
}