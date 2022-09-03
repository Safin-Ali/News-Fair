function homePage() {
    const selPostContainer = document.getElementById('postConatiner');
    selPostContainer.innerHTML = ``;
    document.getElementById('categName').style.display = 'none';
    let homePageUICode = `<div class="card mb-3 shadow-sm">
    <div class="row g-0 justify-content-center justify-content-lg-start align-items-center">
        <div class="col-lg-3 p-3">
            <img src="asset/Images/post-thum1.png" class="img-fluid rounded-start d-none d-lg-block"
                alt="Post Thumbnai">
            <img src="asset/Images/post-thum1.png" class="img-fluid rounded-start d-block d-lg-none"
                alt="Post Thumbnai">
        </div>
        <div class="col-md-8">
            <div class="card-body light-black-color">
                <h5 class="card-title text-black02">The best fashion influencers to follow for sartorial
                    inspiration</h5>
                <p class="card-text my-2">From our favourite UK influencers to the best missives from Milan
                    and the coolest New Yorkers, read on some of the best fashion blogs out there, and for
                    even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                <p class="card-text">Fancy some shopping deals? Check out these amazing sales: Zara Black
                    Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                <div class="row align-items-center text-center text-lg-start">
                    <!-- Post Owner Details -->
                    <div class="col-6 col-lg-3">
                        <div
                            class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                            <div>
                                <img class="post-author-img" src="asset/Images/post-author.png" alt="Post Owner">
                            </div>
                            <div>
                                <h4 class="fs-6 text-black02">Jane Cooper</h4>
                                <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">Jan 10, 2022
                                </h4>
                            </div>
                        </div>
                    </div>
                    <!-- Post How Many Views -->
                    <div class="col-6 col-lg-3">
                        <div class="dark-black">
                            <i class="fa-light fa-eye"></i>
                            <span class="ms-1 fw-medium">1.5M</span>
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
                            <button class="modal-button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"><i
                                    class="fa-2x fa-solid fa-arrow-right"></i></button>
                            <div class="modal fade" id="exampleModal1" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="card mx-auto">
                                                <img src="asset/Images/post-author.png" class="mx-auto card-img-top w-50"
                                                    alt="Post Author Avatar">
                                                <div class="card-body">
                                                    <div>
                                                        <p class="fw-medium text-black">Author Name: Jane
                                                            Cooper
                                                        </p>
                                                        <p class="fw-medium text-black">Post Publish Date:
                                                            Jan 10, 2022
                                                            <span class="common-color">Jan 10, 2022 </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p>There's no better time than now to familiarise
                                                            yourself with the best online vintage clothing
                                                            stores. If you want to overhaul your wardrobe
                                                            for the long run, mixing vintage with high
                                                            street clothing is the key to being trendy as
                                                            well as sustainable.

                                                            But vintage shopping isn''t easy, you can easily
                                                            spend hours in a store and walk out with...</p>
                                                    </div>
                                                    <div>
                                                        <p class="fw-medium text-black">Rating Number :
                                                            <span class="common-color">3.8</span></p>
                                                        <p class="fw-medium text-black">Badge : <span
                                                                class="common-color">Excellent</span></p>
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
</div>
<!-- Post 2-->
<div class="card mb-3 shadow-sm">
    <div class="row g-0 justify-content-center justify-content-lg-start align-items-center">
        <div class="col-lg-3 p-3">
            <img src="asset/Images/post-thum4.png" class="img-fluid rounded-start d-none d-lg-block"
                alt="Post Thumbnai">
            <img src="asset/Images/post-thum4.png" class="img-fluid rounded-start d-block d-lg-none"
                alt="Post Thumbnai">
        </div>
        <div class="col-md-8">
            <div class="card-body light-black-color">
                <h5 class="card-title text-black02">The best fashion influencers to follow for sartorial
                    inspiration</h5>
                <p class="card-text my-2">From our favourite UK influencers to the best missives from Milan
                    and the coolest New Yorkers, read on some of the best fashion blogs out there, and for
                    even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                <p class="card-text">Fancy some shopping deals? Check out these amazing sales: Zara Black
                    Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                <div class="row align-items-center text-center text-lg-start">
                    <!-- Post Owner Details -->
                    <div class="col-6 col-lg-3">
                        <div
                            class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                            <div>
                                <img class="post-author-img" src="asset/Images/post-author.png" alt="Post Owner">
                            </div>
                            <div>
                                <h4 class="fs-6 text-black02">Jane Cooper</h4>
                                <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">Jan 10, 2022
                                </h4>
                            </div>
                        </div>
                    </div>
                    <!-- Post How Many Views -->
                    <div class="col-6 col-lg-3">
                        <div class="dark-black">
                            <i class="fa-light fa-eye"></i>
                            <span class="ms-1 fw-medium">1.5M</span>
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
                            <button class="modal-button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"><i
                                    class="fa-2x fa-solid fa-arrow-right"></i></button>
                            <div class="modal fade" id="exampleModal1" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="card mx-auto">
                                                <img src="asset/Images/post-author.png" class="mx-auto card-img-top w-50"
                                                    alt="Post Author Avatar">
                                                <div class="card-body">
                                                    <div>
                                                        <p class="fw-medium text-black">Author Name: Jane
                                                            Cooper
                                                        </p>
                                                        <p class="fw-medium text-black">Post Publish Date:
                                                            Jan 10, 2022
                                                            <span class="common-color">Jan 10, 2022 </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p>There's no better time than now to familiarise
                                                            yourself with the best online vintage clothing
                                                            stores. If you want to overhaul your wardrobe
                                                            for the long run, mixing vintage with high
                                                            street clothing is the key to being trendy as
                                                            well as sustainable.

                                                            But vintage shopping isn''t easy, you can easily
                                                            spend hours in a store and walk out with...</p>
                                                    </div>
                                                    <div>
                                                        <p class="fw-medium text-black">Rating Number :
                                                            <span class="common-color">3.8</span></p>
                                                        <p class="fw-medium text-black">Badge : <span
                                                                class="common-color">Excellent</span></p>
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
</div>
<!-- Post 3 -->
<div class="card mb-3 shadow-sm">
    <div class="row g-0 justify-content-center justify-content-lg-start align-items-center">
        <div class="col-lg-3 p-3">
            <img src="asset/Images/post-thum3.png" class="img-fluid rounded-start d-none d-lg-block"
                alt="Post Thumbnai">
            <img src="asset/Images/post-thum3.png" class="img-fluid rounded-start d-block d-lg-none"
                alt="Post Thumbnai">
        </div>
        <div class="col-md-8">
            <div class="card-body light-black-color">
                <h5 class="card-title text-black02">The best fashion influencers to follow for sartorial
                    inspiration</h5>
                <p class="card-text my-2">From our favourite UK influencers to the best missives from Milan
                    and the coolest New Yorkers, read on some of the best fashion blogs out there, and for
                    even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                <p class="card-text">Fancy some shopping deals? Check out these amazing sales: Zara Black
                    Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                <div class="row align-items-center text-center text-lg-start">
                    <!-- Post Owner Details -->
                    <div class="col-6 col-lg-3">
                        <div
                            class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                            <div>
                                <img class="post-author-img" src="asset/Images/post-author.png" alt="Post Owner">
                            </div>
                            <div>
                                <h4 class="fs-6 text-black02">Jane Cooper</h4>
                                <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">Jan 10, 2022
                                </h4>
                            </div>
                        </div>
                    </div>
                    <!-- Post How Many Views -->
                    <div class="col-6 col-lg-3">
                        <div class="dark-black">
                            <i class="fa-light fa-eye"></i>
                            <span class="ms-1 fw-medium">1.5M</span>
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
                            <button class="modal-button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"><i
                                    class="fa-2x fa-solid fa-arrow-right"></i></button>
                            <div class="modal fade" id="exampleModal1" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="card mx-auto">
                                                <img src="asset/Images/post-author.png" class="mx-auto card-img-top w-50"
                                                    alt="Post Author Avatar">
                                                <div class="card-body">
                                                    <div>
                                                        <p class="fw-medium text-black">Author Name: Jane
                                                            Cooper
                                                        </p>
                                                        <p class="fw-medium text-black">Post Publish Date:
                                                            Jan 10, 2022
                                                            <span class="common-color">Jan 10, 2022 </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p>There's no better time than now to familiarise
                                                            yourself with the best online vintage clothing
                                                            stores. If you want to overhaul your wardrobe
                                                            for the long run, mixing vintage with high
                                                            street clothing is the key to being trendy as
                                                            well as sustainable.

                                                            But vintage shopping isn''t easy, you can easily
                                                            spend hours in a store and walk out with...</p>
                                                    </div>
                                                    <div>
                                                        <p class="fw-medium text-black">Rating Number :
                                                            <span class="common-color">3.8</span></p>
                                                        <p class="fw-medium text-black">Badge : <span
                                                                class="common-color">Excellent</span></p>
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
</div>
<!-- Post 4-->
<div class="card mb-3 shadow-sm">
    <div class="row g-0 justify-content-center justify-content-lg-start align-items-center">
        <div class="col-lg-3 p-3">
            <img src="asset/Images/post-thum2.png" class="img-fluid rounded-start d-none d-lg-block"
                alt="Post Thumbnai">
            <img src="asset/Images/post-thum2.png" class="img-fluid rounded-start d-block d-lg-none"
                alt="Post Thumbnai">
        </div>
        <div class="col-md-8">
            <div class="card-body light-black-color">
                <h5 class="card-title text-black02">The best fashion influencers to follow for sartorial
                    inspiration</h5>
                <p class="card-text my-2">From our favourite UK influencers to the best missives from Milan
                    and the coolest New Yorkers, read on some of the best fashion blogs out there, and for
                    even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                <p class="card-text">Fancy some shopping deals? Check out these amazing sales: Zara Black
                    Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                <div class="row align-items-center text-center text-lg-start">
                    <!-- Post Owner Details -->
                    <div class="col-6 col-lg-3">
                        <div
                            class="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                            <div>
                                <img class="post-author-img" src="asset/Images/post-author.png" alt="Post Owner">
                            </div>
                            <div>
                                <h4 class="fs-6 text-black02">Jane Cooper</h4>
                                <h4 class="fs-6 text-paste-thin d-block d-lg-none d-xl-block">Jan 10, 2022
                                </h4>
                            </div>
                        </div>
                    </div>
                    <!-- Post How Many Views -->
                    <div class="col-6 col-lg-3">
                        <div class="dark-black">
                            <i class="fa-light fa-eye"></i>
                            <span class="ms-1 fw-medium">1.5M</span>
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
                            <button class="modal-button" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"><i
                                    class="fa-2x fa-solid fa-arrow-right"></i></button>
                            <div class="modal fade" id="exampleModal1" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="card mx-auto">
                                                <img src="asset/Images/post-author.png" class="mx-auto card-img-top w-50"
                                                    alt="Post Author Avatar">
                                                <div class="card-body">
                                                    <div>
                                                        <p class="fw-medium text-black">Author Name: Jane
                                                            Cooper
                                                        </p>
                                                        <p class="fw-medium text-black">Post Publish Date:
                                                            Jan 10, 2022
                                                            <span class="common-color">Jan 10, 2022 </span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p>There's no better time than now to familiarise
                                                            yourself with the best online vintage clothing
                                                            stores. If you want to overhaul your wardrobe
                                                            for the long run, mixing vintage with high
                                                            street clothing is the key to being trendy as
                                                            well as sustainable.

                                                            But vintage shopping isn''t easy, you can easily
                                                            spend hours in a store and walk out with...</p>
                                                    </div>
                                                    <div>
                                                        <p class="fw-medium text-black">Rating Number :
                                                            <span class="common-color">3.8</span></p>
                                                        <p class="fw-medium text-black">Badge : <span
                                                                class="common-color">Excellent</span></p>
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
</div>
`

    selPostContainer.innerHTML = homePageUICode;
}