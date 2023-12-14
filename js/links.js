
//To retrieve existing links from localStorage or create an empty list 
const existingLinks = JSON.parse(localStorage.getItem('links')) || [];
const linkList = document.getElementById('linkList');
const addLink = document.getElementById('addLink');
const resetBtn = document.getElementById('reset');

//Apply the display-link function to each link that is added
existingLinks.forEach(link => {
    addLinkToDom(link.name, link.url);
});

//To get link's name/url from the input and add it to the localStorage

addLink.addEventListener('click', function () {
    const linkName = document.getElementById('linkName');
    const url = document.getElementById('url');

    if(linkName.value !== '' && url.value !== ''){
        addLinkToDom(linkName.value, url.value);

        const newLink = {name: linkName.value, url: url.value};
        existingLinks.push(newLink);
        localStorage.setItem('links', JSON.stringify(existingLinks));

        linkName.value = '';
        url.value = '';
    }
});

//To display the link's name on the list 

function addLinkToDom(name, url) {

    const listItem = document.createElement('li');
    listItem.classList.add('linkItem')
    listItem.innerHTML = `
        <a href='${url}' target ='_blank'>${name}</a>
        <button class='closeBtn'>x</button> `;
    linkList.appendChild(listItem);

    //close button 
    listItem.querySelector('.closeBtn').addEventListener('click', ()=> {
        listItem.remove();
        const updatedLinks = existingLinks.filter(link => !(link.name === name && link.url ===url));
        existingLinks.length = 0;
        existingLinks.push(...updatedLinks);
        localStorage.setItem('links', JSON.stringify(existingLinks));
    })
}

resetBtn.addEventListener('click', ()=>{
    localStorage.clear();
    linkList.innerHTML = '';
})






