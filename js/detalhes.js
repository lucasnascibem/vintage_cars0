document.addEventListener('DOMContentLoaded', () => {
    // Theme Management via localStorage
    const body = document.body;
    const savedTheme = localStorage.getItem('vintageTheme');
    
    // Set default mode (dark mode is default in style.css unless light-mode is added)
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('carro');

    if (!carId) {
        window.location.href = 'index.html';
        return;
    }

    // Find car in carsData
    const car = carsData.find(c => c.id === carId);

    if (!car) {
        alert('Carro não encontrado no catálogo!');
        window.location.href = 'index.html';
        return;
    }

    // Populate the UI
    document.getElementById('car-title').textContent = car.name;
    document.title = `${car.name} - Clássicos Brasileiros`;

    const detailsContainer = document.getElementById('car-details');

    // Create gallery HTML if photos exist
    let galleryHtml = '';
    if (car.fotos && car.fotos.length > 0) {
        galleryHtml = `
        <div class="gallery">
            ${car.fotos.map(foto => `<img src="${encodeURI(foto)}" alt="${car.name} - Galeria" onclick="document.getElementById('main-img').src='${encodeURI(foto)}'">`).join('')}
        </div>`;
    }

    detailsContainer.innerHTML = `
        <div class="main-image-container">
            <img id="main-img" src="${encodeURI(car.image)}" alt="${car.name}">
        </div>
        
        ${galleryHtml}

        <div class="details-content">
            <h3>História e Detalhes</h3>
            <p>${car.historicalDesc || car.shortDesc}</p>
            
            <h3 style="margin-top: 3rem;">Ficha Técnica</h3>
            <div class="tech-specs">
                <div class="spec-item">
                    <strong>Motor</strong>
                    <span>${car.technicalSpecs?.motor || 'N/A'}</span>
                </div>
                <div class="spec-item">
                    <strong>Potência</strong>
                    <span>${car.technicalSpecs?.potencia || 'N/A'}</span>
                </div>
                <div class="spec-item">
                    <strong>Câmbio</strong>
                    <span>${car.technicalSpecs?.cambio || 'N/A'}</span>
                </div>
                <div class="spec-item">
                    <strong>Anos de Fabricação</strong>
                    <span>${car.year || 'N/A'}</span>
                </div>
            </div>
        </div>
    `;
});
