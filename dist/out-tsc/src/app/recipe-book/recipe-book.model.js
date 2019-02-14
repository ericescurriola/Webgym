/*
    This Class is the model for an recipe item
*/
var RecipeItem = /** @class */ (function () {
    function RecipeItem(id, image, recipeName, recipeDescription, ingredients, macros) {
        this.id = id;
        this.image = image;
        this.recipeName = recipeName;
        this.recipeDescription = recipeDescription;
        this.ingredients = ingredients;
        this.macros = macros;
    }
    return RecipeItem;
}());
export { RecipeItem };
//# sourceMappingURL=recipe-book.model.js.map