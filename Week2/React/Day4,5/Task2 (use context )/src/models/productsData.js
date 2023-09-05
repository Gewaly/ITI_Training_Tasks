export const products = [
  {
    id: 0,
    title: "Turkish Coffee",
    price: 55,
    quantity: 2,
    get inStock() {
      return this.quantity ? true : false;
    },

    imgSrc: "assets/images/img-3.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,

    get inStock() {
      return this.quantity ? true : false;
    },

    title: "Arabian Coffee",
    price: 55,
    quantity: 5,
    imgSrc: "assets/images/img-1.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    get inStock() {
      return this.quantity ? true : false;
    },

    title: "English Tea",
    price: 55,
    quantity: 5,
    imgSrc: "assets/images/img-2.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    get inStock() {
      return this.quantity ? true : false;
    },
    title: "Espresso",
    price: 59,
    quantity: 0,
    imgSrc: "assets/images/img-4.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    get inStock() {
      return this.quantity ? true : false;
    },

    title: "Green Tea",
    price: 55,
    quantity: 1,
    imgSrc: "assets/images/img-1.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 5,
    get inStock() {
      return this.quantity ? true : false;
    },
    title: "Flat White",
    price: 55,
    quantity: 5,
    imgSrc: "assets/images/img-2.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 6,
    get inStock() {
      return this.quantity ? true : false;
    },
    title: "Tea",
    price: 55,
    quantity: 5,
    imgSrc: "assets/images/img-3.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 7,
    get inStock() {
      return this.quantity ? true : false;
    },
    title: "Sun shine",
    price: 55,
    quantity: 5,
    imgSrc: "assets/images/img-1.jpg",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];
