// 상품 데이터
const products = [
    {
        id: 1,
        name: "신선한 돼지고기 삼겹살",
        price: 18900,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: "프리미엄 소고기 안심",
        price: 45000,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        reviews: 89
    },
    {
        id: 3,
        name: "신선한 닭고기 통닭",
        price: 12000,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.3,
        reviews: 256
    },
    {
        id: 4,
        name: "유기농 채소 세트",
        price: 8500,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 78
    },
    {
        id: 5,
        name: "신선한 연어 필레",
        price: 25000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        reviews: 145
    },
    {
        id: 6,
        name: "달콤한 사과 1kg",
        price: 6500,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        reviews: 92
    },
    {
        id: 7,
        name: "신선한 우유 1L",
        price: 3200,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 156
    },
    {
        id: 8,
        name: "수제 빵 4개 세트",
        price: 8900,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 203
    }
];

// 카페 메뉴 데이터
const coffeeMenu = [
    {
        id: 101,
        name: "아메리카노",
        price: 4500,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "진한 에스프레소에 물을 넣은 클래식 커피",
        size: "Regular"
    },
    {
        id: 102,
        name: "카페라떼",
        price: 5500,
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "부드러운 우유와 에스프레소의 완벽한 조화",
        size: "Regular"
    },
    {
        id: 103,
        name: "카푸치노",
        price: 5500,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "진한 에스프레소에 벨벳같은 우유 거품",
        size: "Regular"
    },
    {
        id: 104,
        name: "바닐라라떼",
        price: 6000,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "달콤한 바닐라 시럽이 들어간 라떼",
        size: "Regular"
    }
];

const dessertMenu = [
    {
        id: 201,
        name: "크로와상",
        price: 3500,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "바삭하고 부드러운 프랑스식 페이스트리",
        type: "베이커리"
    },
    {
        id: 202,
        name: "치즈케이크",
        price: 4500,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "진한 크림치즈의 부드러운 케이크",
        type: "케이크"
    },
    {
        id: 203,
        name: "마카롱",
        price: 2800,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "달콤한 크림이 들어간 프랑스 마카롱",
        type: "쿠키"
    },
    {
        id: 204,
        name: "티라미수",
        price: 5000,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "진한 커피와 마스카포네의 이탈리안 디저트",
        type: "케이크"
    }
];

// 장바구니 데이터
let cart = [];
let cartCount = 0;

// 찜 목록 데이터
let wishlist = [];
let wishlistCount = 0;

// 캐러셀 데이터
let currentSlideIndex = 0;
const totalSlides = 4;
let carouselInterval;

// DOM 요소들
const productGrid = document.getElementById('productGrid');
const coffeeMenuGrid = document.getElementById('coffeeMenu');
const dessertMenuGrid = document.getElementById('dessertMenu');
const cartCountElement = document.querySelector('.cart-count');
const searchInput = document.querySelector('.search-box input');

// 장바구니 모달 요소들
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const totalQuantity = document.getElementById('totalQuantity');
const totalPrice = document.getElementById('totalPrice');

// 찜 목록 요소들
const wishlistBtn = document.querySelector('.btn-icon[onclick*="heart"]') || document.querySelector('.fa-heart').closest('button');

// 상품 상세 모달 요소들
const productModal = document.getElementById('productModal');
const productModalTitle = document.getElementById('productModalTitle');
const productModalImage = document.getElementById('productModalImage');
const productModalName = document.getElementById('productModalName');
const productModalPrice = document.getElementById('productModalPrice');
const productModalRating = document.getElementById('productModalRating');
const productModalDescription = document.getElementById('productModalDescription');
const productModalFeatures = document.getElementById('productModalFeatures');
const productModalWishlist = document.getElementById('productModalWishlist');
let currentProductId = null;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderCoffeeMenu();
    renderDessertMenu();
    updateCartCount();
    setupEventListeners();
    initCarousel();
});

