import { ICartState } from '../redux/cart/cart.types';
import { IDepartmentState } from '../redux/department/department.types';
import { IInventoryState } from '../redux/inventory/inventory.types';
import { ICartItem } from '../types/cart/cart.types';
import { IDepartment } from '../types/department/department.types';
import { Availability, IProduct } from '../types/product/product.types';

const DEPARTMENTS: IDepartment[] = [
  { id: '01', primary: true, name: 'Home', weight: 1 },
  { id: '02', primary: true, name: `Garden`, weight: 2 },
  { id: '03', primary: true, name: 'Pets', weight: 3 },
  { id: '04', primary: true, name: 'Automotive', weight: 4 },
  { id: '05', primary: true, name: 'Electronics', weight: 5 },
  { id: '06', primary: true, name: 'Liquor', weight: 6 },
  {
    id: '07',
    primary: true,
    name: 'Fashion',
    weight: 7,
    subDepartments: [
      { name: 'Women', weight: 0, primary: false },
      { name: 'Men', weight: 0, primary: false },
      { name: 'Jewelery', weight: 0, primary: false },
    ],
  },
  { id: '08', primary: true, name: 'Books', weight: 8 },
  { id: '09', primary: true, name: 'Gaming', weight: 9 },
  { id: '10', primary: true, name: 'DIY', weight: 10 },
];

export const MOCK_DEPARTMENT_STATE: IDepartmentState = {
  departments: DEPARTMENTS,
  currentDepartment: undefined,
};

const PRODUCTS: IProduct[] = [
  {
    id: '1',
    brand: 'Foschini',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 10995,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Men', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '2',
    brand: 'Foschini',
    name: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 2230,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Men', weight: 0, primary: false }],
    },
    images: [
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    ],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '3',
    brand: 'Foschini',
    name: 'Mens Cotton Jacket',
    price: 5599,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Men', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'],
    discount: 5,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '4',
    brand: 'Foschini',
    name: 'Mens Casual Slim Fit',
    price: 1599,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Men', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '5',
    brand: 'Foschini',
    name:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 69500,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Jewelery', weight: 0, primary: false }],
    },
    images: [
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    ],
    discount: 20,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '6',
    brand: 'Foschini',
    name: 'Solid Gold Petite Micropave ',
    price: 16800,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Jewelery', weight: 0, primary: false }],
    },
    images: [
      'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    ],
    discount: 30,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '7',
    brand: 'Foschini',
    name: 'White Gold Plated Princess',
    price: 999,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Jewelery', weight: 0, primary: false }],
    },
    images: [
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    ],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '8',
    brand: 'Foschini',
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 1099,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 10,
      subDepartments: [{ name: 'Jewelery', weight: 0, primary: false }],
    },
    images: [
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    ],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '9',
    brand: 'Foschini',
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 6400,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '10',
    brand: 'Foschini',
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 10900,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'],
    discount: 15,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '11',
    brand: 'Foschini',
    name:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 10900,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '12',
    brand: 'Foschini',
    name:
      'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 11400,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '13',
    brand: 'Foschini',
    name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 59900,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '14',
    brand: 'Foschini',
    name:
      'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    price: 99999,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    department: {
      primary: true,
      name: 'Electronics',
      weight: 0,
    },
    images: ['https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '15',
    brand: 'Foschini',
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 5699,
    description:
      'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '16',
    brand: 'Foschini',
    name:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2995,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '17',
    brand: 'Foschini',
    name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 3999,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '18',
    brand: 'Foschini',
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 985,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '19',
    brand: 'Foschini',
    name: "Opna Women's Short Sleeve Moisture",
    price: 795,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
  {
    id: '20',
    brand: 'Foschini',
    name: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 1299,
    description:
      '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    department: {
      primary: true,

      name: 'Fashion',
      weight: 0,
      subDepartments: [{ name: 'Women', weight: 0, primary: false }],
    },
    images: ['https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'],
    discount: 0,
    quantity: 3,
    rating: 3,
    availability: Availability.IN_STOCK,
    tags: [],
  },
];

export const MOCK_INVENTORY_STATE: IInventoryState = {
  products: PRODUCTS,
  currentProduct: undefined,
};

const CART_ITEMS: ICartItem[] = [
  {
    id: PRODUCTS[3].id || '03',
    image: PRODUCTS[3].images[0],
    name: PRODUCTS[3].name,
    price: PRODUCTS[3].price,
    quantity: PRODUCTS[3].quantity,
  },
  {
    id: PRODUCTS[7].id || '07',
    image: PRODUCTS[7].images[0],
    name: PRODUCTS[7].name,
    price: PRODUCTS[7].price,
    quantity: PRODUCTS[7].quantity,
  },
  {
    id: PRODUCTS[5].id || '05',
    image: PRODUCTS[5].images[0],
    name: PRODUCTS[5].name,
    price: PRODUCTS[5].price,
    quantity: PRODUCTS[5].quantity,
  },
  {
    id: PRODUCTS[9].id || '09',
    image: PRODUCTS[9].images[0],
    name: PRODUCTS[9].name,
    price: PRODUCTS[9].price,
    quantity: PRODUCTS[9].quantity,
  },
  {
    id: PRODUCTS[2].id || '02',
    image: PRODUCTS[2].images[0],
    name: PRODUCTS[2].name,
    price: PRODUCTS[2].price,
    quantity: PRODUCTS[2].quantity,
  },
  {
    id: PRODUCTS[8].id || '08',
    image: PRODUCTS[8].images[0],
    name: PRODUCTS[8].name,
    price: PRODUCTS[8].price,
    quantity: PRODUCTS[8].quantity,
  },
];

export const MOCK_CART_STATE: ICartState = {
  cartItems: CART_ITEMS,
  hidden: true,
};
