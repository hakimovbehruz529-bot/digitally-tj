// База данных компонентов
const componentsDB = {
    cpu: [
        { id: 1, name: "Intel Core i5-12400F", socket: "LGA1700", tdp: 65, price: 149, specs: "6 ядер, 12 потоков" },
        { id: 2, name: "Intel Core i7-13700K", socket: "LGA1700", tdp: 125, price: 349, specs: "16 ядер, 24 потока" },
        { id: 3, name: "AMD Ryzen 5 5600X", socket: "AM4", tdp: 65, price: 139, specs: "6 ядер, 12 потоков" },
        { id: 4, name: "AMD Ryzen 7 5800X3D", socket: "AM4", tdp: 105, price: 299, specs: "8 ядер, 16 потоков" },
        { id: 5, name: "Intel Core i9-13900K", socket: "LGA1700", tdp: 125, price: 549, specs: "24 ядра, 32 потока" }
    ],
    motherboard: [
        { id: 1, name: "ASUS PRIME B660M-A", socket: "LGA1700", ddr: "DDR4", price: 129, specs: "mATX, PCIe 4.0" },
        { id: 2, name: "MSI PRO Z790-P", socket: "LGA1700", ddr: "DDR5", price: 199, specs: "ATX, PCIe 5.0" },
        { id: 3, name: "GIGABYTE B450 AORUS", socket: "AM4", ddr: "DDR4", price: 109, specs: "ATX, RGB Fusion" },
        { id: 4, name: "ASRock B760M", socket: "LGA1700", ddr: "DDR5", price: 149, specs: "mATX, Steel legend" },
        { id: 5, name: "ASUS TUF X570", socket: "AM4", ddr: "DDR4", price: 179, specs: "ATX, TUF components" }
    ],
    gpu: [
        { id: 1, name: "NVIDIA RTX 3060 12GB", price: 299, specs: "12GB GDDR6, Ray Tracing" },
        { id: 2, name: "NVIDIA RTX 4070 Ti", price: 799, specs: "12GB GDDR6X, DLSS 3" },
        { id: 3, name: "AMD RX 6700 XT", price: 349, specs: "12GB GDDR6, FSR" },
        { id: 4, name: "NVIDIA RTX 4090", price: 1599, specs: "24GB GDDR6X, DLSS 3" },
        { id: 5, name: "AMD RX 7900 XT", price: 899, specs: "20GB GDDR6, FSR 3" }
    ],
    ram: [
        { id: 1, name: "Kingston Fury 16GB DDR4", ddr: "DDR4", price: 45, specs: "3200MHz, CL16" },
        { id: 2, name: "Corsair 32GB DDR4", ddr: "DDR4", price: 85, specs: "3600MHz, CL18" },
        { id: 3, name: "Kingston Fury 16GB DDR5", ddr: "DDR5", price: 65, specs: "5200MHz, CL36" },
        { id: 4, name: "Corsair 32GB DDR5", ddr: "DDR5", price: 119, specs: "5600MHz, CL36" },
        { id: 5, name: "G.Skill 64GB DDR5", ddr: "DDR5", price: 219, specs: "6000MHz, CL30" }
    ],
    ssd: [
        { id: 1, name: "Samsung 980 1TB NVMe", price: 89, specs: "3500MB/s" },
        { id: 2, name: "WD Blue SN570 500GB", price: 49, specs: "3500MB/s" },
        { id: 3, name: "Kingston KC3000 2TB", price: 159, specs: "7000MB/s" }
    ],
    hdd: [
        { id: 1, name: "Seagate BarraCuda 1TB", price: 49, specs: "7200RPM" },
        { id: 2, name: "WD Blue 2TB", price: 69, specs: "5400RPM" },
        { id: 3, name: "Toshiba 4TB", price: 109, specs: "7200RPM" }
    ],
    cooler: [
        { id: 1, name: "DeepCool AK400", sockets: ["LGA1700", "AM4"], price: 39, specs: "TDP 220W" },
        { id: 2, name: "Noctua NH-D15", sockets: ["LGA1700", "AM4"], price: 99, specs: "TDP 250W" },
        { id: 3, name: "Arctic Liquid Freezer II", sockets: ["LGA1700", "AM4"], price: 89, specs: "240mm" },
        { id: 4, name: "NZXT Kraken X73", sockets: ["LGA1700", "AM4"], price: 179, specs: "360mm" }
    ],
    case: [
        { id: 1, name: "Fractal Design Meshify C", price: 89, specs: "ATX" },
        { id: 2, name: "Lian Li LANCOOL 216", price: 99, specs: "ATX" },
        { id: 3, name: "Corsair 4000D Airflow", price: 104, specs: "ATX" }
    ]
};