// 상품 렌더링
function renderProducts(productsToRender = products) {
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// 상품 카드 생성
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
        <div class="product-image-container" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-title" onclick="openProductModal(${product.id})" style="cursor: pointer;">${product.name}</h3>
            <div class="product-price">₩${product.price.toLocaleString()}</div>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${product.rating} (${product.reviews}개 리뷰)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                장바구니에 추가
            </button>
        </div>
    `;
    
    return card;
}

// 커피 메뉴 렌더링
function renderCoffeeMenu() {
    if (!coffeeMenuGrid) return;
    
    coffeeMenuGrid.innerHTML = '';
    
    coffeeMenu.forEach(item => {
        const menuCard = createCafeMenuCard(item);
        coffeeMenuGrid.appendChild(menuCard);
    });
}

// 디저트 메뉴 렌더링
function renderDessertMenu() {
    if (!dessertMenuGrid) return;
    
    dessertMenuGrid.innerHTML = '';
    
    dessertMenu.forEach(item => {
        const menuCard = createCafeMenuCard(item);
        dessertMenuGrid.appendChild(menuCard);
    });
}

// 카페 메뉴 카드 생성
function createCafeMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'cafe-menu-card';
    
    const isWishlisted = wishlist.some(wishItem => wishItem.id === item.id);
    
    card.innerHTML = `
        <div class="menu-image-container" onclick="openProductModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="menu-info">
            <h4 class="menu-name" onclick="openProductModal(${item.id})" style="cursor: pointer;">${item.name}</h4>
            <p class="menu-description">${item.description}</p>
            <div class="menu-details">
                <span class="menu-size">${item.size || item.type}</span>
                <span class="menu-price">₩${item.price.toLocaleString()}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${item.id})">
                주문하기
            </button>
        </div>
    `;
    
    return card;
}

// 캐러셀 초기화
function initCarousel() {
    showSlide(0);
    startCarousel();
}

// 캐러셀 자동 재생 시작
function startCarousel() {
    carouselInterval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        showSlide(currentSlideIndex);
    }, 5000); // 5초마다 자동 전환
}

// 캐러셀 자동 재생 중지
function stopCarousel() {
    clearInterval(carouselInterval);
}

// 슬라이드 변경
function changeSlide(direction) {
    stopCarousel();
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
    startCarousel();
}

// 특정 슬라이드로 이동
function currentSlide(slideIndex) {
    stopCarousel();
    currentSlideIndex = slideIndex;
    showSlide(currentSlideIndex);
    startCarousel();
}

// 슬라이드 표시
function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // 모든 인디케이터 비활성화
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // 현재 슬라이드 표시
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
    }
    
    // 현재 인디케이터 활성화
    if (indicators[slideIndex]) {
        indicators[slideIndex].classList.add('active');
    }
}

// 장바구니에 상품 추가
function addToCart(productId) {
    // 일반 상품에서 찾기
    let product = products.find(p => p.id === productId);
    
    // 카페 메뉴에서 찾기
    if (!product) {
        product = coffeeMenu.find(p => p.id === productId);
    }
    if (!product) {
        product = dessertMenu.find(p => p.id === productId);
    }
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        cartCount += 1;
        updateCartCount();
        showNotification(`${product.name}이(가) 장바구니에 추가되었습니다!`);
    }
}

// 장바구니 모달 열기
function openCartModal() {
    cartModal.classList.add('show');
    renderCartItems();
    updateCartTotals();
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

// 장바구니 모달 닫기
function closeCartModal() {
    cartModal.classList.remove('show');
    document.body.style.overflow = 'auto'; // 배경 스크롤 복원
}

// 장바구니 아이템 렌더링
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.classList.remove('show');
        cartEmpty.classList.add('show');
        return;
    }
    
    cartItems.classList.add('show');
    cartEmpty.classList.remove('show');
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₩${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">삭제</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

// 수량 업데이트
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            cartCount += change;
            updateCartCount();
            renderCartItems();
            updateCartTotals();
        }
    }
}

// 장바구니에서 제거
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        cartCount -= item.quantity;
        cart.splice(itemIndex, 1);
        updateCartCount();
        renderCartItems();
        updateCartTotals();
        showNotification(`${item.name}이(가) 장바구니에서 제거되었습니다.`);
    }
}

// 장바구니 비우기
function clearCart() {
    if (cart.length === 0) return;
    
    cart = [];
    cartCount = 0;
    updateCartCount();
    renderCartItems();
    updateCartTotals();
    showNotification('장바구니가 비워졌습니다.');
}

// 장바구니 총계 업데이트
function updateCartTotals() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    totalQuantity.textContent = totalQty;
    totalPrice.textContent = `₩${totalAmount.toLocaleString()}`;
}

// 주문하기
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('장바구니가 비어있습니다.');
        return;
    }
    
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`주문이 완료되었습니다! 총 금액: ₩${totalAmount.toLocaleString()}`);
    
    // 주문 완료 후 장바구니 비우기
    clearCart();
    closeCartModal();
}

// 찜 목록 토글
function toggleWishlist(productId) {
    // 일반 상품에서 찾기
    let product = products.find(p => p.id === productId);
    
    // 카페 메뉴에서 찾기
    if (!product) {
        product = coffeeMenu.find(p => p.id === productId);
    }
    if (!product) {
        product = dessertMenu.find(p => p.id === productId);
    }
    
    if (product) {
        const existingIndex = wishlist.findIndex(item => item.id === productId);
        
        if (existingIndex !== -1) {
            // 찜 목록에서 제거
            wishlist.splice(existingIndex, 1);
            wishlistCount--;
            showNotification(`${product.name}이(가) 찜 목록에서 제거되었습니다.`);
        } else {
            // 찜 목록에 추가
            wishlist.push({...product, wishlistDate: new Date()});
            wishlistCount++;
            showNotification(`${product.name}이(가) 찜 목록에 추가되었습니다!`);
        }
        
        updateWishlistCount();
        renderProducts(); // 상품 카드 다시 렌더링하여 찜 상태 업데이트
    }
}

// 찜 목록 개수 업데이트
function updateWishlistCount() {
    const wishlistBtn = document.querySelector('.fa-heart').closest('button');
    if (wishlistBtn) {
        const countElement = wishlistBtn.querySelector('.wishlist-count');
        if (countElement) {
            countElement.textContent = wishlistCount;
        } else if (wishlistCount > 0) {
            const countSpan = document.createElement('span');
            countSpan.className = 'wishlist-count';
            countSpan.textContent = wishlistCount;
            wishlistBtn.appendChild(countSpan);
        }
    }
}

// 찜 목록 확인
function isWishlisted(productId) {
    return wishlist.some(item => item.id === productId);
}

// 찜 목록 보기 (헤더의 하트 버튼 클릭 시)
function showWishlist() {
    if (wishlist.length === 0) {
        showNotification('찜 목록이 비어있습니다.');
        return;
    }
    
    let message = '찜 목록:\n';
    wishlist.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₩${item.price.toLocaleString()}\n`;
    });
    
    alert(message);
}

