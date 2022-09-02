// Display Categories Section

const displayCategSec = (getCategName) => {
    const selCategContainer = document.getElementById('categoriesContainer');
    console.log(getCategName);
    getCategName.map(item => {
        const itemName = item.category_name;
        const categName = creCategsBtn(itemName)
        selCategContainer.appendChild(categName)
    })
}