// Товары для каталога
const products = [
    { id: 1, name: "Intel Core i7-13700K", category: "Процессор", price: 349, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=200&fit=crop" },
    { id: 2, name: "NVIDIA RTX 4070 Ti", category: "Видеокарта", price: 799, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=200&fit=crop" },
    { id: 3, name: "ASUS ROG STRIX B760", category: "Материнская плата", price: 199, image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=300&h=200&fit=crop" },
    { id: 4, name: "Corsair 32GB DDR5", category: "ОЗУ", price: 119, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop" },
    { id: 5, name: "Samsung 980 PRO 1TB", category: "SSD", price: 89, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop" },
    { id: 6, name: "NZXT H510 Elite", category: "Корпус", price: 149, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=200&fit=crop" },
    { id: 7, name: "NZXT Kraken X73", category: "Охлаждение", price: 179, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=200&fit=crop" },
    { id: 8, name: "AMD Ryzen 9 7950X", category: "Процессор", price: 549, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=200&fit=crop" }
];

// Состояние сборки
let build = {
    cpu: null,
    motherboard: null,
    gpu: null,
    ram: [],
    ssd: null,
    hdd: null,
    cooler: null,
    case: null
};

let currentCategory = 'cpu';

// Загрузка товаров в каталог
function loadProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-price">$${product.price}</div>
                <button class="product-btn" onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Загрузка компонентов по категории
function loadComponents(category) {
    const components = componentsDB[category];
    const container = document.getElementById('components-list');
    
    if (!components || !container) return;
    
    container.innerHTML = `
        <div class="components-grid">
            ${components.map(comp => `
                <div class="component-card" onclick="selectComponent('${category}', ${comp.id})">
                    <div class="component-name">${comp.name}</div>
                    <div class="component-specs">${comp.specs || ''}</div>
                    <div class="component-price">$${comp.price}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Выбор компонента
function selectComponent(category, id) {
    const component = componentsDB[category].find(c => c.id === id);
    if (!component) return;
    
    if (category === 'ram') {
        if (build.ram.length < 4) {
            build.ram.push(component);
        } else {
            alert('Максимум 4 планки оперативной памяти!');
            return;
        }
    } else {
        build[category] = component;
    }
    
    updateBuildDisplay();
    loadComponents(currentCategory);
}

// Удаление компонента
function removeComponent(category, index = null) {
    if (category === 'ram' && index !== null) {
        build.ram.splice(index, 1);
    } else {
        build[category] = null;
    }
    updateBuildDisplay();
}

// Обновление отображения сборки
function updateBuildDisplay() {
    const container = document.getElementById('selected-list');
    const totalPriceSpan = document.getElementById('total-price');
    
    if (!container) return;
    
    const categories = [
        { key: 'cpu', name: 'Процессор', icon: 'fa-microchip' },
        { key: 'motherboard', name: 'Материнская плата', icon: 'fa-server' },
        { key: 'gpu', name: 'Видеокарта', icon: 'fa-tv' },
        { key: 'ram', name: 'ОЗУ', icon: 'fa-memory', isArray: true },
        { key: 'ssd', name: 'SSD', icon: 'fa-microchip' },
        { key: 'hdd', name: 'HDD', icon: 'fa-hdd' },
        { key: 'cooler', name: 'Охлаждение', icon: 'fa-fan' },
        { key: 'case', name: 'Корпус', icon: 'fa-desktop' }
    ];
    
    let hasComponents = false;
    let totalPrice = 0;
    
    const html = categories.map(cat => {
        if (cat.isArray) {
            const items = build[cat.key];
            if (items && items.length > 0) {
                hasComponents = true;
                return items.map((item, idx) => {
                    totalPrice += item.price;
                    return `
                        <div class="selected-item">
                            <div class="selected-item-info">
                                <div class="selected-item-name"><i class="fas ${cat.icon}"></i> ${cat.name} ${idx + 1}</div>
                                <div class="selected-item-name">${item.name}</div>
                                <div class="selected-item-price">$${item.price}</div>
                            </div>
                            <div class="selected-item-remove" onclick="removeComponent('${cat.key}', ${idx})">
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>
                    `;
                }).join('');
            }
            return '';
        } else {
            const item = build[cat.key];
            if (item) {
                hasComponents = true;
                totalPrice += item.price;
                return `
                    <div class="selected-item">
                        <div class="selected-item-info">
                            <div class="selected-item-name"><i class="fas ${cat.icon}"></i> ${cat.name}</div>
                            <div class="selected-item-name">${item.name}</div>
                            <div class="selected-item-price">$${item.price}</div>
                        </div>
                        <div class="selected-item-remove" onclick="removeComponent('${cat.key}')">
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                `;
            }
            return '';
        }
    }).join('');
    
    if (!hasComponents) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tools"></i>
                <p>Выберите компоненты для сборки ПК</p>
            </div>
        `;
    } else {
        container.innerHTML = html;
    }
    
    totalPriceSpan.textContent = `$${totalPrice}`;
}

// Проверка совместимости
function checkCompatibility() {
    const errors = [];
    const warnings = [];
    
    // Проверка сокета процессора и материнской платы
    if (build.cpu && build.motherboard) {
        if (build.cpu.socket !== build.motherboard.socket) {
            errors.push(`❌ Процессор ${build.cpu.name} (${build.cpu.socket}) не подходит к материнской плате ${build.motherboard.name} (${build.motherboard.socket})`);
        }
    }
    
    // Проверка DDR памяти
    if (build.motherboard && build.ram.length > 0) {
        const mbDDR = build.motherboard.ddr;
        for (const ram of build.ram) {
            if (mbDDR !== ram.ddr) {
                errors.push(`❌ Оперативная память ${ram.name} (${ram.ddr}) не совместима с материнской платой (${mbDDR})`);
            }
        }
    }
    
    // Проверка кулера
    if (build.cooler && build.cpu) {
        if (!build.cooler.sockets.includes(build.cpu.socket)) {
            errors.push(`❌ Кулер ${build.cooler.name} не поддерживает сокет ${build.cpu.socket}`);
        }
    }
    
    // Предупреждение по TDP
    if (build.cooler && build.cpu && build.cpu.tdp > 120 && !build.cooler.name.includes('NH-D15')) {
        warnings.push(`⚠️ Для процессора ${build.cpu.name} (TDP ${build.cpu.tdp}W) рекомендуется более мощный кулер`);
    }
    
    const modal = document.getElementById('compatibility-modal');
    const resultDiv = document.getElementById('compatibility-result');
    
    if (errors.length > 0) {
        resultDiv.innerHTML = `<div class="compatibility-error">${errors.join('<br>')}</div>`;
    } else if (warnings.length > 0) {
        resultDiv.innerHTML = `<div class="compatibility-success">⚠️ ${warnings.join('<br>')}<br><br>✅ Сборка возможна, но есть предупреждения!</div>`;
    } else {
        const totalPrice = getTotalPrice();
        resultDiv.innerHTML = `<div class="compatibility-success">✅ Все компоненты совместимы!<br><br>💰 Общая стоимость: $${totalPrice}<br><br>Отличная сборка!</div>`;
    }
    
    modal.style.display = 'flex';
}

// Получение общей цены
function getTotalPrice() {
    let total = 0;
    if (build.cpu) total += build.cpu.price;
    if (build.motherboard) total += build.motherboard.price;
    if (build.gpu) total += build.gpu.price;
    if (build.ram) build.ram.forEach(r => total += r.price);
    if (build.ssd) total += build.ssd.price;
    if (build.hdd) total += build.hdd.price;
    if (build.cooler) total += build.cooler.price;
    if (build.case) total += build.case.price;
    return total;
}

// Экспорт в Excel
function exportToExcel() {
    const data = [];
    
    // Заголовки
    data.push(['DIGITALLY.TJ - СБОРКА ПК']);
    data.push([`Дата: ${new Date().toLocaleString()}`]);
    data.push([]);
    data.push(['Категория', 'Компонент', 'Характеристики', 'Цена (USD)']);
    
    if (build.cpu) data.push(['Процессор', build.cpu.name, build.cpu.specs || '-', build.cpu.price]);
    if (build.motherboard) data.push(['Материнская плата', build.motherboard.name, build.motherboard.specs || '-', build.motherboard.price]);
    if (build.gpu) data.push(['Видеокарта', build.gpu.name, build.gpu.specs || '-', build.gpu.price]);
    if (build.ram) {
        build.ram.forEach((ram, i) => {
            data.push([`ОЗУ (планка ${i+1})`, ram.name, ram.specs || '-', ram.price]);
        });
    }
    if (build.ssd) data.push(['SSD', build.ssd.name, build.ssd.specs || '-', build.ssd.price]);
    if (build.hdd) data.push(['HDD', build.hdd.name, build.hdd.specs || '-', build.hdd.price]);
    if (build.cooler) data.push(['Охлаждение', build.cooler.name, build.cooler.specs || '-', build.cooler.price]);
    if (build.case) data.push(['Корпус', build.case.name, build.case.specs || '-', build.case.price]);
    
    data.push([]);
    data.push(['ИТОГО:', '', '', `$${getTotalPrice()}`]);
    
    // Создание Excel файла
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Сборка ПК');
    
    // Настройка ширины колонок
    ws['!cols'] = [{wch:20}, {wch:30}, {wch:30}, {wch:12}];
    
    // Сохранение файла
    XLSX.writeFile(wb, `DIGITALLY_TJ_Build_${new Date().toISOString().slice(0,19).replace(/:/g, '-')}.xlsx`);
    
    alert('✅ Сборка успешно экспортирована в Excel!');
}

// Добавление в корзину (для демонстрации)
function addToCart(productId) {
    alert('Товар добавлен в корзину!');
}

// Инициализация категорий
function initCategories() {
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.cat;
            loadComponents(currentCategory);
        });
    });
}

// Инициализация модального окна
function initModal() {
    const modal = document.getElementById('compatibility-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadComponents('cpu');
    initCategories();
    initModal();
    initSmoothScroll();
    updateBuildDisplay();
});