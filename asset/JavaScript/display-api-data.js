// 01 Display Categories Section

const displayCategSec = (getCategName) => {
    const selCategContainer = document.getElementById('categoriesContainer');
    getCategName.map(item => {
        const itemName = item.category_name;
        const itemID = item.category_id;
        const categName = creCategsBtn(itemName,itemID)
        selCategContainer.appendChild(categName)
    })
}

// 02 Display Post Section

const displayPostSec = (getPostData) => {
    const selPostContainer = document.getElementById('postConatiner');
    selPostContainer.innerHTML = ``;
    getPostData.forEach(post => {
        const postTitle = post.title;
        const postThumb = post.thumbnail_url;
        const postThumbBig = post.image_url;
        const postAuthorName = post.author.name;
        const postAuthImg = post.author.img;
        const postPublishDate = post.author.published_date.slice(0,10);
        const postView = post.total_view;
        const postSection = crePostSec(postTitle,postThumb,postThumbBig,postAuthorName,postAuthImg,postPublishDate,postView)
        selPostContainer.appendChild(postSection)

    })
}
