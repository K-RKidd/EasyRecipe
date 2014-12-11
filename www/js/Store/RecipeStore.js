var RecipeStore = function() {
    
    recipes = new Array();
    
    // Callback function that is called once recipes array
    // is initialized.
    var finishedInitialization = function() {};
    
    this.setFinishedInitialization = function(theFunction) {
        finishedInitialization = theFunction;
    }

    this.getRecipes = function() {
        return recipes;
    };

    this.addRecipe = function(recipe) {
        recipes.push(recipe);
    };
    
    this.save = function() {
        
        function fail(evt) {
            //alert("Error: " + evt.target.error.code);
            //alert("Error: " + evt);
            console.log("Error: " + evt.target.error.code);
        }
        
        var theFileEntry = null;
        
        function gotFS(fileSystem) {
            console.log("Got a filesystem");
            fileSystem.root.getFile("recipes.txt", {create: false, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            console.log("Got a fileentry");
            theFileEntry = fileEntry;
            theFileEntry.createWriter(gotFileWriter, fail);
        }
        
        function gotFileWriter(writer) {
            console.log("Got a filewriter, now writing to file");
            writer.write(JSON.stringify(recipes));
        }
        
        try {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        } catch (error) {
            alert("error getting filesystem");
        }

    };

    /*
    this.deleteRecipeByName = function(recipeName) {
        var index = -1;
        for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].getName() == recipeName) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            recipes.splice(index,index);
        }
    }
    */
    
    this.initializeRecipes = function() {
        
        console.log("inside initializeRecipes");
        
        function fail(evt) {
            //alert("Error: " + evt.target.error.code);
            console.log("Error: " + evt.target.error.code);
        }
        
        var theFileEntry = null;
        
        function gotFS(fileSystem) {
            console.log("Got a filesystem");
            fileSystem.root.getFile("recipes.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
        
        saveFunction = this.save;
        
        function gotFileEntry(fileEntry) {
            console.log("Got a fileentry");
            theFileEntry = fileEntry;
            readAsText(saveFunction);
        }
        
        function readAsText(savefunction) {
            
            console.log("Reading file as text");
            theFileEntry.file(function(file) {
                
                var reader = new FileReader();
                
                reader.onloadend = function(e) {
                    //alert("Read file as text.");
                    console.log("Read file as text.");
                    if (this.result == "") {
                        console.log("file was empty; made a new recipe array");
                        //recipes = new Array();
                        var recipe1 = new RecipeText();
                        recipe1.setName("Cereal");
                        recipe1.setTags("breakfast");
                        recipe1.setCookTime("1 minute");
                        recipe1.setYield("1 person");
                        recipe1.setIngredients("milk, cereal");
                        recipe1.setDirections("Pour milk on cereal.");
                        recipe1.setImage("http://upload.wikimedia.org/wikipedia/commons/3/39/Corn_pops.jpg");
                        
                        var recipe2 = new RecipeText();
                        recipe2.setName("Chocolate Chip Cookies");
                        recipe2.setTags("dessert, cookies");
                        recipe2.setCookTime("20 minutes");
                        recipe2.setYield("About 3 dozen cookies");
                        recipe2.setIngredients("2 1/4 cups all-purpose flour<br />" +
                                               "1/2 teaspoon baking soda<br />" +
                                               "1 cup (2 sticks) unsalted butter, room temperature<br />" +
                                               "1/2 cup granulated sugar<br />" +
                                               "1 cup packed light-brown sugar<br />" +
                                               "1 teaspoon salt<br />" +
                                               "2 teaspoons pure vanilla extract<br />" +
                                               "2 large eggs<br />" +
                                               "2 cups (about 12 ounces) semisweet and/or milk chocolate chips<br />");
                        var directions = "Preheat oven to 350 degrees. In a small bowl, whisk together the flour and baking soda; set aside. In the bowl of an electric mixer fitted with the paddle attachment, combine the butter with both sugars; beat on medium speed until light and fluffy. Reduce speed to low; add the salt, vanilla, and eggs. Beat until well mixed, about 1 minute. Add flour mixture; mix until just combined. Stir in the chocolate chips.";
                        directions += " Drop heaping tablespoon-size balls of dough about 2 inches apart on baking sheets lined with parchment paper.";
                        directions += " Bake until cookies are golden around the edges, but still soft in the center, 8 to 10 minutes. Remove from oven, and let cool on baking sheet 1 to 2 minutes. Transfer to a wire rack, and let cool completely. Store cookies in an airtight container at room temperature up to 1 week."
                        recipe2.setDirections(directions);
                        recipe2.setImage("http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg/320px-Chocolate_Chip_Cookies_-_kimberlykv.jpg");
                        
                        var recipe3 = new RecipeText();
                        recipe3.setName("Popcorn Shrimp");
                        recipe3.setTags("lunch, seafood");
                        recipe3.setCookTime("20 minutes");
                        recipe3.setYield("4 servings");
                        
                        var i = "1 quart vegetable oil for frying<br />";
                        i += "1 cup all-purpose flour<br />";
                        i += "1 egg<br />";
                        i += "1/2 cup milk<br />";
                        i += "1 cup dry bread crumbs<br />";
                        i += "1 1/4 teaspoons salt<br />";
                        i += "1/2 teaspoon dried basil<br />";
                        i += "1/2 teaspoon dried parsley<br />";
                        i += "1/8 teaspoon garlic powder<br />";
                        i += "1/8 teaspoon onion powder<br />";
                        i += "24 uncooked medium shrimp, peeled and deveined<br />";
                        recipe3.setIngredients(i);
                        
                        directions = "Heat oil in a deep-fryer or large saucepan to 350 degrees F (175 degrees C).<br /><br />";
                        directions += "Place flour in a bowl. Whisk egg and milk in another bowl. Combine bread crumbs, salt, basil, parsley, garlic powder, and onion powder in a third bowl.<br /><br />";
                        directions += "Gently press shrimp into flour to coat and shake off excess. Dip into egg mixture and press into bread crumbs. Gently toss between your hands so any bread crumbs that haven't stuck can fall away. Place the breaded shrimp onto a plate while breading the rest; do not stack.<br /><br />";
                        directions += "Deep fry breaded shrimp in preheated oil until golden brown, 3 to 4 minutes. Transfer shrimp to a paper towel-lined platter to drain.<br /><br />";
                        recipe3.setDirections(directions);
                        
                        recipe3.setImage("http://images.media-allrecipes.com/userphotos/250x250/00/87/13/871383.jpg");
                        
                        var recipe4 = new RecipeText();
                        recipe4.setName("Caramelized French Toast");
                        recipe4.setTags("breakfast");
                        recipe4.setCookTime("30 mins");
                        recipe4.setYield("8 servings");
                        
                        i = "4 tablespoons butter, divided<br />";
                        i += "6 eggs<br />";
                        i += "1/2 cup milk<br />";
                        i += "1/8 teaspoon salt<br />";
                        i += "8 slices bread<br />";
                        i += "1 cup brown sugar<br />";
                        i += "1/2 cup water<br />";
                        recipe4.setIngredients(i);
                        
                        directions = "1. Melt two tablespoons of butter in a frying pan or skillet over medium high heat.<br /><br />";
                        directions += "2. Beat together eggs, milk and salt. Dip bread one at a time into egg mixture and fry until light brown and egg is cooked.<br /><br />";
                        directions += "3. After 4 slices of bread have been cooked, melt remaining 2 tablespoons butter. Cook remaining bread slices until light brown on both sides and egg is cooked.<br /><br />";
                        directions += "4. After all bread slices have been cooked and removed from pan, add brown sugar to pan. Stir until melted and sticky. Add water and stir. Place French toast in caramel sauce. Turn to coat, then remove from pan. Serve.<br /><br />";
                        recipe4.setDirections(directions);
                        
                        recipe4.setImage("http://images.media-allrecipes.com/userphotos/250x250/00/17/70/177074.jpg");
                        
                        var recipe5 = new RecipeText();
                        recipe5.setName("Slow Cooker Boneless Turkey Breast");
                        recipe5.setTags("dinner, turkey, slow cooker");
                        recipe5.setCookTime("8+ hours");
                        recipe5.setYield("1 whole turkey breast");
                        
                        i = "1 (10 pound) boneless turkey breast<br />";
                        i += "2 (1 ounce) packages dry onion soup mix<br />";
                        i += "3/4 cup water<br />";
                        i += "2 tablespoons garlic powder<br />";
                        i += "2 tablespoons onion powder<br />";
                        i += "1 tablespoon dried parsley<br />";
                        i += "1 tablespoon seasoned salt<br />";
                        i += "1 tablespoon dried basil<br />";
                        i += "1 tablespoon dried oregano<br />";
                        recipe5.setIngredients(i);
                        
                        directions = "1. Place turkey breast into a large slow cooker. Whisk onion soup mix and water in a bowl and pour the mixture over the turkey breast, spreading it out to evenly cover the meat.<br /><br />";
                        directions += "2. Stir garlic powder, onion powder, parsley, seasoned salt, basil, and oregano in a bowl until thoroughly combined; sprinkle the seasonings over the turkey breast.<br /><br />";
                        directions += "3. Cook on Low until turkey is very tender and the seasonings have flavored the meat, 8 to 9 hours. An instant-read meat thermometer inserted into the thickest part of the breast, not touching bone, should read at least 165 degrees F (75 degrees C).<br /><br />";
                        recipe5.setDirections(directions);
                        
                        recipe5.setImage("http://images.media-allrecipes.com/userphotos/250x250/01/76/52/1765247.jpg");
                        
                        var recipe6 = new RecipeText();
                        recipe6.setName("Pizza");
                        recipe6.setTags("lunch");
                        recipe6.setCookTime("16 hours 31 minutes");
                        recipe6.setYield("2 pizzas");
                        
                        i = "1 teaspoon active dry yeast<br />"
                        i += "1/4 cup warm water<br />";
                        i += "1 cup cold water<br />";
                        i += "1 teaspoon salt<br />";
                        i += "3 cups bread flour<br />";
                        i += "6 ounces low moisture mozzarella chees, thinly sliced<br />";
                        i += "1/2 cup no salt aded canned crushed tomatoes<br />";
                        i += "1/4 teaspoon freshly ground black pepper<br />"
                        i += "1/2 teaspoon dried oregano<br />";
                        i += "3 tablespoons extra-virgin olive oil<br />";
                        i += "6 leaves fresh basil, torn<br />";
                        recipe6.setIngredients(i);
                        
                        directions = "1. Sprinkle yeast over warm water in a large bowl. Let stand for 5 minutes to proof. Stir in salt and cold water, then stir in the flour about 1 cup at a time. When the dough is together enough to remove from the bowl, knead on a floured surface until smooth, about 10 minutes. Divide into two pieces, and form each one into a tight ball. Coat the dough balls with olive oil, and refrigerate in a sealed container for at least 16 hours. Be sure to use a big enough container to allow the dough to rise. Remove the dough from the refrigerator one hour prior to using.<br /><br />";
                        directions += "2. Preheat the oven, with a pizza stone on the lowest rack, to 550 degrees F. Lightly dust a pizza peel with flour.<br /><br />";
                        directions += "3. Using one ball of dough at a time, lightly dust the dough with flour, and stretch gradually until it is about 14 inches in diameter, or about as big around as the pizza stone. Place on the floured peel. Place thin slices of mozzarella over the crust, then grind a liberal amount of black pepper over it. Sprinkle with dried oregano. Randomly arrange crushed tomatoes, leaving some empty areas. Drizzle olive oil over the top.<br /><br />";
                        directions += "4. With a quick back and forth jerk, make sure the dough will release from the peel easily. Place the tip of the peel at the back of the preheated pizza stone, and remove peel so that the pizza is left on the stone.<br /><br />";
                        directions += "5. Bake for 4 to 6 minutes in the preheated oven, or until the crust begins to brown. Remove from the oven by sliding the peel beneath the pizza. Sprinkle a few basil leaves randomly over the pizza. Cut into wedges and serve.<br /><br />";
                        recipe6.setDirections(directions);
                        recipe6.setImage("http://images.media-allrecipes.com/userphotos/250x250/00/06/72/67249.jpg");
                        
                        var recipe7 = new RecipeText();
                        recipe7.setName("Grilled Salmon");
                        recipe7.setCookTime("1 minute");
                        recipe7.setYield("1 person");
                        recipe7.setIngredients("milk, cereal");
                        recipe7.setDirections("Pour milk on cereal.");
                        recipe7.setImage("http://upload.wikimedia.org/wikipedia/commons/3/39/Corn_pops.jpg");
                        
                        var recipe8 = new RecipeText();
                        recipe8.setName("Tomato Basil Pasta");
                        recipe8.setCookTime("1 minute");
                        recipe8.setYield("1 person");
                        recipe8.setIngredients("milk, cereal");
                        recipe8.setDirections("Pour milk on cereal.");
                        recipe8.setImage("http://upload.wikimedia.org/wikipedia/commons/3/39/Corn_pops.jpg");
                        
                        var recipe9 = new RecipeText();
                        recipe9.setName("Tropical Smoothie");
                        recipe9.setCookTime("1 minute");
                        recipe9.setYield("1 person");
                        recipe9.setIngredients("milk, cereal");
                        recipe9.setDirections("Pour milk on cereal.");
                        recipe9.setImage("http://upload.wikimedia.org/wikipedia/commons/3/39/Corn_pops.jpg");
                        
                        var recipe10 = new RecipeText();
                        recipe10.setName("Garlic Mashed Potatoes");
                        recipe10.setCookTime("1 minute");
                        recipe10.setYield("1 person");
                        recipe10.setIngredients("milk, cereal");
                        recipe10.setDirections("Pour milk on cereal.");
                        recipe10.setImage("http://upload.wikimedia.org/wikipedia/commons/3/39/Corn_pops.jpg");
                        
                        recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8,
                                   recipe9, recipe10];
                        
                        savefunction();
                        
                    } else {
                        console.log("file was not empty; initialized recipe array");
                        recipesTemp = JSON.parse(this.result);
                        for (var i = 0; i < recipesTemp.length; i++) {
                            recipes[i] = new RecipeText();
                            recipes[i].setName(recipesTemp[i]['name']);
                            recipes[i].setTags(recipesTemp[i]['tags']);
                            recipes[i].setCookTime(recipesTemp[i]['cookTime']);
                            recipes[i].setYield(recipesTemp[i]['recipeYield']);
                            recipes[i].setIngredients(recipesTemp[i]['ingredients']);
                            recipes[i].setDirections(recipesTemp[i]['directions']);
                            recipes[i].setImage(recipesTemp[i]['image']);
                        }
                        console.log("recipe array: " + JSON.parse(this.result));
                    }
                    finishedInitialization();
                }
                
                reader.readAsText(file);
                
            }, fail);
        }
        
        try {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        } catch (error) {
            console.log("error getting filesystem");
        }
    };
    
};
