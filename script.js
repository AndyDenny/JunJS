document.addEventListener("DOMContentLoaded", function(){
    console.log("ready for action");

    let mcont = document.querySelector("#mcont");

    class Animal {
        constructor(sou, ag, spee) {
            this.sound = sou;
            this.age = ag;
        }
    }

let cat1 = new Animal("meow",2)
console.log(cat1.sound)
mcont.textContent =  "cat1.sound = " + cat1.sound;

});