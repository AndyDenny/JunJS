document.addEventListener("DOMContentLoaded", function(){
    console.log("ready for action");

    let mcont = document.querySelector("#mcont");
 
    class Animal {
        
        constructor(name,sou, ag) {
            this.name = name;
            this.sound = sou;
            this.age = ag;
            
        }
    }

let cat1 = new Animal("Izi","meow",2)
mcont.textContent =  "cat1.sound = " + cat1.sound;

});