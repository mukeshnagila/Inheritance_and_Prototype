////Question no. 1-----

function question1(){
    let parent = {
        demo:function(a,b){
            console.log(a+b);
            console.log(a-b);
            console.log(a*b);
            console.log(a/b);
        }
    }

    let child = Object.create(parent);
    child.demo(5,3);          
}


////Question no. 2-----

function question2(){
    const Animal = {
        type: "animal",
        breathe: function() {
          console.log("Breathing...");
        }
      };
      
      const dog = Object.create(Animal);
      dog.bark = function() {
        console.log("Woof! Woof!");
      };
      
      const puppy = Object.create(dog);
      puppy.weep = function() {
        console.log("Weeping...");
      };
      
      puppy.breathe(); 
      puppy.bark();   
      puppy.weep();          
}


////Question no. 3-----

function question3(){
    Array.prototype.sum = function() {
        return this.reduce((acc, curr) => acc + curr, 0);
      };
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [10, 20, 30, 40, 50];
      const array3 = [3, 7, 11, 15];
      
      const sum1 = array1.sum();
      const sum2 = array2.sum();
      const sum3 = array3.sum();
      
      console.log(`Sum of array1: ${sum1}`); 
      console.log(`Sum of array2: ${sum2}`); 
      console.log(`Sum of array3: ${sum3}`);        
}


////Question no. 4-----

function question4(){
    function getAllPropertyNames(obj) {
        let properties = [];
      
        function collectProperties(obj) {
          if (obj === null) return;
          properties = properties.concat(Object.getOwnPropertyNames(obj));
          collectProperties(Object.getPrototypeOf(obj));
        }
      
        collectProperties(obj);
      
        return [...new Set(properties)];
      }  
}