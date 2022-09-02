
//  Create navbar categories button

function creCategsBtn (categName,categID)  {
    const creBtn = document.createElement('button');
    creBtn.classList.add('categories-button','text-start','my-1','my-lg-0');
    creBtn.setAttribute('onclick',`loadCusTypedata('${categID}')`)
    creBtn.innerText = categName;
    return creBtn
}

// Create Post Section button

function crePostSec (title,thumb,bigThum,name,img,date,views) {
    const creDiv = document.createElement('div');
    creDiv.classList.add('card','mb-3','shadow-sm');
    creDiv.innerHTML=`
    <div class="row g-0 justify-content-center justify-content-lg-start align-items-center">
    <div class="col-lg-3 p-3">
      <img src="${thumb}" class="img-fluid rounded-start d-none d-lg-block" alt="Post Thumbnai">
      <img src="${bigThum}" class="img-fluid rounded-start d-block d-lg-none" alt="Post Thumbnai">
    </div>
    <div class="col-md-8">
      <div class="card-body light-black-color">
        <h5 class="card-title text-black02">${title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="row align-items-center text-center text-lg-start">
        <!-- Post Owner Details -->
          <div class="col-6 col-lg-3">
              <div class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                  <div>
                      <img class="post-author-img" src="${img}" alt="Post Owner">
                  </div>
                  <div>
                      <h4 class="fs-6 text-black02">${name}</h4>
                      <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">${date}</h4>
                  </div>
              </div>
          </div>
        <!-- Post How Many Views -->
          <div class="col-6 col-lg-3">
              <div class="dark-black">
                  <i class="fa-light fa-eye"></i>
                  <span class="ms-1 fw-medium">${views}M</span>
              </div>
          </div>
        <!-- Rate Font Awesome Icon -->
          <div class="col-6 col-lg-3">
              <div>
                  <i class="fa-regular fa-star-sharp-half-stroke dark-black"></i>
                  <i class="fa-regular fa-star-sharp dark-black"></i>
                  <i class="fa-regular fa-star-sharp dark-black"></i>
                  <i class="fa-regular fa-star-sharp dark-black"></i>
                  <i class="fa-regular fa-star-sharp dark-black"></i>
              </div>
          </div>
        <!-- Next Arrow Button -->
          <div class="col-6 col-lg-3">
              <div>
                  <button><i class="fa-lg fa-solid fa-arrow-right"></i></button>
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>
    `
    return creDiv
}