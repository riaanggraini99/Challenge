
var args = process.argv;
var type = args[2] || 'text';
var arr = []; 
var bufferString; 

function csvHandler(req, res){
  fs.readFile('file.csv',function (err,data) {

  if (err) {
    return console.log(err);
  }

  bufferString = data.toString(); 


  arr = bufferString.split('\n'); 
  console.log(arr); 

  for (i = 0; i < arr.length; i++) { 
    JSON.stringify(arr[i]); 
  }

  JSON.parse(arr); 
  res.send(arr);  
});
}