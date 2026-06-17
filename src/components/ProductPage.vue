<template>
  <div class="universal-cosmos">
    <!-- Параллакс-фон -->
    <div class="parallax-bg"></div>

    <div class="main-wrap">
      <div class="content-area">
        <!-- Hero секция -->
        <section class="hero-super" data-aos="fade-up">
          <div class="hero-text">
            <h1>КОСМИЧЕСКИЙ <span class="glow">КАТАЛОГ</span></h1>
            <p>Ракеты, компоненты, услуги запуска — всё в одном месте</p>
          </div>
          <div class="hero-stats">
            <div class="stat" v-for="stat in bigStats" :key="stat.label">
              <span class="num">{{ stat.value }}</span>
              <span class="lab">{{ stat.label }}</span>
            </div>
          </div>
        </section>

        <!-- Поиск + фильтры -->
        <div class="toolbar" data-aos="fade-up" data-aos-delay="100">
          <div class="search-area">
            <i class="fas fa-search"></i>
            <input v-model="searchQuery" placeholder="Поиск ракет, компонентов, услуг...">
          </div>
          <div class="filter-group">
            <button v-for="cat in allCategories" :key="cat" class="filter-btn" :class="{ active: activeCat === cat }" @click="activeCat = cat">{{ cat }}</button>
            <button class="filter-btn cart-btn" @click="cartOpen = !cartOpen">
              <i class="fas fa-shopping-cart"></i> Корзина ({{ cart.length }})
            </button>
          </div>
        </div>

        <!-- Корзина -->
        <div class="cart-panel" v-show="cartOpen">
          <div class="cart-header">
            <h3><i class="fas fa-shopping-cart"></i> Корзина</h3>
            <button class="close-cart" @click="cartOpen = false">×</button>
          </div>
          <div class="cart-items">
            <div v-if="cart.length === 0" class="empty-cart">Нет товаров</div>
            <div v-for="item in cart" :key="item.id" class="cart-item">
              <span>{{ item.name }}</span>
              <button @click="removeFromCart(item.id)">🗑️</button>
            </div>
          </div>
          <div class="cart-footer">
            <button class="checkout-btn" @click="openPaymentModal">Оформить заказ</button>
          </div>
        </div>

        <!-- Сетка товаров с анимацией -->
        <div class="infinite-grid">
          <div
            v-for="(item, index) in paginatedItems"
            :key="item.id"
            class="product-card-super"
            :class="{ 'component-card': item.category === 'Компоненты' }"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <div class="img-wrap">
              <img :src="item.img" :alt="item.name" loading="lazy">
              <button class="cart-add-sticker" @click="addToCart(item)">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
            <div class="info">
              <h3>{{ item.name }}</h3>
              <div class="specs-mini">
                <div v-for="(val, key) in item.specs" :key="key">{{ key }}: {{ val }}</div>
              </div>
              <div class="action-buttons">
                <button @click="openModal(item)">Детали</button>
                <button class="primary" @click="quickOrder(item)">Заказать</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Пагинация -->
        <div class="pagination" data-aos="fade-up">
          <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
          <span>Стр. {{ currentPage }} из {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Вперёд</button>
        </div>

        <!-- 3D-глобус -->
        <div class="globe-section" data-aos="fade-up">
          <h2><i class="fas fa-globe-americas"></i> Наши космодромы </h2>
          <div ref="globeContainer" class="globe-container"></div>
          <p class="globe-hint">Зажмите чтобы посмотреть</p>
        </div>

        <!-- Отзывы -->
        <div class="testimonials-section" data-aos="fade-up">
          <h2><i class="fas fa-quote-left"></i> Отзывы наших клиентов</h2>
          <div class="testimonials-grid">
            <div
              class="testimonial-card"
              v-for="review in reviews"
              :key="review.id"
              data-aos="fade-up"
              :data-aos-delay="100 * review.id"
            >
              <img :src="review.avatar" alt="avatar" class="testimonial-avatar">
              <p class="testimonial-text">"{{ review.text }}"</p>
              <h4 class="testimonial-name">{{ review.name }}</h4>
              <span class="testimonial-title">{{ review.title }}</span>
              <div class="stars">
                <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= review.rating }">★</span>
              </div>
            </div>
          </div>
          <button class="btn-add-review" @click="openReviewModal">Оставить отзыв</button>
        </div>

        <!-- Призыв -->
        <div class="final-glory" data-aos="fade-up">
          <div class="glory-inner">
            <h2>Готовы запустить свой проект?</h2>
            <p>Станьте частью космической индустрии — оставьте заявку</p>
            <button class="btn-giant" @click="openRequestForm">Связаться с нами</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно деталей товара -->
    <div v-if="modalOpen" class="modal-overlay" @click.self="modalOpen = false">
      <div class="modal-big">
        <div class="modal-header">
          <h2>{{ modalData.name }}</h2>
          <button class="close-x" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <div class="detail-specs">
            <div v-for="(val, key) in modalData.specs" :key="key"><strong>{{ key }}:</strong> {{ val }}</div>
          </div>
          <p class="full-desc">{{ modalData.fullDesc }}</p>
        </div>
      </div>
    </div>

    <!-- Модальное окно оплаты -->
    <div v-if="paymentModalOpen" class="modal-overlay" @click.self="closePaymentModal">
      <div class="modal-big payment-modal">
        <div class="modal-header">
          <h2>Оплата заказа</h2>
          <button class="close-x" @click="closePaymentModal">×</button>
        </div>
        <div class="modal-body">
          <form novalidate @submit.prevent="processPayment">
            <input type="text" v-model="payment.cardNumber" placeholder="Номер карты (16 цифр)" maxlength="19" @input="formatCardNumber">
            <div class="row">
              <input type="text" v-model="payment.expiry" placeholder="ММ/ГГ" maxlength="5" @input="formatExpiry">
              <input type="text" v-model="payment.cvv" placeholder="CVV" maxlength="3">
            </div>
            <button type="submit" class="btn-primary pay-btn">Оплатить</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Модальное окно отзыва -->
    <div v-if="reviewModalOpen" class="modal-overlay" @click.self="reviewModalOpen = false">
      <div class="modal-big review-modal">
        <div class="modal-header">
          <h2>Оставить отзыв</h2>
          <button class="close-x" @click="reviewModalOpen = false">×</button>
        </div>
        <div class="modal-body">
          <form novalidate @submit.prevent="submitReview">
            <input type="text" placeholder="Ваше имя" v-model="reviewForm.name" required>
            <input type="email" placeholder="Email" v-model="reviewForm.email" required>
            <textarea placeholder="Ваш отзыв" v-model="reviewForm.text" rows="4" required></textarea>
            <div class="rating-stars">
              <span>Оценка:</span>
              <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= reviewForm.rating }" @click="reviewForm.rating = i">★</span>
            </div>
            <button type="submit" class="btn-primary form-submit">Отправить отзыв</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Форма заявки -->
    <div v-if="formVisible" class="modal-overlay" @click.self="formVisible = false">
      <div class="modal-big">
        <div class="modal-header">
          <h2>Космическая заявка</h2>
          <button class="close-x" @click="formVisible = false">×</button>
        </div>
        <div class="modal-body">
          <form novalidate @submit.prevent="submitFinalForm">
            <input type="text" placeholder="Ваше имя" v-model="formData.name">
            <input type="email" placeholder="Email" v-model="formData.email">
            <textarea placeholder="Описание проекта" v-model="formData.message"></textarea>
            <button type="submit" class="btn-primary form-submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Уведомления -->
    <div v-if="toastMsg" class="toast" :class="toastType">{{ toastMsg }}</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'
