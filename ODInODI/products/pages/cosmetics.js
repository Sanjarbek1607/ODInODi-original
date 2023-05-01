const products = [ 
  {
    id: '0021',
    article: `CS0021`,
    title: "Tonalka",
    description: "Yuznigiz doimo e'tiborli bo'ling",
    price: 32000,
    image: "../products/images/cosmetics0021.jpg"
  },
  {
    id: '0020',
    article: `CS0020`,
    title: "Ko'z uchun ten",
    description: "Ko'zlaringiz qalbingiz oynasi, shunday ekan ular doim go'zal bo'lishi lozim, shunday emasmi?",
    price: 50000,
    image: "../products/images/cosmetics0020.jpg"
  },
  {
    id: '0019',
    article: `CS0019`,
    title: "Krem ot zagar",
    description: "Men serquyosh mamlakatda quyosh nuriga qarshi kurashga tayyorman. Sizchi?! ",
    price: 35000,
    image: "../products/images/cosmetics0019.jpg"
  },
  {
    id: '0018',
    article: `CS0018`,
    title: "Pudra",
    description: "Yuzingizni seving, uni asrang",
    price: 40000,
    image: "../products/images/cosmetics0018.jpg"
  },
  {
    id: '0017',
    article: `CS0017`,
    title: "Lab uchun balzam",
    description: "Lab qurishini, yorilishi va serjilo qilish uchun balzam",
    price: 8000,
    image: "../products/images/cosmetics0017.jpg"
  },
  {
    id: '0016',
    article: `CS0016`,
    title: "Sponch",
    description: "Tonal kremini yuzingizga surish uchun sponch",
    price: 6000,
    image: "../products/images/cosmetics0016.jpg"
  },
  {
    id: '0015',
    article: `CS0015`,
    title: "Yuz uchun maxsus maska",
    description: "Yuzingizni uyda o'zingiz ishonchli parvarish qiling",
    price: 7000,
    image: "../products/images/cosmetics0015.jpg"
  },
  {
    id: '0014',
    article: `CS0014`,
    title: "Yuz uchun maxsus maska",
    description: "Yuzingizni uyda o'zingiz ishonchli parvarish qiling",
    price: 7000,
    image: "../products/images/cosmetics0015.jpg"
  },
  {
    id: '0013',
    article: `CS0013`,
    title: "Kiprik uchun tush",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 32000,
    image: "../products/images/cosmetics0013.jpg"
  },
  {
    id: '0012',
    article: `CS0012`,
    title: "Yuz uchun skrab",
    description: "Pardozlar yuz teringizni charchatdimi, u holda ushbu mahssulotimiz aynan siz uchun",
    price: 18000,
    image: "../products/images/cosmetics0012.jpg"
  },
  {
    id: '0011',
    article: `CS0011`,
    title: "Lab uchun qalam",
    description: "Chegara siz uchun go'zallik yaratadi deb o'ylaganmisiz?!",
    price: 10000,
    image: "../products/images/cosmetics0011.jpg"
  },
  {
    id: '0010',
    article: `CS0010`,
    title: "Pomada #2",
    description: "Arzon va sifatli maxshulotimiz sizga albatta manzur keladi!!!",
    price: 10000,
    image: "../products/images/cosmetics0010.jpg"
  },
  {
    id: '0009',
    article: `CS0009`,
    title: "Pomada #1",
    description: "Pomada boteks. Siz uchun yangicha ko'rinish baxsh etadi!!!",
    price: 20000,
    image: "../products/images/cosmetics0009.jpg"
  },
  {
    id: '0008',
    article: `CS0008`,
    title: "Pomada",
    description: "O'zgacha rang va o'zgacha ta'm",
    price: 20000,
    image: "../products/images/cosmetics0008.jpg"
  },
  {
    id: '0007',
    article: `CS0007`,
    title: "Ko'z uchun podvodka",
    description: "Siz uchun maxsus ishlab chiqiligan. Faqat va faqat siz uchun!!!",
    price: 10000,
    image: "../products/images/cosmetics0007.jpg"
  },
  {
    id: '0006',
    article: `CS0006`,
    title: "Lasyon",
    description: "Badanigiz sezuvchanmi? unda bu mahsulot aynan siz uchun. Badaningizga yangi nafas hadya eting",
    price: 60000,
    image: "../products/images/cosmetics0006.jpg"
  },
  {
    id: '0005',
    article: `CS0005`,
    title: "Lak",
    description: "Tirnoqlaringiz sizning e'tibor markazida bo'lishingiz uchun muhim, shunday emasmi?",
    price: 5000,
    image: "../products/images/cosmetics0005.jpg"
  },
  {
    id: '0004',
    article: `CS0004`,
    title: "Quyosh nuriga qarshi krem",
    description: "Bahor quyoshidan tanangizni kuyishdan asrashni ayni vaqti. Buni unutmang",
    price: 35000,
    image: "../products/images/cosmetics0004.jpg"
  },
  {
    id: '0003',
    article: `CS0003`,
    title: "Yuz uchun baza",
    description: "Makiyajdan oldin qo'llaniladi. Makiyaj uchun yuz sihasini tayyorlash uchun juda foydali mahsulot",
    price: 32000,
    image: "../products/images/cosmetics0003.jpg"
  },
  {
    id: '0002',
    article: `CS0002`,
    title: "Ko'z bo'yash uchun kistochka",
    description: "Ten uchun kistochkalarni olishni unutmang, yoki hali ham gugurt cho'pidan foydalanmoqchimisiz?",
    price: 1000,
    image: "../products/images/cosmetics0002.jpg"
  },
  {
    id: '0001',
    article: `CS0001`,
    title: "Krem ot zagara",
    description: "Men serquyosh mamlakatda quyosh nuriga qarshi kurashga tayyorman. Sizchi?! ",
    price: 40000,
    image: "../products/images/cosmetics0001.jpg"
  }

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