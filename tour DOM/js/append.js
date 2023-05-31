const placesList=document.getElementById('Places-list');

const li=document.createElement('li');
li.innerText='arafar moidan';
placesList.appendChild(li);

const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My food list';
section.appendChild(h1);
const ul=document.createElement('ul');
const li1=document.createElement('li1');
li1.innerText='biriyani';
ul.appendChild(li1);
const li2=document.createElement('li2');
li1.innerText='doi';
ul.appendChild(li2);
section.appendChild(ul);


mainContainer.appendChild(section);



const sectionDress=document.createElement('section');
sectionDress.innerHTML=
<h1>My Dress</h1>
<ul>
    <li>gaon</li>
    <li>sari</li>
</ul>
mainContainer.appendChild(sectionDress);