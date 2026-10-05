// Uch tildagi tarjimalar bazasi
const translations = {
    uz: {
        site_title: "NeonGame - Zamonaviy O‘yinlar Portali",
        nav_home: "Bosh sahifa",
        nav_games: "O‘yinlar",
        nav_categories: "Kategoriyalar",
        nav_about: "Biz haqimizda",
        hero_title: "O‘yin olamiga xush kelibsiz!",
        hero_desc: "Eng so‘nggi va qiziqarli neon o‘yinlarni kashf eting. O‘z mahoratingizni sinab ko‘ring va do‘stlar bilan raqobatlashing.",
        hero_btn: "O‘yinlarni ko‘rish",
        games_title: "Mashhur O‘yinlar",
        games_subtitle: "O‘zingizga yoqqan yo‘nalishni tanlang va o‘ynashni boshlang",
        search_placeholder: "O‘yin nomini qidirish...",
        cat_all: "Barchasi",
        cat_adventure: "Sarguzasht",
        cat_racing: "Poyga",
        cat_strategy: "Strategiya",
        cat_puzzle: "Boshqotirma",
        no_results_title: "Bu kategoriyada o‘yin topilmadi",
        no_results_desc: "Boshqa kalit so'z yoki kategoriyani tanlab ko'ring.",
        about_title: "Biz Haqimizda",
        about_desc: "NeonGame — bu zamonaviy veb o‘yinlar ixlosmandlari uchun maxsus yaratilgan platforma. Bizning maqsadimiz foydalanuvchilarga sifatli va qiziqarli o‘yinlarni taqdim etish hamda qulay o‘yin muhitini yaratishdir.",
        footer_rights: "© 2026 Barcha huquqlar himoyalangan.",
        play_btn: "O‘ynash",
        start_game: "O'yinni boshlash",
        loading_game: "o‘yini yuklanmoqda..."
    },
    kg: {
        site_title: "NeonGame - Заманбап Оюндар Порtалы",
        nav_home: "Башкы бет",
        nav_games: "Оюндар",
        nav_categories: "Категориялар",
        nav_about: "Биз жөнүндө",
        hero_title: "Оюндар дүйнөсүнө кош келиңиз!",
        hero_desc: "Эң акыркы жана кызыктуу неон оюндарын табыңыз. Өз жөндөмүңүздү сынап көрүңүз жана достор менен жарышыңыз.",
        hero_btn: "Оюндарды көрүү",
        games_title: "Популярдуу оюндар",
        games_subtitle: "Өзүңүзгө жаккан багытты тандап, ойноп баштаңыз",
        search_placeholder: "Оюндун атын издөө...",
        cat_all: "Баары",
        cat_adventure: "Укмуштуу",
        cat_racing: "Жарыш",
        cat_strategy: "Стратегия",
        cat_puzzle: "Баш катырма",
        no_results_title: "Бул категорияда оюн табылган жок",
        no_results_desc: "Башка ачкыч сөздү же категорияны тандап көрүңүз.",
        about_title: "Биз жөнүндө",
        about_desc: "NeonGame — бул заманбап веб-оюндарды сүйүүчүлөр үчүн атайын түзүлгөн платформа. Биздин максат колдонуучуларга сапаттуу жана кызыктуу оюндарды сунуштоо.",
        footer_rights: "© 2026 Бардык укуктар корголгон.",
        play_btn: "Ойноо",
        start_game: "Оюнду баштоо",
        loading_game: "оюну жүктөлүүдө..."
    },
    ru: {
        site_title: "NeonGame - Современный Игровой Портал",
        nav_home: "Главная",
        nav_games: "Игры",
        nav_categories: "Категории",
        nav_about: "О нас",
        hero_title: "Добро пожаловать в мир игр!",
        hero_desc: "Откройте для себя новейшие и увлекательные неоновые игры. Проверьте свои навыки и соревнуйтесь с друзьями.",
        hero_btn: "Смотреть игры",
        games_title: "Популярные игры",
        games_subtitle: "Выберите понравившееся направление и начните играть",
        search_placeholder: "Поиск игры по названию...",
        cat_all: "Все",
        cat_adventure: "Приключения",
        cat_racing: "Гонки",
        cat_strategy: "Стратегия",
        cat_puzzle: "Головоломка",
        no_results_title: "В этой категории игр не найдено",
        no_results_desc: "Попробуйте выбрать другое ключевое слово или категорию.",
        about_title: "О нас",
        about_desc: "NeonGame — это платформа, созданная специально для любителей современных веб-игр. Наша цель — предоставить качественные и интересные игры.",
        footer_rights: "© 2026 Все права защищены.",
        play_btn: "Играть",
        start_game: "Начать игру",
        loading_game: "игра загружается..."
    }
};

