const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay")
  const cart = document.querySelector(".header-btn-cart")

  const openMOdal = () => {
    modal.classList.add('open')
  }

  const closeMOdal = () => {
    modal.classList.remove('open')
  }

  cart.addEventListener('click', openMOdal)

  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('cart-modal__overlay') || e.target.closest('.cart-modal__header--close')) {
      closeMOdal()
    }
  })
}
//--------------------------------------------------------------------------------------------
const restsFunc = () => {
  const container = document.getElementById('rests-container')
  const restArr = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: 'r1.jpg',
    },
    {
      id: 1,
      title: 'Тануки ',
      time: 50,
      rating: 5,
      price: 900,
      type: "Пицца ",
      image: 'r2.jpg',
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 5,
      price: 900,
      type: "Пицца ",
      image: 'r3.jpg',
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 5,
      price: 900,
      type: "Пицца ",
      image: 'r4.jpg',
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 5,
      price: 900,
      type: "Пицца ",
      image: 'r5.jpg',
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 5,
      price: 900,
      type: "Пицца ",
      image: 'r6.jpg',
    },
  ]
  
  const  loading = () => {
    container.innerHTML = '<p style="width:100%; text-align:center;">Loading</p>'
  }

  const loaderRests = (arr) => {
    container.innerHTML = ''
    arr.forEach((item) => {
      container.insertAdjacentHTML('beforeend', `
          <a href="./goods.html?id=${item.id}" class="products-card">
              <div class="products-card__pic">
                <img src="img/rests/${item.image}" alt="${item.title}">
              </div>
              <div class="products-card__descr">
                <div class="products-card__descr-row">
                  <h4 class="products-card__descr--title">${item.title}</h4>
                  <div class="products-card__descr-badge">
                    ${item.time} мин
                  </div>
                </div>
                <div class="products-card__descr-row2">
                  <div class="products-card__descr-row2--rating">
                    <img src="img/star.svg" alt="star">
                    ${item.rating}
                  </div>
                  <div class="products-card__descr-row2--price">От ${item.price} ₽</div>
                  <div class="products-card__descr-row2--group">
                    <img src="img/marker.svg" alt="marker">
                    ${item.type} </div>
                </div>
              </div>
            </a>
        `)
    })
  }

if(container) {
    loading()
    setTimeout(() => {
      loaderRests(restArr)
    }, 1000)
  }
}
//----------------------------------------------------------------------------------------
const goodsFunc = () => {
  const container = document.getElementById('goods-container')
  const goodsArr = [
    {
      id: 0,
      image: 'g1.jpg',
      title: 'Ролл угорь стандарт',
      descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
    },
    {
      id: 1,
      image: 'g2.jpg',
      title: 'Калифорния лосось стандарт',
      descr: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 395,
    },
    {
      id: 2,
      image: 'g3.jpg',
      title: 'Окинава стандарт',
      descr: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price: 250,
    },
    {
      id: 3,
      image: 'g4.jpg',
      title: 'Цезарь маки хl',
      descr: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price: 250,
    },
    {
      id: 4,
      image: 'g5.jpg',
      title: 'Ясай маки стандарт 185 г',
      descr: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price: 250,
    },
    {
      id: 5,
      image: 'g6.jpg',
      title: 'Ролл с креветкой стандарт',
      descr: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 250,
    },
  ]

  const  loading = () => {
    container.innerHTML = '<p style="width:100%; text-align:center;">Loading</p>'
  }

  const loaderRests = (arr) => {
    container.innerHTML = ''
    arr.forEach((item) => {
      container.insertAdjacentHTML('beforeend', `
          <div class="products-card">
              <div class="products-card__pic">
                <img src="img/goods/${item.image}" alt="Пицца плюс">
              </div>
              <div class="products-card__descr">
                <div class="products-card__descr-row">
                  <h5 class="products-card__descr--name">${item.title}</h5>
                </div>
                <div class="products-card__descr-row2">
                  <p class="products-card__descr--text">${item.descr}</p>
                </div>
                <div class="products-card__descr-row3">
                  <button class="to-cart"><img src="img/to-cart.png" alt="to-cart"></button>
                  <p class="goods-price">${item.price } ₽</p>
                </div>
              </div>
            </div>
        `)
    })
  }

  if(container) {
    loading()
    setTimeout(() => {
      loaderRests(goodsArr)
    }, 1000)
  }

}



modalFunc()
restsFunc()
goodsFunc()