// 상품 상세 모달 열기
function openProductModal(productId) {
    currentProductId = productId;
    
    // 상품 정보 찾기
    let product = products.find(p => p.id === productId);
    let productType = '상품';
    
    if (!product) {
        product = coffeeMenu.find(p => p.id === productId);
        productType = '커피';
    }
    if (!product) {
        product = dessertMenu.find(p => p.id === productId);
        productType = '디저트';
    }
    
    if (product) {
        // 모달 내용 업데이트
        productModalTitle.textContent = `${productType} 상세`;
        productModalImage.src = product.image;
        productModalImage.alt = product.name;
        productModalName.textContent = product.name;
        productModalPrice.textContent = `₩${product.price.toLocaleString()}`;
        
        // 평점 표시
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        productModalRating.querySelector('.stars').textContent = stars;
        productModalRating.querySelector('.rating-text').textContent = `${product.rating} (${product.reviews}개 리뷰)`;
        
        // 상품 설명
        if (product.description) {
            productModalDescription.textContent = product.description;
        } else {
            productModalDescription.textContent = '신선하고 맛있는 상품입니다.';
        }
        
        // 상품 특징
        const features = [
            '신선한 원료 사용',
            '안전한 포장',
            '빠른 배송',
            '품질 보장'
        ];
        
        if (productType === '커피') {
            features[0] = '프리미엄 원두 사용';
            features[1] = '전문 바리스타 제조';
        } else if (productType === '디저트') {
            features[0] = '수제 제작';
            features[1] = '신선한 재료';
        }
        
        productModalFeatures.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
        
        // 찜 상태 업데이트
        const isWishlisted = wishlist.some(item => item.id === productId);
        updateWishlistButton(isWishlisted);
        
        // 모달 표시
        productModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// 상품 상세 모달 닫기
function closeProductModal() {
    productModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    currentProductId = null;
}

// 찜 버튼 상태 업데이트
function updateWishlistButton(isWishlisted) {
    if (isWishlisted) {
        productModalWishlist.classList.add('active');
        productModalWishlist.querySelector('span').textContent = '찜됨';
    } else {
        productModalWishlist.classList.remove('active');
        productModalWishlist.querySelector('span').textContent = '찜하기';
    }
}

// 모달에서 찜 토글
function toggleWishlistFromModal() {
    if (currentProductId) {
        toggleWishlist(currentProductId);
        const isWishlisted = wishlist.some(item => item.id === currentProductId);
        updateWishlistButton(isWishlisted);
    }
}

// 모달에서 장바구니에 추가
function addToCartFromModal() {
    if (currentProductId) {
        addToCart(currentProductId);
    }
}

// 장바구니 개수 업데이트
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// 알림 표시
function showNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색 기능
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });
    
    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 헤더 스크롤 효과
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });
    
    // 장바구니 버튼 클릭 이벤트
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }
    
    // 찜 목록 버튼 클릭 이벤트
    const heartBtn = document.querySelector('.fa-heart').closest('button');
    if (heartBtn) {
        heartBtn.addEventListener('click', showWishlist);
    }
    
    // 모달 외부 클릭 시 닫기
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
    
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (cartModal.classList.contains('show')) {
                closeCartModal();
            }
            if (productModal.classList.contains('show')) {
                closeProductModal();
            }
        }
    });
}