// Yangi, o'yin nomlariga moslashtirilgan rasmlar bazasi
const gamesData = {
    uz: [
        { id: 1, title: "Neon Cyber Runner", category: "Sarguzasht", description: "Kelajak shahridagi neon yo'laklarda yuguring, to'siqlardan sakrab o'ting va bonuslarni yig'ing.", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80" },
        { id: 2, title: "Quantum Drift", category: "Poyga", description: "O'ta tezkor kosmik avtomashinalarda neon poyga trassalarida raqiblaringizni ortda qoldiring.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80" },
        { id: 3, title: "Galaxy Tactics", category: "Strategiya", description: "Galaktikani zabt etish uchun o'z bazangizni quring, armiya to'plang va strategik janglar olib boring.", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=600&q=80" },
        { id: 4, title: "Matrix Cipher", category: "Boshqotirma", description: "Murakkab raqamli kodlarni yeching, shifrlarni buzib o'ting va tizim sirlarini oching.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { id: 5, title: "Shadow Assassin", category: "Sarguzasht", description: "Qorong'u sirlarga boy olamda yashirin harakat qiling va vazifalarni muvaffaqiyatli bajaring.", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80" },
        { id: 6, title: "Hyper Speedway", category: "Poyga", description: "Eng yuqori tezlikdagi musobaqalarda qatnashing va chempionlik kubogini qo'lga kiriting.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80" }
    ],
    kg: [
        { id: 1, title: "Neon Cyber Runner", category: "Укмуштуу", description: "Келечектеги шаардын неон тилкелеринде чуркаңыз, тоскоолдуктардан секирип өтүңүз жана бонустарды чогултуңуз.", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80" },
        { id: 2, title: "Quantum Drift", category: "Жарыш", description: "Өтө ылдам космостук унаалар менен неон трассаларында атаандаштарыңызды артта калтырыңыз.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80" },
        { id: 3, title: "Galaxy Tactics", category: "Стратегия", description: "Галактиканы басып алуу үчүн өз базаңызды куруңуз, армия топтоңуз жана стратегиялык салгылашууларды жүргүзүңүз.", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=600&q=80" },
        { id: 4, title: "Matrix Cipher", category: "Баш катырма", description: "Татаал санариптик коддорду чечиңиз, шифрлерди бузуп өтүңүз жана системанын сырларын ачыңыз.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { id: 5, title: "Shadow Assassin", category: "Укмуштуу", description: "Караңгы сырларга бай дүйнөдө жашыруун аракеттениңиз жана тапшырмаларды ийгиликтүү аткарыңыз.", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80" },
        { id: 6, title: "Hyper Speedway", category: "Жарыш", description: "Эң жогорку ылдамдыктагы мелдештерге катышып, чемпиондук кубокту колго киргизиңиз.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80" }
    ],
    ru: [
        { id: 1, title: "Neon Cyber Runner", category: "Приключения", description: "Бегайте по неоновым дорожкам города будущего, перепрыгивайте препятствия и собирайте бонусы.", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80" },
        { id: 2, title: "Quantum Drift", category: "Гонки", description: "Оставляйте соперников позади на сверхбыстрых космических авто по неоновым трассам.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80" },
        { id: 3, title: "Galaxy Tactics", category: "Стратегия", description: "Стройте свою базу, собирайте армию и ведите стратегические сражения для захвата галактики.", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=600&q=80" },
        { id: 4, title: "Matrix Cipher", category: "Головоломка", description: "Разгадывайте сложные цифровые коды, взламывайте шифры и раскрывайте секреты системы.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
        { id: 5, title: "Shadow Assassin", category: "Приключения", description: "Действуйте скрытно в мире, полном темных секретов, и успешно выполняйте задания.", image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80" },
        { id: 6, title: "Hyper Speedway", category: "Гонки", description: "Участвуйте в состязаниях на максимальной скорости и завоюйте чемпионский кубок.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80" }
    ]
};

let currentLang = 'uz';
let currentCategory = 'all';
let searchQuery = '';

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const gameModal = document.getElementById('gameModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    filterAndSearchGames();
}

langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setLanguage(e.target.getAttribute('data-lang'));
    });
});

function renderGames(gamesToRender) {
    gamesGrid.innerHTML = '';

    if (gamesToRender.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    gamesToRender.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');

        card.innerHTML = `
            <div class="game-img-container">
                <img src="${game.image}" alt="${game.title}">
                <span class="game-tag">${game.category}</span>
            </div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <button class="btn btn-primary play-btn" data-id="${game.id}">${translations[currentLang].play_btn}</button>
            </div>
        `;

        gamesGrid.appendChild(card);
    });

    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameId = parseInt(e.target.getAttribute('data-id'));
            openGameModal(gameId);
        });
    });
}

