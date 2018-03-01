class Str {
    constructor(word) {
      this._lower = word.toLowerCase();
      this._upper = word.toUpperCase();
      this._capitalize = word.capitalize();
      this.reserve = word.reserve();
      this.random = word.random();
      this.slug = word.slug();
    }
  
    get lower() {
      return this._lower;
    }
    get upper() {
      return this._upper;
    }  
    get capitalize(){
        return this.capitalize;
    }
    get reserve(){
        return this.reserve;
    }
    get random(){
        return this.random;
    }
    get slug(){
        return this.slug;
    }
}
const low = new Str('hmmmmm')

console.log(low.lower);
console.log(low.upper);
console.log(low.capitalize);
console.log(low.reserve);
console.log(low.random);
console.log(low.slug);
  

