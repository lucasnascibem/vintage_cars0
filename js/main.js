document.addEventListener('DOMContentLoaded', function () {
            const body = document.body;
            const carListContainer = document.getElementById('car-list');

            const menuToggle = document.getElementById('menuToggle');
            const menuContainer = document.querySelector('.menu-container');
            const themeBtn = document.getElementById('themeBtn');
            const themeText = document.getElementById('themeText');
            const infiniteBtn = document.getElementById('infiniteScrollBtn');
            const infiniteIcon = document.getElementById('infiniteIcon');

            // Toggle menu open/close
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                menuContainer.classList.toggle('menu-open');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuContainer.contains(e.target)) {
                    menuContainer.classList.remove('menu-open');
                }
            });

            // Theme Management via localStorage
            function updateTheme() {
                const isLight = body.classList.contains('light-mode');
                themeText.textContent = isLight ? 'Modo Escuro' : 'Modo Claro';
                localStorage.setItem('vintageTheme', isLight ? 'light' : 'dark');
            }

            // Load saved theme
            const savedTheme = localStorage.getItem('vintageTheme');
            if (savedTheme === 'light') {
                body.classList.add('light-mode');
            }
            updateTheme();

            themeBtn.addEventListener('click', () => {
                body.classList.toggle('light-mode');
                updateTheme();
                menuContainer.classList.remove('menu-open');
            });

            // Infinite Scroll State
            let isInfiniteScroll = localStorage.getItem('vintageInfinite') !== 'false';
            function updateInfiniteBtn() {
                infiniteIcon.textContent = isInfiniteScroll ? '✅' : '⬜';
            }
            updateInfiniteBtn();

            infiniteBtn.addEventListener('click', () => {
                isInfiniteScroll = !isInfiniteScroll;
                localStorage.setItem('vintageInfinite', isInfiniteScroll);
                updateInfiniteBtn();
                menuContainer.classList.remove('menu-open');
            });

            // Render Cars Dynamically
            function renderCars() {
                carListContainer.innerHTML = '';
                carsData.forEach((car, index) => {
                    const delay = (index * 0.1).toFixed(1);
                    const article = document.createElement('article');
                    article.className = 'car';
                    article.tabIndex = 0;
                    article.style.animationDelay = `${delay}s`;

                    article.innerHTML = `
                        <div class="img-wrapper">
                            <img src="${encodeURI(car.image)}" alt="${car.name}">
                        </div>
                        <div class="car-info">
                            <h2>${car.name}</h2>
                            <div class="year">${car.year}</div>
                            <p>${car.shortDesc}</p>
                        </div>
                    `;
                    article.addEventListener('click', () => {
                        window.location.href = `detalhes.html?carro=${car.id}`;
                    });
                    
                    carListContainer.appendChild(article);
                });

                // Attach hover listeners after rendering
                const carsElements = document.querySelectorAll('.car');
                carsElements.forEach(carEl => {
                    carEl.addEventListener('mouseenter', () => {
                        carListContainer.classList.add('is-hovering');
                    });
                    carEl.addEventListener('mouseleave', () => {
                        carListContainer.classList.remove('is-hovering');
                    });
                });
            }

            renderCars();

            // Grid/List Toggle Logic
            const gridBtn = document.getElementById('gridBtn');
            const listBtn = document.getElementById('listBtn');
            
            const savedView = localStorage.getItem('vintageView') || 'grid';
            if (savedView === 'list') {
                carListContainer.classList.add('list-view');
                if (listBtn) listBtn.classList.add('active');
                if (gridBtn) gridBtn.classList.remove('active');
            }

            if (gridBtn && listBtn) {
                gridBtn.addEventListener('click', () => {
                    carListContainer.classList.remove('list-view');
                    gridBtn.classList.add('active');
                    listBtn.classList.remove('active');
                    localStorage.setItem('vintageView', 'grid');
                });

                listBtn.addEventListener('click', () => {
                    carListContainer.classList.add('list-view');
                    listBtn.classList.add('active');
                    gridBtn.classList.remove('active');
                    localStorage.setItem('vintageView', 'list');
                });
            }
        });