function filterAndSearchGames() {
    let games = gamesData[currentLang];
    let filtered = games;

    if (currentCategory !== 'all') {
        const categoryMap = {
            'uz': { 'Sarguzasht': 'Sarguzasht', 'Poyga': 'Poyga', 'Strategiya': 'Strategiya', 'Boshqotirma': 'Boshqotirma' },
            'kg': { 'Sarguzasht': 'Укмуштуу', 'Poyga': 'Жарыш', 'Strategiya': 'Стратегия', 'Boshqotirma': 'Баш катырма' },
            'ru': { 'Sarguzasht': 'Приключения', 'Poyga': 'Гонки', 'Strategiya': 'Стратегия', 'Boshqotirma': 'Головоломка' }
        };
        
        let targetCat = categoryMap[currentLang][Object.keys(categoryMap['uz']).find(key => categoryMap['uz'][key] === currentCategory || currentCategory.includes(key))] || currentCategory;
        
        filtered = filtered.filter(game => game.category === targetCat || game.category === currentCategory);
    }

    if (searchQuery.trim() !== '') {
        filtered = filtered.filter(game => 
            game.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    renderGames(filtered);
}

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndSearchGames();
});

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentCategory = e.target.getAttribute('data-category');
        filterAndSearchGames();
    });
});

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

function openGameModal(id) {
    const games = gamesData[currentLang];
    const game = games.find(g => g.id === id);
    if (!game) return;

    modalBody.innerHTML = `
        <h2>${game.title}</h2>
        <img src="${game.image}" alt="${game.title}">
        <p><strong>${translations[currentLang].cat_all === 'Баары' ? 'Категория:' : (currentLang === 'ru' ? 'Категория:' : 'Kategoriya:')}</strong> ${game.category}</p>
        <p>${game.description}</p>
        <button class="btn btn-primary" onclick="alert('${game.title} ${translations[currentLang].loading_game}')">${translations[currentLang].start_game}</button>
    `;

    gameModal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    gameModal.classList.remove('active');
});

gameModal.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        gameModal.classList.remove('active');
    }
});

setLanguage('uz');