import AOS from 'aos'
import 'aos/dist/aos.css'

// ===================== КАТАЛОГ ТОВАРОВ (ракеты, компоненты, услуги) =====================
const generateItems = () => {
  const rockets = [
    { name: 'SpaceX Falcon Heavy', height:'70m', payload:'63.8t', thrust:'22800kN', img:'public/images/ракета1.PNG', fullDesc:'Сверхтяжёлый носитель для Луны и Марса.', modelType:'rocket' },
    { name: 'Рокот (Старт-1)', height:'28m', payload:'2.5t', thrust:'450kN', img:'public/images/ракета2.PNG', fullDesc:'Лёгкий носитель для малых спутников.', modelType:'rocket' },
    { name: 'Титан-3', height:'74m', payload:'36t', thrust:'4200kN', img:'public/images/ракета3.PNG', fullDesc:'Флагман для марсианских экспедиций.', modelType:'rocket' },
    { name: 'Союз-2', height:'46m', payload:'7.5t', thrust:'950kN', img:'public/images/ракета4.PNG', fullDesc:'Классическая надёжность.', modelType:'rocket' },
    { name: 'Ангара-А5', height:'55m', payload:'24t', thrust:'2600kN', img:'public/images/ракета5.PNG', fullDesc:'Тяжёлый носитель нового поколения.', modelType:'rocket' },
    { name: 'Электрон', height:'17m', payload:'0.3t', thrust:'50kN', img:'public/images/ракета6.PNG', fullDesc:'Сверхлёгкий для малых спутников.', modelType:'rocket' },
    { name: 'Нейтрон (Neutron)', height:'40m', payload:'13t', thrust:'1450kN', img:'public/images/ракета7.PNG', fullDesc:'Средний класс с возвращаемой ступенью.', modelType:'rocket' },
    { name: 'Сатурн-5', height:'110m', payload:'140t', thrust:'35000kN', img:'public/images/ракета8.PNG', fullDesc:'Ультратяжёлый для пилотируемых экспедиций.', modelType:'rocket' },
    { name: 'Вега (Vega)', height:'30m', payload:'1.8t', thrust:'300kN', img:'public/images/ракета9.PNG', fullDesc:'Экономичный запуск малых аппаратов.', modelType:'rocket' },
    { name: 'Falcon 9', height:'70m', payload:'22.8t', thrust:'7600kN', img:'public/images/ракета 10.PNG', fullDesc:'Многоразовый носитель среднего класса.', modelType:'rocket' },
  ]
  const components = [
    { name: 'ЖРД RS-25', mass:'320kg', thrust:'190kN', img:'public/images/компонент1.PNG', fullDesc:'Кислородно-водородный двигатель.', modelType:'engine' },
    { name: 'АСУ "Орион"', mass:'45kg', power:'85W', img:'public/images/компонент2.PNG', fullDesc:'ИИ для автономной навигации.', modelType:'computer' },
    { name: 'Солнечные панели МКС', mass:'120kg', power:'12kW', img:'public/images/компонент3.PNG', fullDesc:'Высокоэффективные фотоэлементы.', modelType:'panel' },
    { name: 'Гиростабилизатор', precision:'0.001°', img:'public/images/компонент4.PNG', fullDesc:'Точнейшая ориентация.', modelType:'gyro' },
    { name: 'Теплозащита PICA', temp:'2200°C', img:'public/images/компонент5.PNG', fullDesc:'Многоразовая абляция.', modelType:'tps' },
    { name: 'Квантовый датчик', accuracy:'0.1″', img:'public/images/компонент6.PNG', fullDesc:'Абсолютная навигация.', modelType:'sensor' },
    { name: 'Композитный бак', volume:'12m³', img:'public/images/компонент7.PNG', fullDesc:'Облегчённый криобак.', modelType:'tank' },
    { name: 'Твердотопливный ускоритель', thrust:'1200kN', time:'120с', img:'public/images/компонент8.PNG', fullDesc:'Твердотопливный ускоритель.', modelType:'booster' }
  ]
  const services = [
    { name: 'Вывод на НОО', price:'$25 млн', orbit:'НОО, 200–2000 км', mass:'до 8 т', img:'public/images/выводноо.jpg', fullDesc:'Запуск на низкую опорную орбиту.', modelType:'service' },
    { name: 'Геопереходная орбита (ГПО)', price:'$45 млн', orbit:'ГПО, 35 786 км', mass:'до 5 т', img:'public/images/геопереходнаяорбита.webp', fullDesc:'Вывод на геопереходную орбиту.', modelType:'service' },
    { name: 'Лунная миссия', price:'$120 млн', orbit:'Лунная траектория', mass:'до 3 т', img:'public/images/лунная миссия.webp', fullDesc:'Доставка на орбиту Луны.', modelType:'service' },
    { name: 'Запуск группировки', price:'договорная', orbit:'НОО / ССО', mass:'до 12 т', img:'public/images/группировки спутников фото.png', fullDesc:'Кластерный запуск до 60 спутников.', modelType:'service' }
  ]

  let id = 1
  const all = []
  rockets.forEach(r => { all.push({ id: id++, category: 'Ракеты', specs: { Высота: r.height, 'Грузоподъёмность': r.payload, Тяга: r.thrust }, shortDesc: r.name, fullDesc: r.fullDesc, img: r.img, name: r.name, modelType: r.modelType }) })
  components.forEach(c => { all.push({ id: id++, category: 'Компоненты', specs: { Масса: c.mass, Характеристика: c.thrust || c.power || c.precision || c.accuracy || c.volume || c.temp }, shortDesc: c.name, fullDesc: c.fullDesc, img: c.img, name: c.name, modelType: c.modelType }) })
  services.forEach(s => { all.push({ id: id++, category: 'Услуги', specs: { Цена: s.price, Орбита: s.orbit, Масса: s.mass }, shortDesc: s.name, fullDesc: s.fullDesc, img: s.img, name: s.name, modelType: s.modelType }) })
  return all
}
const allItems = ref(generateItems())

