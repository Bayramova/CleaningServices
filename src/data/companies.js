const companies = [
  {
    id: "freshperspectives",
    logo: "./img/logo/atom-solid.svg",
    name: "Fresh Perspectives",
    adress: "1600 Pennsylvania Avenue, Washington",
    rating: "4",
    services: "[standartcleaning, generalcleaning, repaircleaning]"
  },
  {
    id: "uborkakvartir",
    logo: "./img/logo/bath-solid.svg",
    name: "Uborka Kvartir",
    adress: "11 Wall Street New York, NY",
    rating: "5",
    services: "[standartcleaning, officecleaning, furniturecleaning]"
  },
  {
    id: "sparklingpalaces",
    logo: "./img/logo/candy-cane-solid.svg",
    name: "Sparkling Palaces",
    adress: "350 Fifth Avenue New York, NY",
    rating: "4",
    services: "[industrialcleaning, poolcleaning, officecleaning]"
  },
  {
    id: "housecleaners",
    logo: "./img/logo/cat-solid.svg",
    name: "House Cleaners",
    adress: "221 B Baker St, London",
    rating: "3",
    services: "[standartcleaning, generalcleaning, carpetcleaning, furniturecleaning]"
  },
  {
    id: "rogaikopyta",
    logo: "./img/logo/frog-solid.svg",
    name: "Roga&Kopyta",
    adress: "Tour Eiffel Champ de Mars, Paris",
    rating: "5",
    services: "[standartcleaning, generalcleaning, repaircleaning, officecleaning, carpetcleaning, furniturecleaning, industrialcleaning, poolcleaning]"
  },
  {
    id: "cowboyscleaning",
    logo: "./img/logo/ghost-solid.svg",
    name: "Cowboys Cleaning",
    adress: "4059 Mt Lee Dr. Hollywood, CA",
    rating: "4",
    services: "[carpetcleaning, furniturecleaning]"
  },
  {
    id: "ramclean",
    logo: "./img/logo/hamburger-solid.svg",
    name: "RamClean Cleaning Services",
    adress: "Buckingham Palace, London",
    rating: "3",
    services: "[repaircleaning, industrialcleaning]"
  },
  {
    id: "stormyscleaning",
    logo: "./img/logo/hippo-solid.svg",
    name: "Stormy's Cleaning Service",
    adress: "Statue of Liberty, Liberty Island New York, NY",
    rating: "3",
    services: "[standartcleaning, generalcleaning, furniturecleaning, carpetcleaning]"
  },
  {
    id: "aacleaning",
    logo: "./img/logo/horse-solid.svg",
    name: "A&A Cleaning Services",
    adress: "Manager Square, Bethlehem, West Bank",
    rating: "4",
    services: "[standartcleaning, poolcleaning]"
  },
  {
    id: "goclean",
    logo: "./img/logo/home-solid.svg",
    name: "GoClean",
    adress: "2 Macquarie Street, Sydney",
    rating: "5",
    services: "[repaircleaning, generalcleaning]"
  },
  {
    id: "chrisparklecleaning",
    logo: "./img/logo/globe-americas-solid.svg",
    name: "Chrisparkle Cleaning Services",
    adress: "99, rue de Rivoli, Paris",
    rating: "4",
    services: "[standartcleaning, generalcleaning, poolcleaning]"
  },
  {
    id: "houseclechistogolikianers",
    logo: "./img/logo/dog-solid.svg",
    name: "Chistogoliki",
    adress: "Piazza della Scala, Milano",
    rating: "3",
    services: "[standartcleaning, generalcleaning, repaircleaning, officecleaning]"
  },
  {
    id: "gryazinet",
    logo: "./img/logo/crow-solid.svg",
    name: "Gryazi net",
    adress: "263 Prinsengracht, Amsterdam",
    rating: "3",
    services: "[standartcleaning, generalcleaning, carpetcleaning, furniturecleaning]"
  },
  {
    id: "blesk",
    logo: "./img/logo/bread-slice-solid.svg",
    name: "Blesk",
    adress: "1060 West Addison Street, Chigaco",
    rating: "5",
    services: "[standartcleaning, generalcleaning, carpetcleaning, furniturecleaning, poolcleaning]"
  },
  {
    id: "citycleaning",
    logo: "./img/logo/city-solid.svg",
    name: "City Cleaning",
    adress: "10 Downing Street, London",
    rating: "4",
    services: "[repaircleaning, officecleaning, industrialcleaning]"
  },
  {
    id: "merrymaid",
    logo: "./img/logo/birthday-cake-solid.svg",
    name: "Merry Maids",
    adress: "30 Rockefeller Plaza, Manhattan, NY",
    rating: "4",
    services: "[standartcleaning, generalcleaning, repaircleaning, officecleaning, carpetcleaning, furniturecleaning, industrialcleaning, poolcleaning]"
  },
  {
    id: "mollymaid",
    logo: "./img/logo/baseball-ball-solid.svg",
    name: "Molly Maid",
    adress: "6925 Hollywood Boulevard, Hollywood, CA",
    rating: "5",
    services: "[standartcleaning, generalcleaning, repaircleaning, officecleaning, carpetcleaning, furniturecleaning, industrialcleaning, poolcleaning]"
  },
  {
    id: "freshcarpet",
    logo: "./img/logo/box-open-solid.svg",
    name: "Fresh Carpet",
    adress: "Off A344 Road, Amesbury, Wiltshire",
    rating: "5",
    services: "[carpetcleaning, furniturecleaning]"
  },
  {
    id: "krasniyuborshik",
    logo: "./img/logo/bread-slice-solid.svg",
    name: "Krasniy Uborshik",
    adress: "Red Square, Moscow",
    rating: "3",
    services: "[officecleaning, standartcleaning]"
  },
  {
    id: "wendiscleaning",
    logo: "./img/logo/cogs-solid.svg",
    name: "Wendi's Cleaning Service",
    adress: "Number 4, Privet Drive, Little Whinging",
    rating: "4",
    services: "[standartcleaning, generalcleaning]"
  },
  {
    id: "residentialcleaning",
    logo: "./img/logo/dice-two-solid.svg",
    name: "Residential Cleaning Service",
    adress: "42 Wallaby Way, Sydney",
    rating: "3",
    services: "[officecleaning]"
  },
  {
    id: "hornshooves",
    logo: "./img/logo/cookie-bite-solid.svg",
    name: "Horns&Hooves",
    adress: "11 Derby Street, Nawton",
    rating: "4",
    services: "[carpetcleaning, furniturecleaning, poolcleaning]"
  },
  {
    id: "hehhah",
    logo: "./img/logo/drumstick-bite-solid.svg",
    name: "Heh&Hah",
    adress: "ul. Tolstogo 10, Minsk",
    rating: "5",
    services: "[repaircleaning, industrialcleaning, poolcleaning]"
  }
];

export default companies;