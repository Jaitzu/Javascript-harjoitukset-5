const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


for(i=0; i<kuvat.length; i++){
  const div = document.getElementsByTagName("ul")[0];
  const p = document.createElement("li");
  const a = document.createElement('img');
  a.src =kuvat[i];
  a.alt = 'El KATTEN';
  if(i % 2 ==0){

  }
  p.appendChild(a);
  div.appendChild(p);
}