// 애니메이션 CSS 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .product-card {
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
    }
    
    .category-card {
        transition: all 0.3s ease;
    }
    
    .category-card:hover {
        transform: translateY(-10px);
    }
    
    .btn-primary, .btn-secondary {
        transition: all 0.3s ease;
    }
    
    .btn-primary:hover {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// 카테고리 클릭 이벤트
document.addEventListener('click', function(e) {
    if (e.target.closest('.category-card')) {
        const categoryName = e.target.closest('.category-card').querySelector('h3').textContent;
        showNotification(`${categoryName} 카테고리를 선택했습니다!`);
    }
});

// 더 많은 상품 보기 버튼
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-secondary')) {
        showNotification('더 많은 상품을 준비 중입니다!');
    }
});

// 뉴스레터 구독
document.addEventListener('click', function(e) {
    if (e.target.textContent === '구독') {
        const emailInput = e.target.previousElementSibling;
        const email = emailInput.value;
        
        if (email && email.includes('@')) {
            showNotification('뉴스레터 구독이 완료되었습니다!');
            emailInput.value = '';
        } else {
            showNotification('올바른 이메일 주소를 입력해주세요.');
        }
    }
});

// 반응형 네비게이션 (모바일)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

// 모바일 메뉴 토글 버튼 추가 (작은 화면에서만 표시)
if (window.innerWidth <= 768) {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
    `;
    
    const header = document.querySelector('.header .container');
    header.insertBefore(mobileMenuBtn, header.firstChild);
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// 페이지 로드 완료 후 초기화
window.addEventListener('load', function() {
    // 로딩 애니메이션
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
