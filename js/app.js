// DỮ LIỆU PHIM (25 BỘ PHIM NETFLIX STYLE)
const moviesData = [
    {
        id: 1,
        title: "Inception (Kẻ Đánh Cắp Giấc Mơ)",
        year: 2010,
        genres: ["Hành động", "Khoa học viễn tưởng", "Phiêu lưu"],
        rating: 8.8,
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        description: "Trộm thông tin bằng cách xâm nhập vào giấc mơ của người khác.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80"
    },
    {
        id: 2,
        title: "The Dark Knight (Kị Sĩ Bóng Đêm)",
        year: 2008,
        genres: ["Hành động", "Tội phạm", "Kịch tính"],
        rating: 9.0,
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "Batman phải đối mặt với kẻ thù nguy hiểm nhất: Joker.",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
    },
    {
        id: 3,
        title: "Interstellar (Hố Đen Vũ Trụ)",
        year: 2014,
        genres: ["Khoa học viễn tưởng", "Phiêu lưu", "Kịch tính"],
        rating: 8.6,
        director: "Christopher Nolan",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        description: "Hành trình du hành qua hố đen tìm kiếm hành tinh mới cho loài người.",
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80"
    },
    {
        id: 4,
        title: "Spirited Away (Vùng Đất Linh Hồn)",
        year: 2001,
        genres: ["Hoạt hình", "Phiêu lưu", "Gia đình"],
        rating: 8.6,
        director: "Hayao Miyazaki",
        actors: ["Rumi Hiiragi", "Miyu Irano"],
        description: "Cô bé Chihiro lạc vào thế giới thần linh kỳ bí để cứu cha mẹ.",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
    },
    {
        id: 5,
        title: "Parasite (Ký Sinh Trùng)",
        year: 2019,
        genres: ["Tội phạm", "Kịch tính", "Hài"],
        rating: 8.5,
        director: "Bong Joon-ho",
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        description: "Sự phân hóa giàu nghèo sâu sắc trong xã hội hiện đại.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80"
    },
    {
        id: 6,
        title: "Stranger Things (Thế Giới Lạ)",
        year: 2016,
        genres: ["Khoa học viễn tưởng", "Kinh dị", "Giật gân"],
        rating: 8.7,
        director: "The Duffer Brothers",
        actors: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        description: "Một nhóm trẻ em khám phá ra những bí mật siêu nhiên tại thị trấn Hawkins.",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
    },
    {
        id: 7,
        title: "Squid Game (Trò Chơi Con Mực)",
        year: 2021,
        genres: ["Hành động", "Kịch tính", "Tội phạm"],
        rating: 8.0,
        director: "Hwang Dong-hyuk",
        actors: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
        description: "Những người túng thiếu tham gia vào trò chơi sinh tử để giành giải thưởng khổng lồ.",
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
    },
    {
        id: 8,
        title: "Money Heist (Phi Vụ Triệu Đô)",
        year: 2017,
        genres: ["Hành động", "Tội phạm", "Giật gân"],
        rating: 8.2,
        director: "Álex Pina",
        actors: ["Álvaro Morte", "Úrsula Corberó", "Itziar Ituño"],
        description: "Một thiên tài tội phạm có biệt danh 'Giáo sư' thực hiện vụ cướp lớn nhất lịch sử.",
        poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80"
    },
    {
        id: 9,
        title: "Avatar: The Way of Water",
        year: 2022,
        genres: ["Hành động", "Khoa học viễn tưởng", "Phiêu lưu"],
        rating: 7.6,
        director: "James Cameron",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        description: "Gia đình Jake Sully khám phá các vùng biển mới trên hành tinh Pandora.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
    },
    {
        id: 10,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        genres: ["Hoạt hình", "Hành động", "Phiêu lưu"],
        rating: 8.7,
        director: "Joaquim Dos Santos",
        actors: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
        description: "Miles Morales phiêu lưu qua đa vũ trụ gặp gỡ các Người Nhện khác.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80"
    },
    {
        id: 11,
        title: "Wednesday",
        year: 2022,
        genres: ["Giả tưởng", "Kinh dị", "Hài"],
        rating: 8.1,
        director: "Tim Burton",
        actors: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
        description: "Wednesday Addams làm quen với năng lực tâm linh tại Học viện Nevermore.",
        poster: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&q=80"
    },
    {
        id: 12,
        title: "The Queen's Gambit",
        year: 2020,
        genres: ["Kịch tính"],
        rating: 8.5,
        director: "Scott Frank",
        actors: ["Anya Taylor-Joy", "Bill Camp", "Marielle Heller"],
        description: "Hành trình vươn lên thành kỳ thủ cờ vua xuất sắc nhất thế giới của một cô bé mồ côi.",
        poster: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&q=80"
    },
    {
        id: 13,
        title: "Breaking Bad",
        year: 2008,
        genres: ["Tội phạm", "Kịch tính"],
        rating: 9.5,
        director: "Vince Gilligan",
        actors: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        description: "Một giáo viên hóa học trung học mắc bệnh hiểm nghèo chuyển sang chế tạo ma túy.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80"
    },
    {
        id: 14,
        title: "Oppenheimer",
        year: 2023,
        genres: ["Kịch tính", "Lịch sử"],
        rating: 8.9,
        director: "Christopher Nolan",
        actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        description: "Cuộc đời của nhà vật lý J. Robert Oppenheimer và dự án chế tạo bom nguyên tử.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80"
    },
    {
        id: 15,
        title: "John Wick: Chapter 4",
        year: 2023,
        genres: ["Hành động", "Tội phạm", "Giật gân"],
        rating: 7.8,
        director: "Chad Stahelski",
        actors: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
        description: "John Wick khám phá con đường đánh bại High Table để giành lấy sự tự do.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80"
    },
    {
        id: 16,
        title: "Top Gun: Maverick",
        year: 2022,
        genres: ["Hành động", "Phiêu lưu"],
        rating: 8.3,
        director: "Joseph Kosinski",
        actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        description: "Pete Maverick huấn luyện một biệt đội phi công trẻ cho nhiệm vụ bất khả thi.",
        poster: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&q=80"
    },
    {
        id: 17,
        title: "The Batman",
        year: 2022,
        genres: ["Hành động", "Tội phạm", "Kịch tính"],
        rating: 7.8,
        director: "Matt Reeves",
        actors: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
        description: "Batman điều tra tên sát nhân hàng loạt Riddler nhắm vào giới thượng lưu Gotham.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80"
    },
    {
        id: 18,
        title: "Dune: Part Two",
        year: 2024,
        genres: ["Khoa học viễn tưởng", "Phiêu lưu", "Kịch tính"],
        rating: 8.6,
        director: "Denis Villeneuve",
        actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        description: "Paul Atreides hợp tác với Chani và người Fremen để trả thù những kẻ hủy diệt gia tộc.",
        poster: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80"
    },
    {
        id: 19,
        title: "Coco",
        year: 2017,
        genres: ["Hoạt hình", "Gia đình", "Phiêu lưu"],
        rating: 8.4,
        director: "Lee Unkrich",
        actors: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
        description: "Cậu bé Miguel bước vào Vùng Đất Người Chết để tìm hiểu bí mật gia đình.",
        poster: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
    },
    {
        id: 20,
        title: "Interstellar Odyssey",
        year: 2021,
        genres: ["Khoa học viễn tưởng", "Phiêu lưu"],
        rating: 8.1,
        director: "Christopher Nolan",
        actors: ["Tom Hardy", "Cillian Murphy"],
        description: "Cuộc chiến sinh tồn của phi hành đoàn giữa các vì sao xa xôi.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
        id: 21,
        title: "The Matrix",
        year: 1999,
        genres: ["Hành động", "Khoa học viễn tưởng"],
        rating: 8.7,
        director: "The Wachowskis",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "Hacker Neo phát hiện ra sự thật rằng thế giới thực là một mô phỏng máy tính.",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80"
    },
    {
        id: 22,
        title: "Interstellar Echoes",
        year: 2022,
        genres: ["Khoa học viễn tưởng", "Kịch tính"],
        rating: 8.0,
        director: "Ridley Scott",
        actors: ["Matt Damon", "Jessica Chastain"],
        description: "Khám phá các trạm không gian ẩn giấu ngoài rìa dải Ngân Hà.",
        poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&q=80"
    },
    {
        id: 23,
        title: "The Witcher",
        year: 2019,
        genres: ["Hành động", "Phiêu lưu", "Giả tưởng"],
        rating: 8.0,
        director: "Lauren Schmidt Hissrich",
        actors: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        description: "Thợ săn quái vật đột biến Geralt xứ Rivia tìm kiếm định mệnh của mình trong thế giới hỗn loạn.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80"
    },
    {
        id: 24,
        title: "Gladiator",
        year: 2000,
        genres: ["Hành động", "Kịch tính", "Lịch sử"],
        rating: 8.5,
        director: "Ridley Scott",
        actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        description: "Vị tướng La Mã bị phản bội quay trở lại Đấu trường La Mã với tư cách là một võ sĩ giác đấu.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80"
    },
    {
        id: 25,
        title: "The Lord of the Rings",
        year: 2001,
        genres: ["Phiêu lưu", "Giả tưởng", "Hành động"],
        rating: 8.8,
        director: "Peter Jackson",
        actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        description: "Hành trình tiêu diệt chiếc Nhẫn Chúa tột đỉnh quyền lực tại vùng đất Trung Địa.",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
    }
];

