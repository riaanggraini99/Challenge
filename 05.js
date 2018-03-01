var angka = new Array(100);
        for (var i = 0; i < 100; i++) {
            angka[i] = i + 1; 
        }

        for (var i = 0; i < angka.length; i++) {
          
        }
   
 //ganjil genap
console.log("angka ganjil : " + angka.filter((number) => number%2!==0));
console.log("angka genap : " + angka.filter((number) => number%2==0));

// bilangan dikali 5

console.log("angka kelipatan : " + angka.filter((number) => number%5==0 ));

// bilangan prima

var numbers = new Array(100);
        
        for (var j = 2; j < 100; j++) {
            numbers[j] = j + 1; 
        }

        for (var j = 2; j < 100 - 1; j++) {
          
        }

console.log("angka prima : " + numbers.filter((nums) =>  nums%j==0));