// Фильтрация, поиск, пагинация
const searchQuery = ref('')
const activeCat = ref('Все')
const allCategories = ['Все', 'Ракеты', 'Компоненты', 'Услуги']
const currentPage = ref(1)
const itemsPerPage = 6

const filteredItems = computed(() => {
  let list = allItems.value
  if (activeCat.value !== 'Все') list = list.filter(i => i.category === activeCat.value)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(i => i.name.toLowerCase().includes(q))
  }
  return list
})
const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage))
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredItems.value.slice(start, start + itemsPerPage)
})
function prevPage() { if (currentPage.value > 1) currentPage.value-- }
function nextPage() { if (currentPage.value < totalPages.value) currentPage.value++ }

// Корзина и оплата
const cart = ref([])
const cartOpen = ref(false)
const paymentModalOpen = ref(false)
const payment = ref({ cardNumber: '', expiry: '', cvv: '' })

function addToCart(item) {
  if (!cart.value.find(i => i.id === item.id)) {
    cart.value.push({ id: item.id, name: item.name })
    showToast('Товар добавлен в корзину', 'success')
  } else {
    showToast('Товар уже в корзине', 'info')
  }
}
function removeFromCart(id) { cart.value = cart.value.filter(i => i.id !== id) }
function openPaymentModal() {
  if (cart.value.length === 0) {
    showToast('Корзина пуста. Добавьте товары перед оформлением.', 'error')
    return
  }
  paymentModalOpen.value = true
}
function closePaymentModal() { paymentModalOpen.value = false; payment.value = { cardNumber: '', expiry: '', cvv: '' } }
function formatCardNumber(e) {
  let val = e.target.value.replace(/\D/g, '').substring(0, 16)
  val = val.replace(/(\d{4})(?=\d)/g, '$1 ')
  payment.value.cardNumber = val
}
function formatExpiry(e) {
  let val = e.target.value.replace(/\D/g, '').substring(0, 4)
  if (val.length >= 3) val = val.substring(0,2) + '/' + val.substring(2)
  payment.value.expiry = val
}
function processPayment() {
  const cardNum = payment.value.cardNumber.replace(/\s/g, '')
  if (cardNum.length !== 16) { showToast('Введите корректный номер карты (16 цифр)', 'error'); return }
  if (!payment.value.expiry.match(/^\d{2}\/\d{2}$/)) { showToast('Введите срок в формате ММ/ГГ', 'error'); return }
  if (payment.value.cvv.length !== 3) { showToast('CVV должен содержать 3 цифры', 'error'); return }
  showToast('✅ Спасибо за заказ! Ваш заказ успешно оформлен.', 'success')
  cart.value = []
  closePaymentModal()
}

