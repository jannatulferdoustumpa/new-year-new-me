const section=document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginbottom='5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='7px';
    section.style.backgroundcolor='lightgray';

}
const placesContainer=document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
// console.log(placesContainer);