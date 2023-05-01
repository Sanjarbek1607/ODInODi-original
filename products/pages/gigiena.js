const products = [
  {
    id: '0011',
    article: `GG0011`,
    title: "Nivea OQvaQORA",
    description: "Tozalik va ozodalik, xushbo'y ifor doimo siz uchun hamroh",
    price: 32000,
    image: "../products/images/gigiena0011.jpg"
  },
  {
    id: '0010',
    article: `GG0010`,
    title: "Pantene Pro-V",
    description: "Sochlaringizga hushboy ifor baxsh etuvchi shampun",
    price: 35000,
    image: "../products/images/gigiena0010.jpg"
  },
  {
    id: '0009',
    article: `GG0009`,
    title: "Yuz uchun penka",
    description: "Yuzingizni chuqur tozalovchi va ajin tushishini oldini oluvchi ko'pik",
    price: 35000,
    image: "../products/images/gigiena0009.jpg"
  },
  {
    id: '0008',
    article: `GG0008`,
    title: "Syoss",
    description: "Sochlaringizga hushboy ifor baxsh etuvchi shampun",
    price: 35000,
    image: "../products/images/gigiena0008.jpg"
  },
  {
    id: '0007',
    article: `GG0007`,
    title: "Clear",
    description: "Sochlaringizga hushboy ifor baxsh etuvchi shampun. C.Ronaldodan maxsus taklif ;)",
    price: 35000,
    image: "../products/images/gigiena0007.jpg"
  },
  {
    id: '0006',
    article: `GG0006`,
    title: "Umooo",
    description: "Bolajonlaringiz uchun maxsus bolalar shampuni",
    price: 35000,
    image: "../products/images/gigiena0006.jpg"
  },
  {
    id: '0005',
    article: `GG0005`,
    title: "Mochalka",
    description: "Dush qabul qilishni rejalashtirdingizmi, unda sizning hamrohingiz...",
    price: 8000,
    image: "../products/images/gigiena0005.jpg"
  },
  {
    id: '0004',
    article: `GG0004`,
    title: "Bolalar sovuni",
    description: "Shirindan shakar farzandlarimizni ham unutmadik. Ular uchun ajoyib shakladagi sovunlar",
    price: 14000,
    image: "../products/images/gigiena0004.jpg"
  },
  {
    id: '0003',
    article: `GG0003`,
    title: "Skrab yuz uchun",
    description: "Yuzingizga yangi hayot va yangi nafas baxsh eting.",
    price: 5000,
    image: "../products/images/gigiena0003.jpg"
  },
  {
    id: '0002',
    article: `GG0002`,
    title: "Rexona",
    description: "Tozalik doimo siz uchun qulay vaqtda va joyda. Maxsus o'lchamda, siz uchun",
    price: 12000,
    image: "../products/images/gigiena0002.jpg"
  },
  {
    id: '0001',
    article: `GG0001`,
    title: "Fresh dent",
    description: "Sizning nafasingiz uchun betakror ifor baxsh etuvchi maxsulotdan bahramand bo'ling",
    price: 18000,
    image: "../products/images/gigiena0001.jpg"
  },
]

































// ******************* Bu kodlarga tegilmasin**************************
const box = document.querySelector('.page__content-box')

if (products.length === 0) {
  box.innerHTML = `
  <h2 class="page__content-pusto">
    Bu bo'limda maxsulotlar xali mavjud emas
  </h2>
  `
} else {

  box.innerHTML = ''
  products.forEach(item => {
    const card = createCard(item.image, item.title, item.description, item.price, item.article)
    box.append(card)
  })

  function createCard(imgUrl, cardTitle, itemDescription, itemPrice, itemArticle) {
    const card = document.createElement('div');
    card.classList.add('page__content-card');
    const imgBox = document.createElement('div');
    imgBox.classList.add('page__content-imgBox');
    const img = document.createElement('img');
    img.classList.add('page__content-img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', `${cardTitle}`);
    imgBox.append(img);
    const info = document.createElement('div');
    info.classList.add('page__content-info');
    const title = document.createElement('abbr');
    title.classList.add('page__content-title');
    title.setAttribute('title', cardTitle)
    title.textContent = cardTitle;
    const description = document.createElement('abbr');
    description.classList.add('page__content-description');
    description.setAttribute('title', itemDescription);
    description.textContent = itemDescription;
    const bottom = document.createElement('div');
    bottom.classList.add('page__content-bottom');
    const article = document.createElement('p');
    article.classList.add('page__content-article');
    article.innerHTML = `ART: ${itemArticle}`;
    const price = document.createElement('p');
    price.classList.add('page__content-price');
    price.innerHTML = `Narxi: <span>${itemPrice}</span> so'm`;
    bottom.append(article)
    bottom.append(price)
    info.append(title)
    info.append(description)
    info.append(bottom)
    card.append(imgBox);
    card.append(info)
    return card
  }
}