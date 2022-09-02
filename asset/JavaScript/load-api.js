// Load All Categories API Data

const loadAllTypeData = async() => {
    try{
        const url = 'https://openapi.programming-hero.com/api/news/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayCategSec(data.data.news_category)
    }
    catch(error){
        console.log(error);
    }
}

// Load News By Searching categories Name 

const loadCusTypedata = async (categorieID) => {
    try{
        const url = `https://openapi.programming-hero.com/api/news/category/${categorieID}`;
        const res = await fetch(url);
        const data = await res.json();
        displayPostSec(data.data)
        console.log(data.data)
    }
    catch(error){
        console.log(error);
    }
}

// Load News By News URL ID 

const loadDataDetails = async (urlID) => {
    try{
        const url = `https://openapi.programming-hero.com/api/news/${urlID}`;
        const res = await fetch(url);
        const data = await res.json();
    }
    catch(error){
        console.log(error);
    }
}

// Load Post Author Name And Total View

const loadPostAuthorData = async (urlID) => {
    try{
        const url = `https://openapi.programming-hero.com/api/news/${urlID}`;
        const res = await fetch(url);
        const data = await res.json();
    }
    catch(error){
        console.log(error);
    }
}

