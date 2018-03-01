var temp = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali";

var countaku = (temp.match(/Aku /g) || []).length;
console.log("kata aku ada: " + countaku);

var countingin = (temp.match(/ingin/g) || []).length;
console.log("kata ingin ada: " + countingin);

var countdapat = (temp.match(/Dapat/g) || []).length;
console.log("kata dapat ada: " + countdapat);