// Статистика
const bigStats = ref([
  { label: 'Спутников запущено', value: 187 },
  { label: 'Клиентов', value: 56 },
  { label: 'Успешных миссий', value: 142 }
])

// 3D-ГЛОБУС
const globeContainer = ref(null)
let sceneGlobe, cameraGlobe, rendererGlobe, earthMesh, markersGroup
function addMarker(lat, lon, color) {
  const radius = 1.01
  const phi = (90 - lat) * Math.PI / 180
  const theta = lon * Math.PI / 180
  const x = radius * Math.sin(phi) * Math.cos(theta)
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const geometry = new THREE.SphereGeometry(0.02, 16, 16)
  const material = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.5 })
  const marker = new THREE.Mesh(geometry, material)
  marker.position.set(x, y, z)
  markersGroup.add(marker)
}
function initGlobe() {
  if (!globeContainer.value) return
  const container = globeContainer.value
  const width = container.clientWidth
  const height = 400
  sceneGlobe = new THREE.Scene()
  cameraGlobe = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  cameraGlobe.position.set(0, 0, 3)
  rendererGlobe = new THREE.WebGLRenderer({ antialias: true })
  rendererGlobe.setSize(width, height)
  container.appendChild(rendererGlobe.domElement)

  const textureLoader = new THREE.TextureLoader()
  const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg')
  const geometry = new THREE.SphereGeometry(1, 128, 128)
  const material = new THREE.MeshStandardMaterial({ map: earthTexture })
  earthMesh = new THREE.Mesh(geometry, material)
  sceneGlobe.add(earthMesh)

  markersGroup = new THREE.Group()
  earthMesh.add(markersGroup)

  addMarker(45.9, 63.3, 0xff3333)
  addMarker(28.4, -80.5, 0xff3333)
  addMarker(5.2, -52.7, 0xff3333)
  addMarker(51.8, 128.3, 0xff3333)
  addMarker(28.2, 102.0, 0xff3333)
  addMarker(39.0, -76.5, 0xff3333)
  addMarker(34.9, 136.6, 0xff3333)

  const starGeometry = new THREE.BufferGeometry()
  const starCount = 1500
  const starPositions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) {
    starPositions[i*3] = (Math.random() - 0.5) * 2000
    starPositions[i*3+1] = (Math.random() - 0.5) * 2000
    starPositions[i*3+2] = (Math.random() - 0.5) * 2000 - 100
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff })
  const stars = new THREE.Points(starGeometry, starMaterial)
  sceneGlobe.add(stars)

  const ambientLight = new THREE.AmbientLight(0x404040)
  sceneGlobe.add(ambientLight)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(1, 2, 1)
  sceneGlobe.add(dirLight)

  let mouseX = 0, mouseY = 0, isDragging = false
  container.addEventListener('mousedown', () => isDragging = true)
  window.addEventListener('mouseup', () => isDragging = false)
  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      mouseX += e.movementX * 0.005
      mouseY += e.movementY * 0.005
    }
  })
  function animateGlobe() {
    earthMesh.rotation.y = mouseX
    earthMesh.rotation.x = mouseY
    rendererGlobe.render(sceneGlobe, cameraGlobe)
    requestAnimationFrame(animateGlobe)
  }
  animateGlobe()
}
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out'
  })
  initGlobe()
})

