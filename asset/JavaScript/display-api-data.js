// 01 Display Categories Section

const displayCategSec = (getCategData) => {
    const selCategContainer = document.getElementById('categoriesContainer');
    getCategData.map(item => {
        const itemName = item.category_name;
        const itemID = item.category_id;
        const categName = creCategsBtn(itemName, itemID)
        selCategContainer.appendChild(categName)
    })
}

// Get Type Sort Value

const selcetOption = () => {
    const selOptionBtn = document.getElementById('selectValue');
    const getSelOptionValue = selOptionBtn.value;
    const setSelOptionValue = selOptionBtn.setAttribute('value', getSelOptionValue);
    console.log(getSelOptionValue);
    return setSelOptionValue
}

// 03 Display Post Section

const displayPostSec = (getPostData) => {
    const callOptionSortFunc = selcetOption();
    if (callOptionSortFunc === 'default') {
        appendCode(getPostData)
    } else {
        getPostData.sort((a, b) => b.total_view - a.total_view)
        appendCode(getPostData)
    }
}

// 04 Post Section Append Code Here

const appendCode = (datas) => {
    const totalCountPost = datas.length;
    totalCountPost === 0 ? postCountSec('No') : postCountSec(totalCountPost);
    const selPostContainer = document.getElementById('postConatiner');
    selPostContainer.innerHTML = ``;
    datas.forEach(post => {
        const postTitle = post.title === null ? post.title = `Post Title Not Found` : post.title;
        const postThumb = post.thumbnail_url;
        const postThumbBig = post.image_url;
        const postAuthorName = post.author.name === null ? post.author.name = `Name Not Found` : post.author.name === '' ? post.author.name = `Name Not Found` : post.author.name;
        const postAuthImg = post.author.img;
        const postDetails = post.details;
        const postRatingNum = post.rating.number;
        const postID = post._id;
        const postRatingBadge = post.rating.badge;
        const postPublishDate = post.author.published_date === null ? post.author.published_date = `Date Not Found` : post.author.published_date;
        const postView = post.total_view === null ? post.total_view = `No Views ` : post.total_view;
        const postSection = crePostSec(postID, postTitle, postThumb, postDetails, postThumbBig, postAuthorName, postAuthImg, postPublishDate, postView, postRatingNum, postRatingBadge)
        return selPostContainer.appendChild(postSection)
    })
    loadSpinner(false)
}