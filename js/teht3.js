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
  p.innerHTML = "<img src =" + kuvat[i] + " > ";
  div.appendChild(p);
}