// Отзывы
const initialReviews = [
  {
    id: 1,
    name: 'Илья Маслов',
    title: 'Главный инженер Роскосмос',
    text: 'Технологии SpaceTech позволили сократить время подготовки запуска на 40%. Надёжность компонентов впечатляет.',
    avatar: 'public/images/businessman-with-a-goatee-beard_480x480.webp',
    rating: 5
  },
  {
    id: 2,
    name: 'Денис Евгеньевич',
    title: 'Руководитель отдела спутниковой связи',
    text: 'Отличный каталог, удобная фильтрация и быстрая корзина. 3D-глобус помогает визуализировать космодромы.',
    avatar: 'public/images/i.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'Дмитрий Орлов',
    title: 'Директор по развитию SpaceX Projects',
    text: 'Мы используем этот сервис для планирования миссий. Реалистичные модели и оперативная поддержка — на высоте.',
    avatar: 'public/images/positivo-feliz-caucasico-maduro-hombre-mediana-edad-sonriendo-sonrisa-dentada-usando-gafas-mostrando-bien-gesto-ambas-manos-aisladas-fondo-blanco_650366-6207.avif',
    rating: 5
  }
]
const reviews = ref([...initialReviews])

const reviewModalOpen = ref(false)
const reviewForm = ref({
  name: '',
  email: '',
  text: '',
  rating: 5
})

