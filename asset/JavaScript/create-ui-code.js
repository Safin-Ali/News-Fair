
//  Create navbar categories button

function creCategsBtn (categName,categID)  {
    const creBtn = document.createElement('button');
    creBtn.classList.add('categories-button');
    creBtn.setAttribute('onclick',`loadCusTypedata('${categID}')`)
    creBtn.innerText = categName;
    return creBtn
}

// Create Post Section button

function crePostSec (title,thumb,name,img,date,views) {
    const creDiv = document.createElement('div');
    creDiv.classList.add('card','mb-3','shadow-sm');
    creDiv.innerHTML=`
    <div class="row g-0 align-items-center">
    <div class="col-md-3 p-3">
      <img src="${thumb}" class="img-fluid rounded-start" alt="Post Thumbnai">
    </div>
    <div class="col-md-8">
      <div class="card-body light-black-color">
        <h5 class="card-title text-black02">${title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <!-- Post Owner Details -->
          <div class="d-flex align-items-center gap-2">
              <div>
                  <img class="post-author-img" src="${img}" alt="Post Owner">
              </div>
              <div>
                  <h4 class="fs-6 text-black02">${name}</h4>
                  <h4 class="fs-6 text-paste-thin">${date}</h4>
              </div>
          </div>
          <!-- Post How Many Views -->
          <div class="dark-black">
              <i class="fa-light fa-eye"></i>
              <span class="ms-1 fw-medium">${views}M</span>
          </div>
          <!-- Rate Font Awesome Icon -->
          <div>
              <i class="fa-regular fa-star-sharp-half-stroke dark-black"></i>
              <i class="fa-regular fa-star-sharp dark-black"></i>
              <i class="fa-regular fa-star-sharp dark-black"></i>
              <i class="fa-regular fa-star-sharp dark-black"></i>
              <i class="fa-regular fa-star-sharp dark-black"></i>
          </div>
          <!-- Next Arrow Button -->
          <div>
              <button><i class="fa-lg fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
    return creDiv
}