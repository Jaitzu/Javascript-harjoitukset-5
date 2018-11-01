document.getElementsByTagName("td")[0].innerHTML = '<td>Janne,</td>';
document.getElementsByTagName("td")[1].innerHTML = '<td>Nuolioja,</td>';
document.getElementsByTagName("td")[3].innerHTML = '<td>Kurkisuontie 12 d 34, </td>';

document.getElementsByTagName("td")[2].remove();
document.getElementsByTagName("th")[2].remove();

const di = document.getElementsByTagName("tr")[0];
const a = document.createTextNode('Puh.');
const b = document.createElement("th");
b.appendChild(a);
di.appendChild(b);


const div = document.getElementsByTagName("tr")[1];
const t = document.createTextNode('0505755625');
const p = document.createElement("td");
p.appendChild(t);
div.appendChild(p);
