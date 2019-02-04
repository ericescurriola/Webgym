/* 
    This Class is the model for an recipe item
*/
export class RecipeItem {
    
    id: number;                 //Id for the item
    image: string;              //Image path or imbedded picture, not sure yet
    recipeName: string;         //Name of the recipe
    recipeDescription: string   //Describes the recipe
    ingredients: { amount: string, ingredient: string }[];      //List with amount and ingredient
    macros: { protein: string, fat: string, carbs: string}[];   //macronutrient distribution

    constructor (
        id: number,
        image: string,
        recipeName: string,
        recipeDescription: string,
        ingredients: { amount: string, ingredient: string }[],
        macros: { protein: string, fat: string, carbs: string}[]
        ){
        this.id = id;
        this.image = image;
        this.recipeName = recipeName;
        this.recipeDescription = recipeDescription;
        this.ingredients = ingredients;
        this.macros = macros;
    }
}