import re

with open('carros antigos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert Toggle buttons
html_buttons = """        <div class="controls-bar">
            <div class="view-toggles">
                <button id="gridBtn" class="active" aria-label="Visualização em Grade">📱 Grade</button>
                <button id="listBtn" aria-label="Visualização em Lista">📄 Lista</button>
            </div>
        </div>
        <section id="car-list">"""
content = content.replace('<section id="car-list">', html_buttons)

# 2. Update renderCars logic and add button logic
old_js = """            // Render Cars Dynamically
            function renderCars() {
                carListContainer.innerHTML = '';
                carsData.forEach(car => {
                    const article = document.createElement('article');
                    article.className = 'car';
                    article.style.animationDelay = `${Math.random() * 0.3}s`;

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
                    carListContainer.appendChild(article);
                });
            }

            renderCars();
        });"""

new_js = """            // Render Cars Dynamically
            function renderCars() {
                carListContainer.innerHTML = '';
                carsData.forEach(car => {
                    const article = document.createElement('article');
                    article.className = 'car';
                    article.style.animationDelay = `${Math.random() * 0.3}s`;

                    article.innerHTML = `
                        <div class="img-wrapper">
                            <img src="${car.image}" alt="${car.name}">
                        </div>
                        <div class="car-info">
                            <h2>${car.name}</h2>
                            <div class="year">${car.year}</div>
                            <p>${car.shortDesc}</p>
                        </div>
                    `;
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
                listBtn.classList.add('active');
                gridBtn.classList.remove('active');
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
        });"""

# Handle potential whitespace differences
import textwrap
content = content.replace(old_js, new_js)

with open('carros antigos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Stage 3 injected!")
