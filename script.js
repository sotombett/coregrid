(() => {
  "use strict";

  const products = [
    {
      id: 1,
      name: "GeForce RTX 4070 Super 12GB OC",
      category: "gpu",
      categoryLabel: "Видеокарты",
      badge: "Хит продаж",
      price: 74990,
      shortSpec: "12 ГБ GDDR6X • 192-bit • PCIe 4.0",
      specs: {
        "Видеопамять": "12 ГБ GDDR6X",
        "Шина памяти": "192 бит",
        "Интерфейс": "PCI Express 4.0 x16",
        "Разъемы": "3x DisplayPort 1.4a, 1x HDMI 2.1a",
        "Рекомендуемый БП": "650 Вт"
      },
      icon: `<svg width="92" height="62" viewBox="0 0 92 62" fill="none" aria-hidden="true">
               <rect x="4" y="10" width="84" height="42" rx="6" stroke="#a855f7" stroke-width="2.5"/>
               <circle cx="28" cy="31" r="12" stroke="#c084fc" stroke-width="2"/>
               <circle cx="64" cy="31" r="12" stroke="#c084fc" stroke-width="2"/>
               <circle cx="28" cy="31" r="3" fill="#a855f7"/>
               <circle cx="64" cy="31" r="3" fill="#a855f7"/>
             </svg>`
    },
    {
      id: 2,
      name: "AMD Ryzen 7 7800X3D OEM",
      category: "cpu",
      categoryLabel: "Процессоры",
      badge: "В наличии",
      price: 42500,
      shortSpec: "8 ядер / 16 потоков • AM5 • 96 МБ L3",
      specs: {
        "Сокет": "AM5",
        "Ядра / Потоки": "8 / 16",
        "Базовая / Макс. частота": "4.2 ГГц / 5.0 ГГц",
        "Кэш L3": "96 МБ (3D V-Cache)",
        "Тепловыделение (TDP)": "120 Вт"
      },
      icon: `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" aria-hidden="true">
               <rect x="14" y="14" width="40" height="40" rx="5" stroke="#a855f7" stroke-width="2.5"/>
               <rect x="24" y="24" width="20" height="20" rx="2" fill="rgba(168,85,247,0.22)" stroke="#c084fc" stroke-width="2"/>
               <path d="M22 6V14M34 6V14M46 6V14M22 54V62M34 54V62M46 54V62M6 22H14M6 34H14M6 46H14M54 22H62M54 34H62M54 46H62" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
             </svg>`
    },
    {
      id: 3,
      name: "B650 Gaming Plus WiFi",
      category: "mb",
      categoryLabel: "Материнские платы",
      badge: "Новинка",
      price: 21900,
      shortSpec: "ATX • AM5 • DDR5 • Wi-Fi 6E",
      specs: {
        "Форм-фактор": "Standard-ATX",
        "Сокет и чипсет": "AM5 / AMD B650",
        "Слоты памяти": "4x DDR5 (до 192 ГБ)",
        "Слоты M.2": "2x M.2 PCIe 4.0",
        "Сеть": "2.5 Гбит/с LAN, Wi-Fi 6E, Bluetooth 5.3"
      },
      icon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
               <rect x="10" y="8" width="52" height="56" rx="4" stroke="#a855f7" stroke-width="2.5"/>
               <rect x="18" y="16" width="18" height="18" rx="2" stroke="#c084fc" stroke-width="2"/>
               <path d="M44 16V34M50 16V34M18 46H52M18 54H42" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/>
             </svg>`
    },
    {
      id: 4,
      name: "DDR5 32GB (2x16GB) 6000MHz CL30",
      category: "ram",
      categoryLabel: "Оперативная память",
      badge: "В наличии",
      price: 13490,
      shortSpec: "Комплект 32 ГБ • EXPO / XMP • CL30",
      specs: {
        "Объем комплекта": "32 ГБ (2 модуля по 16 ГБ)",
        "Тип памяти": "DDR5",
        "Тактовая частота": "6000 МГц",
        "Тайминги": "30-36-36-76",
        "Охлаждение": "Алюминиевые радиаторы"
      },
      icon: `<svg width="88" height="46" viewBox="0 0 88 46" fill="none" aria-hidden="true">
               <rect x="4" y="8" width="80" height="26" rx="3" stroke="#a855f7" stroke-width="2.5"/>
               <rect x="12" y="14" width="10" height="12" rx="1" fill="rgba(168,85,247,0.3)" stroke="#c084fc"/>
               <rect x="28" y="14" width="10" height="12" rx="1" fill="rgba(168,85,247,0.3)" stroke="#c084fc"/>
               <rect x="44" y="14" width="10" height="12" rx="1" fill="rgba(168,85,247,0.3)" stroke="#c084fc"/>
               <rect x="60" y="14" width="10" height="12" rx="1" fill="rgba(168,85,247,0.3)" stroke="#c084fc"/>
               <path d="M12 34V40M22 34V40M32 34V40M56 34V40M66 34V40M76 34V40" stroke="#8b5cf6" stroke-width="2"/>
             </svg>`
    },
    {
      id: 5,
      name: "NVMe M.2 2TB PCIe 4.0 Pro",
      category: "storage",
      categoryLabel: "SSD-накопители",
      badge: "Хит продаж",
      price: 16200,
      shortSpec: "2 ТБ • Чтение 7400 МБ/с • DRAM-буфер",
      specs: {
        "Объем": "2000 ГБ",
        "Форм-фактор": "M.2 2280",
        "Интерфейс": "PCIe 4.0 x4 (NVMe 2.0)",
        "Чтение / Запись": "7400 / 6900 МБ/с",
        "Ресурс TBW": "1200 ТБ"
      },
      icon: `<svg width="88" height="40" viewBox="0 0 88 40" fill="none" aria-hidden="true">
               <rect x="6" y="8" width="76" height="24" rx="3" stroke="#a855f7" stroke-width="2.5"/>
               <rect x="20" y="13" width="16" height="14" rx="1.5" fill="rgba(168,85,247,0.25)" stroke="#c084fc"/>
               <rect x="42" y="13" width="16" height="14" rx="1.5" fill="rgba(168,85,247,0.25)" stroke="#c084fc"/>
               <circle cx="74" cy="20" r="3" stroke="#c084fc" stroke-width="2"/>
             </svg>`
    },
    {
      id: 6,
      name: "Modular Power 850W 80+ Gold ATX 3.0",
      category: "psu",
      categoryLabel: "Блоки питания",
      badge: "В наличии",
      price: 14800,
      shortSpec: "850 Вт • 80+ Gold • 12VHPWR",
      specs: {
        "Мощность": "850 Вт",
        "Сертификат": "80 PLUS Gold",
        "Стандарт": "ATX 3.0 (разъем 12VHPWR)",
        "Кабели": "Полностью модульные",
        "Вентилятор": "135 мм (полупассивный режим)"
      },
      icon: `<svg width="78" height="58" viewBox="0 0 78 58" fill="none" aria-hidden="true">
               <rect x="6" y="8" width="66" height="42" rx="5" stroke="#a855f7" stroke-width="2.5"/>
               <circle cx="32" cy="29" r="14" stroke="#c084fc" stroke-width="2"/>
               <circle cx="32" cy="29" r="4" fill="#a855f7"/>
               <path d="M56 19H64M56 29H64M56 39H64" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/>
             </svg>`
    }
  ];

  let activeCategory = "all";
  let searchQuery = "";
  let sortMode = "default";
  let cart = [];
  let promoApplied = false;
  let currentModalProductId = null;
  let pendingDeleteId = null;

  const productGrid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const cartDiscountEl = document.getElementById("cartDiscount");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutSuccess = document.getElementById("checkoutSuccess");
  const promoInput = document.getElementById("promoInput");
  const promoMessage = document.getElementById("promoMessage");
  const modalAddBtn = document.getElementById("modalAddBtn");
  const toastEl = document.getElementById("cartToast");
  const toastMessage = document.getElementById("toastMessage");
  const bsToast = new bootstrap.Toast(toastEl, { delay: 2200 });
  const productModal = new bootstrap.Modal(document.getElementById("productModal"));

  function formatPrice(value) {
    return new Intl.NumberFormat("ru-RU").format(Math.round(value)) + " ₽";
  }

  function getCartItem(id) {
    return cart.find(item => item.id === id);
  }

  function renderProducts() {
    const filtered = products.filter(item => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query ||
        item.name.toLowerCase().includes(query) ||
        item.shortSpec.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (sortMode === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortMode === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
      productGrid.innerHTML = "";
      emptyState.classList.remove("d-none");
      return;
    }

    emptyState.classList.add("d-none");
    productGrid.innerHTML = filtered.map(item => {
      const cartItem = getCartItem(item.id);
      const actionControl = cartItem
        ? `
          <div class="qty-stepper flex-grow-1" role="group" aria-label="Количество ${item.name} в корзине">
            <button type="button" class="btn btn-outline-accent qty-btn" data-action="dec" data-id="${item.id}" aria-label="Уменьшить количество">−</button>
            <span class="qty-label">В корзине: <strong>${cartItem.qty}</strong></span>
            <button type="button" class="btn btn-outline-accent qty-btn" data-action="inc" data-id="${item.id}" aria-label="Увеличить количество">+</button>
          </div>
        `
        : `
          <button type="button" class="btn btn-accent flex-grow-1" data-action="add" data-id="${item.id}">
            <i class="bi bi-bag-plus me-1"></i>В корзину
          </button>
        `;

      return `
        <div class="col">
          <article class="card product-card h-100 ${cartItem ? "is-in-cart" : ""}">
            <div class="product-thumb">
              <span class="badge badge-accent position-absolute top-0 start-0 m-3">${item.badge}</span>
              ${cartItem ? `<span class="badge badge-in-cart position-absolute top-0 end-0 m-3"><i class="bi bi-check2 me-1"></i>В корзине</span>` : ""}
              ${item.icon}
            </div>
            <div class="card-body d-flex flex-column p-4">
              <div class="small text-muted-custom mb-1">${item.categoryLabel}</div>
              <h3 class="h5 fw-bold mb-2">${item.name}</h3>
              <p class="small text-muted-custom mb-4">${item.shortSpec}</p>
              <div class="mt-auto">
                <div class="price-tag mb-3">${formatPrice(item.price)}</div>
                <div class="d-flex gap-2">
                  ${actionControl}
                  <button type="button" class="btn btn-outline-accent" data-action="details" data-id="${item.id}"
                          aria-label="Характеристики ${item.name}">
                    <i class="bi bi-info-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join("");
  }

  function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentModalProductId = id;
    const cartItem = getCartItem(id);

    document.getElementById("productModalLabel").textContent = product.name;
    modalAddBtn.textContent = cartItem
      ? `Добавить еще (в корзине: ${cartItem.qty})`
      : "Добавить в корзину";

    const specsRows = Object.entries(product.specs)
      .map(([key, val]) => `
        <tr>
          <th class="text-muted-custom fw-normal ps-0">${key}</th>
          <td class="text-end fw-medium pe-0">${val}</td>
        </tr>
      `).join("");

    document.getElementById("productModalBody").innerHTML = `
      <div class="text-center py-3 mb-3 rounded modal-preview">
        ${product.icon}
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="badge badge-accent">${product.categoryLabel}</span>
        <span class="fs-5 fw-bold">${formatPrice(product.price)}</span>
      </div>
      <table class="table table-dark table-sm mb-0 specs-table">
        <tbody>${specsRows}</tbody>
      </table>
    `;
    productModal.show();
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = getCartItem(id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    pendingDeleteId = null;
    checkoutSuccess.classList.add("d-none");
    renderCart();
    renderProducts();
    toastMessage.textContent = `Добавлено: ${product.name}`;
    bsToast.show();
  }

  function changeQty(id, delta) {
    const item = getCartItem(id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }

    pendingDeleteId = null;
    renderCart();
    renderProducts();
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    pendingDeleteId = null;
    renderCart();
    renderProducts();
  }

  function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadge.textContent = totalCount;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center text-muted-custom py-5">
          <i class="bi bi-bag fs-1 d-block mb-2"></i>
          <p class="mb-0">Корзина пока пуста</p>
        </div>
      `;
      checkoutBtn.disabled = true;
    } else {
      checkoutBtn.disabled = false;
      cartItemsContainer.innerHTML = cart.map(item => {
        const isConfirming = pendingDeleteId === item.id;
        return `
          <div class="pb-3 mb-3 border-bottom border-secondary-subtle">
            <div class="d-flex justify-content-between align-items-start gap-2">
              <div>
                <div class="fw-semibold small">${item.name}</div>
                <div class="small text-muted-custom mb-2">${formatPrice(item.price)}</div>
                <div class="btn-group btn-group-sm" role="group" aria-label="Количество">
                  <button type="button" class="btn btn-outline-secondary" data-action="dec" data-id="${item.id}">−</button>
                  <span class="btn btn-outline-secondary disabled text-white">${item.qty}</span>
                  <button type="button" class="btn btn-outline-secondary" data-action="inc" data-id="${item.id}">+</button>
                </div>
              </div>
              ${isConfirming ? "" : `
                <button type="button" class="btn btn-sm btn-link text-danger p-0" data-action="ask-remove" data-id="${item.id}"
                        aria-label="Удалить товар">
                  <i class="bi bi-trash"></i>
                </button>
              `}
            </div>
            ${isConfirming ? `
              <div class="delete-confirm-box d-flex align-items-center justify-content-between gap-2 mt-2 p-2">
                <span class="small text-danger-emphasis">Удалить из корзины?</span>
                <div class="d-flex gap-1">
                  <button type="button" class="btn btn-danger btn-sm py-0 px-2" data-action="confirm-remove" data-id="${item.id}">Да</button>
                  <button type="button" class="btn btn-outline-secondary btn-sm py-0 px-2" data-action="cancel-remove" data-id="${item.id}">Нет</button>
                </div>
              </div>
            ` : ""}
          </div>
        `;
      }).join("");
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const total = subtotal - discount;

    cartSubtotalEl.textContent = formatPrice(subtotal);
    cartDiscountEl.textContent = discount > 0 ? `−${formatPrice(discount)}` : "0 ₽";
    cartTotalEl.textContent = formatPrice(total);
  }

  // Делегирование кликов по карточкам товаров
  productGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "add") addToCart(id);
    if (action === "inc") changeQty(id, 1);
    if (action === "dec") changeQty(id, -1);
    if (action === "details") openProductModal(id);
  });

  // Делегирование кликов внутри корзины
  cartItemsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "dec") changeQty(id, -1);
    if (action === "inc") changeQty(id, 1);
    if (action === "ask-remove") {
      pendingDeleteId = id;
      renderCart();
    }
    if (action === "confirm-remove") removeFromCart(id);
    if (action === "cancel-remove") {
      pendingDeleteId = null;
      renderCart();
    }
  });

  // Сброс состояния подтверждения при закрытии корзины
  document.getElementById("cartOffcanvas").addEventListener("hidden.bs.offcanvas", () => {
    if (pendingDeleteId !== null) {
      pendingDeleteId = null;
      renderCart();
    }
  });

  // Предотвращение перезагрузки при нажатии Enter в поиске
  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Фильтр категорий
  document.getElementById("categoryFilters").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-category]");
    if (!btn) return;
    document.querySelectorAll("#categoryFilters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderProducts();
  });

  // Живой поиск
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Сортировка
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    sortMode = e.target.value;
    renderProducts();
  });

  // Сброс фильтров
  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    activeCategory = "all";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    document.querySelectorAll("#categoryFilters button").forEach(b => {
      b.classList.toggle("active", b.dataset.category === "all");
    });
    renderProducts();
  });

  // Добавление в корзину из модального окна
  modalAddBtn.addEventListener("click", () => {
    if (currentModalProductId !== null) {
      addToCart(currentModalProductId);
      productModal.hide();
    }
  });

  // Применение промокода
  document.getElementById("applyPromoBtn").addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === "TECH10") {
      promoApplied = true;
      promoMessage.textContent = "Промокод TECH10 применен: скидка 10%.";
      promoMessage.className = "small mb-3 text-success";
    } else {
      promoApplied = false;
      promoMessage.textContent = "Неверный промокод.";
      promoMessage.className = "small mb-3 text-danger";
    }
    renderCart();
  });

  // Оформление заказа
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    cart = [];
    promoApplied = false;
    pendingDeleteId = null;
    promoInput.value = "";
    promoMessage.textContent = "";
    renderCart();
    renderProducts();
    checkoutSuccess.classList.remove("d-none");
  });

  // Валидация формы обратной связи
  const supportForm = document.getElementById("supportForm");
  supportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!supportForm.checkValidity()) {
      supportForm.classList.add("was-validated");
      return;
    }
    supportForm.reset();
    supportForm.classList.remove("was-validated");
    document.getElementById("supportSuccess").classList.remove("d-none");
  });

  // Первичная отрисовка
  renderProducts();
  renderCart();
})();