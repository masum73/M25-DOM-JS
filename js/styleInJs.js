//M25.6 styling dom properties , add, remove css class using JS 
const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgrey';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'orange';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');