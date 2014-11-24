var RecipeStore = function() {
    
            recipes = null;

            this.getRecipes = function() {
                return recipes;
            };

            this.addRecipe = function(recipe) {
                recipes.push(recipe);
            };
            
            this.save = function() {
                document.addEventListener("deviceready", function() {
                
                    function fail(evt) {
                        alert("Error: " + evt.target.error.code);
                    }
                    
                    var theFileEntry = null;
                    
                    function gotFS(fileSystem) {
                        fileSystem.root.getFile("recipes.txt", {create: false, exclusive: false}, gotFileEntry, fail);
                    }
                
                    function gotFileEntry(fileEntry) {
                        theFileEntry = fileEntry;
                        theFileEntry.createWriter(gotFileWriter, fail);
                    }
                    
                    function gotFileWriter(writer) {
                        writer.write(JSON.stringify(recipes));
                    }
                    
                    try {
                        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
                    } catch (error) {
                        alert("error");
                    }
                    
                }, false);
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
            
            document.addEventListener("deviceready", function() {
                
                function fail(evt) {
                    alert("Error: " + evt.target.error.code);
                }
                
                var theFileEntry = null;
                
                function gotFS(fileSystem) {
                    fileSystem.root.getFile("recipes.txt", {create: false, exclusive: false}, gotFileEntry, fail);
                }
            
                function gotFileEntry(fileEntry) {
                    theFileEntry = fileEntry;
                    readAsText();
                }
                
                function readAsText() {
                    theFileEntry.file(function(file) {
                        
                        var reader = new FileReader();
                        
                        reader.onloadend = function(e) {
                            alert("Read file as text.");
                            recipes = JSON.parse(this.result);
                        }
                        
                        reader.readAsText(file);
                        
                    }, fail);
                }
                
                try {
                    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
                } catch (error) {
                    alert("error");
                }
                
            }, false);
    
};