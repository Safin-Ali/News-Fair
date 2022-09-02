
//  Create navbar categories button

function creCategsBtn (categName)  {
    const creBtn = document.createElement('button');
    creBtn.classList.add('categories-button');
    creBtn.innerText = categName;
}