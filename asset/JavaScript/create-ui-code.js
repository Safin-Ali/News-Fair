
//  Create navbar categories button

function creCategsBtn (categName,categID)  {
    const creBtn = document.createElement('button');
    creBtn.classList.add('categories-button','text-start','my-1','my-lg-0','navbar-btn');
    creBtn.setAttribute('onclick',`loadCusTypedata('${categID}');`)
    creBtn.innerText = categName;
    return creBtn
}



//  Create Post Count Section

function postCountSec (length) {
    const selPostCountContainer = document.getElementById('categName');
    selPostCountContainer.innerHTML = '';
    const prePostCountNum = document.getElementById('postCountNum');
    const creDivtag = document.createElement('div');
    creDivtag.classList.add('px-4')
    creDivtag.innerHTML = `  
    <p class="mb-0 fw-medium text-center text-sm-start"><span id="postCountNum">${length}</span> items found <span
            class="d-none d-sm-inline-block">for category</p>
    `
    return selPostCountContainer.appendChild(creDivtag)
}

// Create Post Section button

function crePostSec (postID,title,thumb,details,bigThum,name,img,date,views,rateNum,rateBadge) {
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
        <p class="card-text my-2">${details.substring(0,300)}</p>
        <p class="card-text">${details.substring(300,600)}</p>
        <div class="row align-items-center text-center text-lg-start">
        <!-- Post Owner Details -->
          <div class="col-6 col-lg-3">
              <div class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                  <div>
                      <img class="post-author-img" src="${img}" alt="Post Owner">
                  </div>
                  <div>
                      <h4 class="fs-6 text-black02">${name}</h4>
                      <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">${date.substring(0,10)}</h4>
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
                  <button class="modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal${postID}"><i class="fa-2x fa-solid fa-arrow-right"></i></button>
                  <div class="modal fade" id="exampleModal${postID}" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-dialog-scrollable">
                      <div class="modal-content">
                          <div class="modal-header border-0">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <div class="card mx-auto">
                                  <img src="${img}" class="mx-auto card-img-top w-50" alt="Post Author Avatar">
                                  <div class="card-body">
                                      <div>
                                          <p class="fw-medium text-black">Author Name: ${name}</p>
                                          <p class="fw-medium text-black">Post Publish Date: <span class="common-color">${date.substring(0,10)}</span></p>
                                          <p class="fw-medium text-black">Post Publish Time: <span class="common-color">${date.substring(10)}</span></p>
                                      </div>
                                      <div>
                                          <p>${details}</p>
                                      </div>
                                      <div>
                                          <p class="fw-medium text-black">Rating Number : <span class="common-color">${rateNum}</span></p>
                                          <p class="fw-medium text-black">Badge : <span class="common-color">${rateBadge}</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>
    `
    return creDiv
}

// Loading Spinner

function loadSpinner (run) {
    const selLoadingElem = document.getElementById('loadingAnim');
    if(run){
        return selLoadingElem.classList.replace('d-none','d-block')
    }
    else{
        return selLoadingElem.classList.add('d-none')
    }
}

// Create Blog Page

function createBlogPage () {
    const selPostContainer = document.getElementById('postConatiner');
    selPostContainer.innerHTML = ``;
    const creDivTag = document.createElement('div');
    creDivTag.classList.add('table-responsive')
    creDivTag.innerHTML =`
    <h1 class="text-center mb-5">JavaScript ES6 Core Concept Summary</h1>
    <div class="my-3">
        <h5 class="text-center">01) What are the difference between let const,var each other?<span
                class="text-primary">var,</span><span class="text-warning">let,</span><span
                class="text-danger">const</span></h5>
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Var :</th>
                            <td>It creates a function scoped variable which can be
                                reassigned or redeclared later on.</td>
                        </tr>
                        <tr>
                            <th scope="row">Let :</th>
                            <td>It was introduced in ES6. It is the preferred way over using var. It creates a block-scoped variable,which can be reassigned but can't be redeclared.</td>
                        </tr>
                    </tbody>
                  </table>
    </div>
    <div class="my-5">
        <h5 class="text-center">02) What are the difference between Arrow Function And Regular Function</h5>
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Regular:</th>
                            <td>Inside of a regular JavaScript function, this value (aka the execution context) is dynamic. The dynamic context means that the value of this depends on how the function is invoked. In JavaScript, there are 4 ways you can invoke a regular function.</td>
                        </tr>
                        <tr>
                            <th scope="row">Arrow :</th>
                            <td>Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. While both regular JavaScript functions and arrow functions work in a similar manner, there are certain differences between them.</td>
                        </tr>
                    </tbody>
                  </table>
    </div>
    <div class="my-5">
        <h5 class="text-center">03) What are the difference between map,forEach,filter,find</h5>
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">forEach:</th>
                            <td>Foreach takes a callback function and run that callback function on each element of array one by one.</td>
                        </tr>
                        <tr>
                            <th scope="row">Filter :</th>
                            <td>The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.</td>
                        </tr>
                        <tr>
                            <th scope="row">Map :</th>
                            <td>Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.</td>
                        </tr>
                        <tr>
                            <th scope="row">Find :</th>
                            <td>The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.</td>
                        </tr>
                    </tbody>
                  </table>
    </div>
    `
    selPostContainer.appendChild((creDivTag))
    return creDivTag
}