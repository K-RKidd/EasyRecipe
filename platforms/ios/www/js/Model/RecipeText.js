function RecipeText () {
    
    // Type - string. Either "text" or "picture"
        this.getType = function() {
            return "text";
        };
    
    // Name - string
        this.getName = function() {
            return this.name;
        };
        
        this.setName = function(name) {
            this.name = name;
        };
    
    // Image - data-encoded string or url?
        this.getImage = function() {
            return this.image;
        };
        
        this.setImage = function(image) {
            this.image = image;
        };
    
    // Tags - array of strings
        this.getTags = function() {
            return this.tags;
        };
        
        this.setTags = function(tags) {
            this.tags = tags;
        };
    
    // Cook Time - number + string
        this.getCookTime = function() {
            return this.cookTime;
        };
        
        this.setCookTime = function(cookTime) {
            this.cookTime = cookTime;
        };
    
    // Yield - string
        this.getYield = function() {
            return this.recipeYield;
        };
        
        this.setYield = function(recipeYield) {
            this.recipeYield = recipeYield;
        };
    
    // Ingredients - string
        this.getIngredients = function() {
            return this.ingredients;
        };
        
        this.setIngredients = function(ingredients) {
            this.ingredients = ingredients;
        };
    
    // Directions - string
        this.getDirections = function() {
            return this.directions;
        };
        
        this.setDirections = function(directions) {
            this.directions = directions;
        };
    
}