const chinaMovies =  {
    title: "Phim Trung Quốc Mới",
    movies: [
        {
            movie_id: "china_movie_bach_lac_mon",
            movie_src: "assets/images/bach-lac-mon.webp",
            movie_title: "Bách Lạc Môn",
            movie_alt: "Bách Lạc Môn"
        },
        {
            movie_id: "china_movie_khoanh_khac_no_ro_cua_hua_khai_tam",
            movie_src: "assets/images/khoanh-khac-no-ro-cua-hua-khai-tam.webp",
            movie_title: "Khoảnh Khắc Nở Rộ Của Hứa Khai Tâm",
            movie_alt: "Khoảnh Khắc Nở Rộ Cuar Hứa Khai Tâm"
        },
        {
            movie_id: "china_movie_than_do_ho_phap",
            movie_src: "assets/images/than-do-ho-tham.webp",
            movie_title: "Thần Đô Hộ Pháp",
            movie_alt: "Thần Đô Hộ Pháp"
        },
        {
            movie_id: "china_movie_lam_giang_tien",
            movie_src: "assets/images/lam-giang-tien.webp",
            movie_title: "Lâm Giáng Tiên",
            movie_alt: "Lâm Giáng Tiên"
        },
        {
            movie_id: "china_movie_mong_me_doi_doi",
            movie_src: "assets/images/mong-me-doi-doi.webp",
            movie_title: "Mong Mẹ Đổi Đời",
            movie_alt: "Mong Mẹ Đổi Đời"
        },
    ]
}

const genChinaMoviesButton = document.getElementById('gen-china-movies')

genChinaMoviesButton.addEventListener('click', function () {
    const contentElement = document.querySelector('.content'); 
    const categoriesListElement = document.createElement('div');
    categoriesListElement.classList.add("categories");

//title
    const categories_Title = document.createElement('div');
    categories_Title.classList.add("category-title");
    categoriesListElement.appendChild(categories_Title);

    const h2_Title = document.createElement('h2');
    h2_Title.innerHTML = chinaMovies.title;
    categories_Title.appendChild(h2_Title);
    contentElement.appendChild(categoriesListElement);

    const see_moreElement = document.querySelector('.see-more');
    see_moreElement.classList.add("see-more");
    categories_Title.appendChild(see_moreElement);
//movies
    const movieListElement = document.createElement("div");
    movieListElement.classList.add("movie-list");
    categoriesListElement.appendChild(movieListElement);

    chinaMovies.movies.forEach((movie)=>{
        const movieContainer = document.createElement('div');
        movieContainer.classList.add("movie");
        movieListElement.appendChild(movieContainer);

        const imgContainerElement = document.createElement('div');
        imgContainerElement.classList.add("movie-img-container");
        movieContainer.appendChild(imgContainerElement);

        const movie_img = document.createElement('img');
        imgContainerElement.appendChild(movie_img);
        movie_img.src = movie.movie_src;
        movie_img.alt = movie.movie_alt;

        const movie_title = document.createElement('p');
        movie_title.innerHTML = movie.movie_title;
        movieContainer.appendChild(movie_title);
    })
    
})