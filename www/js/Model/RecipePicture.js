function RecipePicture() {

    // Type - string. Either "text" or "picture"
        this.getType = function() {
            return "picture";
        };
    
    // Name - string
        this.getName = function() {
            return this.name;
        };
        
        this.setName = function(name) {
            this.name = name;
        };
    
    // Image - data-encoded string
        this.getImage = function() {
            return this.image;
        };
        
        this.setImage = function(image) {
            
            //convertImgToBase64(image, this, png);
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
            return null;
        };
        
        this.setCookTime = function(cookTime) {
            return;
        };
    
    // Yield - string
        this.getYield = function() {
            return null;
        };
        
        this.setYield = function(recipeYield) {
            return;
        };
    
    // Ingredients - string
        this.getIngredients = function() {
            return null;
        };
        
        this.setIngredients = function(ingredients) {
            return;
        };
    
    // Directions - string
        this.getDirections = function() {
            return null;
        };
        
        this.setDirections = function(directions) {
            return;
        };
        
}

/*
function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
}
*/