// STATE CỦA ỨNG DỤNG
let selectedGenres = [];
let searchQuery = "";

// 1. LIGHT / DARK MODE (LocalStorage)
function initTheme() {
    const themeCheckbox = document.getElementById("checkbox-theme");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener("change", () => {
        if (themeCheckbox.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
}

// 2. HIỂN THỊ DANH SÁCH PHIM
function renderMovies(movies) {
    const grid = document.getElementById("movie-grid");
    const countEl = document.getElementById("movie-count");
    const emptyState = document.getElementById("empty-state");

    grid.innerHTML = "";
    countEl.textContent = movies.length;

    if (movies.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="poster-wrapper">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            </div>
            <div class="movie-info">
                <h4 class="movie-title">${movie.title}</h4>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        `;
        card.addEventListener("click", () => openModal(movie));
        grid.appendChild(card);
    });
}

// 3. TỰ ĐỘNG PHÁT HIỆN & TẠO CHECKBOX THỂ LOẠI
function initGenres() {
    const genreContainer = document.getElementById("genre-checkbox-list");
    
    const allGenres = moviesData.flatMap(movie => movie.genres);
    const uniqueGenres = [...new Set(allGenres)].sort();

    genreContainer.innerHTML = "";
    uniqueGenres.forEach(genre => {
        const label = document.createElement("label");
        label.className = "checkbox-item";
        label.innerHTML = `
            <input type="checkbox" value="${genre}">
            <span>${genre}</span>
        `;
        
        const checkbox = label.querySelector("input");
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                selectedGenres.push(genre);
            } else {
                selectedGenres = selectedGenres.filter(g => g !== genre);
            }
            filterMovies();
        });

        genreContainer.appendChild(label);
    });
}

// 4. BỘ LỌC TÍCH HỢP (THỂ LOẠI + TÌM KIẾM ĐỒNG THỜI)
function filterMovies() {
    const filtered = moviesData.filter(movie => {
        // Lọc theo từ khóa tìm kiếm (không phân biệt hoa/thường)
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());

        // Lọc theo thể loại: Nếu chọn nhiều checkbox, phim thuộc BẤT KỲ thể loại nào trong số đó đều được hiển thị (dùng .some())
        const matchesGenre = selectedGenres.length === 0 || 
            selectedGenres.some(g => movie.genres.includes(g));

        return matchesSearch && matchesGenre;
    });

    renderMovies(filtered);
}

// 5. KĨ THUẬT DEBOUNCE TỐI ƯU TÌM KIẾM
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function initSearch() {
    const searchInput = document.getElementById("search-input");
    
    const handleSearch = debounce((e) => {
        searchQuery = e.target.value.trim();
        filterMovies();
    }, 300);

    searchInput.addEventListener("input", handleSearch);
}

// 6. POPUP MODAL CHI TIẾT PHIM
function openModal(movie) {
    const modal = document.getElementById("movie-modal");
    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <img src="${movie.poster}" alt="${movie.title}">
            <div>
                <h2>${movie.title} (${movie.year})</h2>
                <p style="margin: 10px 0; color: #f39c12;">
                    <i class="fa-solid fa-star"></i> <strong>${movie.rating}</strong> / 10
                </p>
                <p><strong>Thể loại:</strong> ${movie.genres.join(", ")}</p>
                <p><strong>Đạo diễn:</strong> ${movie.director}</p>
                <p><strong>Diễn viên:</strong> ${movie.actors.join(", ")}</p>
                <hr style="margin: 15px 0; border: 0; border-top: 1px solid var(--border-color);">
                <p><strong>Mô tả nội dung:</strong></p>
                <p style="margin-top: 6px; line-height: 1.5;">${movie.description}</p>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
}

function initModal() {
    const modal = document.getElementById("movie-modal");
    const closeBtn = document.getElementById("modal-close");
    const overlay = document.getElementById("modal-overlay");

    const closeModal = () => modal.classList.add("hidden");

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
}

// 7. MODAL HIỂN THỊ 2 ẢNH KẾT QUẢ BÀI TẬP 37 & 38
function openAssignmentModal(title, imagePaths) {
    const modal = document.getElementById("assignment-modal");
    const titleEl = document.getElementById("assign-modal-title");
    const container = document.getElementById("assign-modal-images");

    titleEl.textContent = `Kết quả thực hiện: ${title} (2 ảnh minh họa)`;
    container.innerHTML = "";

    imagePaths.forEach((path, index) => {
        const imgCard = document.createElement("div");
        imgCard.style.cssText = "background: var(--bg-color); padding: 10px; border-radius: 8px; border: 1px solid var(--border-color);";
        imgCard.innerHTML = `
            <p style="font-size: 0.85rem; font-weight: bold; margin-bottom: 6px; color: var(--accent-color);">
                <i class="fa-regular fa-image"></i> Ảnh ${index + 1}
            </p>
            <a href="${path}" target="_blank" title="Bấm để xem ảnh kích thước gốc">
                <img src="${path}" 
                     alt="${title} - Ảnh ${index + 1}" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x250?text=Chua+co+anh+${index+1}';"
                     style="width: 100%; height: 220px; object-fit: cover; border-radius: 6px; cursor: pointer; display: block;">
            </a>
        `;
        container.appendChild(imgCard);
    });

    modal.classList.remove("hidden");
}

function closeAssignmentModal() {
    const modal = document.getElementById("assignment-modal");
    modal.classList.add("hidden");
}

// KHỞI TẠO KHI TẢI TRANG
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initGenres();
    initSearch();
    initModal();
    renderMovies(moviesData);
});
