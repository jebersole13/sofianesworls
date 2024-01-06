var simplehash= new Object();


simplehash['key1']= 'slim';
simplehash['key2']='sofian'
simplehash['key3']='leon';

for(var key in simplehash){

if (simplehash.hasOwnProperty(key)){
  console.log('key is: ' + key + ', value is: ' + simplehash[key]);
}
}