function openReviewModal() {
  reviewForm.value = { name: '', email: '', text: '', rating: 5 }
  reviewModalOpen.value = true
}

function submitReview() {
  if (!reviewForm.value.name || !reviewForm.value.email || !reviewForm.value.text) {
    showToast('Заполните все поля', 'error')
    return
  }
  const newReview = {
    id: Date.now(),
    name: reviewForm.value.name,
    title: 'Клиент',
    text: reviewForm.value.text,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(reviewForm.value.name)}&background=4da3ff&color=fff&size=80`,
    rating: reviewForm.value.rating
  }
  reviews.value.unshift(newReview)
  reviewModalOpen.value = false
  showToast('Спасибо за отзыв!', 'success')
}

// Модальное окно товара
const modalOpen = ref(false)
const modalData = ref({})
function closeModal() { modalOpen.value = false }
function openModal(item) {
  modalData.value = item
  modalOpen.value = true
}

// Форма заявки
const formVisible = ref(false)
const formData = ref({ name:'', email:'', message:'' })
function quickOrder(item) { formData.value.message = `Интересуюсь: ${item.name}`; formVisible.value = true }
function openRequestForm() { formVisible.value = true }
function submitFinalForm() {
  if (!formData.value.name || !formData.value.email) {
    showToast('Пожалуйста, заполните имя и email', 'error')
    return
  }
  showToast('Заявка отправлена! Свяжемся с вами в ближайшее время.', 'success')
  formVisible.value = false
  formData.value = { name:'', email:'', message:'' }
}

// Уведомления
const toastMsg = ref('')
const toastType = ref('success')
function showToast(msg, type='success') { toastMsg.value = msg; toastType.value = type; setTimeout(() => toastMsg.value = '', 3000) }
</script>

<style scoped>
/* Подключение шрифтов */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Open+Sans:wght@400;600;700&display=swap');

:root {
  --bg: #050814;
  --bg-soft: #091020;
  --text: #ffffff;
  --text-soft: #b8c7df;
  --blue: #4da3ff;
  --orange: #ff9f43;
  --orange-dark: #ff7a45;
  --border: rgba(132, 179, 255, 0.22);
  --card: rgba(255, 255, 255, 0.045);
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.universal-cosmos {
  background: var(--bg);
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  color: var(--text);
  overflow-x: hidden;
}

/* Параллакс-фон */
.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background: radial-gradient(ellipse at 30% 40%, rgba(0, 80, 180, 0.15), transparent 70%),
              radial-gradient(ellipse at 70% 60%, rgba(255, 120, 30, 0.08), transparent 60%),
              var(--bg);
  transform: translateZ(-1px) scale(1.1);
  z-index: -1;
  pointer-events: none;
}

/* Заголовки – Montserrat */
h1, h2, h3, h4, .glow, .stat .num, .btn-giant, .btn-add-review, .checkout-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

/* Текст – Open Sans (по умолчанию) */
body, p, .lab, .specs-mini, .testimonial-text, .full-desc, input, textarea, button {
  font-family: 'Open Sans', sans-serif;
}

/* Анимации AOS (для красоты) */
[data-aos] {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}
[data-aos="fade-up"] {
  transform: translateY(40px);
}

/* Hero */
.hero-super {
  background: radial-gradient(ellipse at 30% 40%, rgba(132, 179, 255, 0.22), #020816);
  border-radius: 48px;
  padding: 50px 30px;
  margin: 100px 0 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}
.glow {
  background: linear-gradient(135deg, var(--blue), var(--orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-stats {
  display: flex;
  gap: 40px;
}
.stat .num {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat .lab {
  font-size: 0.85rem;
  color: var(--text-soft);
}

/* Поиск и фильтры */
.toolbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
}
.search-area {
  background: var(--bg-soft);
  border-radius: 60px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 2;
  border: 1px solid var(--border);
}
.search-area input {
  background: none;
  border: none;
  color: var(--text);
  width: 100%;
  font-size: 1rem;
  outline: none;
}
.filter-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.filter-btn {
  background: transparent;
  border: 1px solid var(--border);
  padding: 6px 20px;
  border-radius: 40px;
  color: var(--text-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn.active {
  background: var(--blue);
  border-color: var(--blue);
  color: white;
}
.filter-btn:hover:not(.active) {
  border-color: var(--blue);
  color: var(--blue);
}

/* Корзина */
.cart-panel {
  background: var(--bg-soft);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid var(--border);
}
.cart-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 12px;
}
.cart-items {
  max-height: 200px;
  overflow-y: auto;
  margin: 15px 0;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  color: var(--text-soft);
}
.empty-cart {
  text-align: center;
  padding: 20px;
  color: var(--text-soft);
}
.cart-footer {
  margin-top: 15px;
  text-align: center;
}
.checkout-btn {
  background: transparent;
  border: 1px solid var(--border);
  padding: 8px 20px;
  border-radius: 40px;
  color: var(--text);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}
.checkout-btn:hover {
  border-color: var(--orange);
  background: rgba(255, 159, 67, 0.1);
  color: var(--orange);
}

/* Сетка товаров */
.infinite-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
}
.product-card-super {
  background: var(--card);
  backdrop-filter: blur(8px);
  border-radius: 32px;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}
.product-card-super:hover {
  transform: translateY(-4px);
  border-color: var(--orange);
}
.img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #000000;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}
.product-card-super:hover .img-wrap img {
  transform: scale(1.02);
}
.component-card .img-wrap img {
  transform: scale(0.66);
}
.product-card-super:hover .component-card .img-wrap img {
  transform: scale(0.68);
}
.cart-add-sticker {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: var(--orange);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 2;
}
.cart-add-sticker:hover {
  background: var(--orange-dark);
  transform: scale(1.05);
}
.info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.info h3 {
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: var(--text);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.specs-mini div {
  font-size: 0.9rem;
  display: inline-block;
  background: rgba(255,255,255,0.05);
  padding: 4px 12px;
  border-radius: 30px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: var(--text-soft);
}
.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 16px;
}
.action-buttons button {
  flex:1;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 40px;
  padding: 8px;
  cursor: pointer;
  color: var(--text);
  font-weight: 500;
  transition: all 0.2s;
}
.action-buttons button:hover {
  border-color: var(--blue);
  color: var(--blue);
}
.action-buttons button.primary {
  background: linear-gradient(135deg, var(--blue), var(--orange));
  border: none;
  color: white;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.action-buttons button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(77, 163, 255, 0.45);
  background: linear-gradient(135deg, var(--orange), var(--blue));
  border: none;
}

/* Пагинация */
.pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
}
.pagination button {
  background: var(--bg-soft);
  border: 1px solid var(--border);
  padding: 8px 20px;
  border-radius: 40px;
  color: var(--text);
  cursor: pointer;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: default;
}
.pagination button:hover:not(:disabled) {
  border-color: var(--blue);
  color: var(--blue);
}

/* Глобус */
.globe-section {
  background: var(--bg-soft);
  border-radius: 48px;
  padding: 30px;
  margin: 40px 0;
  text-align: center;
}
.globe-container {
  width: 100%;
  height: 400px;
  background: #021020;
  border-radius: 28px;
  cursor: grab;
}

/* Отзывы */
.testimonials-section {
  background: var(--bg-soft);
  border-radius: 48px;
  padding: 40px;
  margin: 40px 0;
  text-align: center;
}
.testimonials-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}
.testimonial-card {
  background: var(--card);
  backdrop-filter: blur(8px);
  border-radius: 32px;
  padding: 30px;
  width: 320px;
  transition: transform 0.3s;
  border: 1px solid var(--border);
}
.testimonial-card:hover {
  transform: translateY(-8px);
  border-color: var(--blue);
}
.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid var(--blue);
}
.testimonial-text {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-soft);
  margin-bottom: 20px;
  font-style: italic;
}
.testimonial-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
}
.testimonial-title {
  font-size: 0.85rem;
  color: var(--blue);
}
.stars {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 10px;
}
.star {
  font-size: 1.4rem;
  color: #555;
  cursor: default;
}
.star.filled {
  color: #ffc107;
}
.btn-add-review {
  margin-top: 30px;
  padding: 12px 32px;
  background: var(--blue);
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.btn-add-review:hover {
  background: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 159, 67, 0.3);
}

/* Модальное окно отзыва */
.review-modal .modal-big {
  max-width: 500px;
}
.rating-stars {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}
.rating-stars .star {
  font-size: 2rem;
  color: #555;
  cursor: pointer;
}
.rating-stars .star.filled {
  color: #ffc107;
}

/* Призыв */
.final-glory {
  margin: 60px 0 20px;
}
.glory-inner {
  background: linear-gradient(115deg, rgba(132, 179, 255, 0.22), #020b16);
  border-radius: 64px;
  padding: 50px 30px;
  text-align: center;
  border: 1px solid var(--border);
}
.btn-giant {
  background: linear-gradient(135deg, var(--blue), var(--orange));
  border: none;
  padding: 16px 48px;
  border-radius: 60px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-giant:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(77, 163, 255, 0.45);
  background: linear-gradient(135deg, var(--orange), var(--blue));
}

/* Модальные окна */
.modal-overlay {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-big {
  background: var(--bg-soft);
  width: 700px;
  max-width: 90%;
  border-radius: 32px;
  max-height: 85vh;
  overflow-y: auto;
  border: 1px solid var(--border);
}
.payment-modal .modal-big {
  max-width: 450px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--border);
}
.close-x {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text);
  cursor: pointer;
}
.modal-body {
  padding: 25px;
}
.detail-specs {
  background: rgba(0,0,0,0.3);
  padding: 15px;
  border-radius: 24px;
  margin: 15px 0;
}
.full-desc {
  margin: 15px 0;
  line-height: 1.5;
  color: var(--text-soft);
}

/* Формы */
form input, form textarea {
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 40px;
  color: var(--text);
  outline: none;
}
form .row {
  display: flex;
  gap: 15px;
}
.form-submit, .pay-btn {
  background: linear-gradient(135deg, var(--orange-dark), var(--orange)) !important;
  border: none !important;
  border-radius: 40px;
  padding: 12px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  color: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.form-submit:hover, .pay-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(255, 122, 69, 0.45);
  background: linear-gradient(135deg, var(--orange), var(--orange-dark)) !important;
}

/* Уведомления */
.toast {
  position: fixed;
  bottom: 100px;
  right: 30px;
  background: #000000cc;
  color: white;
  padding: 12px 24px;
  border-radius: 40px;
  z-index: 2100;
  backdrop-filter: blur(8px);
}
.toast.success { border-left: 4px solid var(--blue); }
.toast.error { border-left: 4px solid #ff4444; }
.toast.info { border-left: 4px solid var(--orange); }

/* Адаптивность */
@media (max-width: 1000px) {
  .hero-super { flex-direction: column; text-align: center; margin-top: 120px; }
  .hero-stats { margin-top: 20px; }
  .toolbar { flex-direction: column; }
  .testimonials-grid { flex-direction: column; align-items: center; }
  .infinite-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
}
@media (max-width: 768px) {
  .hero-text h1 { font-size: 2rem; }
  .info h3 { font-size: 1.4rem; }
}
</style>