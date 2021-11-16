let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElementTrav = document.getElementById('char-grid-traveler');
let contentGridElementMond = document.getElementById('char-grid-mondstat');
let contentGridElementLiyue = document.getElementById('char-grid-liyue');
let contentGridElementIna = document.getElementById('char-grid-inazuma');

/*
  info for each characters:
  photo!
  name (hu tao, chongyun, venti, etc.)
  rarity (4 or 5 star)
  weapon (catalyst, sword, etc.)
  element (ameno, pyro, hydro, etc.)
  region (mondstat, liyue, inazuma, etc.)
  lore/fun fact (job/title, relation to another character, etc.)

  characters that will get cards currently:
  traveler:
    aether
    lumine

  mondstat:
    lisa
    kaeya
    amber
    jean
    venti

  liyue:
    zhongli
    ningguang
    chongyun
    xiangling
    yanfei
    qiqi

  inazuma:
    raiden shogun
    ayaka
    kazuha
    thoma
    kokomi
    sayu
*/

/*
  COLORS:
  Ameno   ->  #89f2c3
  Pyro    ->  #ee764e
  Cryo    ->  #ccf6f8
  Electro ->  #d590fa
  Geo     ->  #f4d284
  Hydro   ->  #31bbee
*/

var four_star = "images/four_star.png"
var five_star = "images/five_star.png"

let travelerDatabase = [
  {
    "title" : "Aether",
    "picture_url" : "images/traveler_male.jpeg",
    "color" : "#e9c979", // match element color
    "rarity" : five_star,
    "element" : "Ameno, Geo, Electro (Geo-coded)",
    "weapon" : "Sword",
    "lore" : "Traveler (Male)"
  },
  {
    "title" : "Lumine",
    "picture_url" : "images/traveler_female.jpeg",
    "color" : "#b8e2f2", // match element color
    "rarity" : five_star,
    "element" : "Ameno, Geo, Electro (Ameno-coded)",
    "weapon" : "Sword",
    "lore" : "Traveler (Female)"
  }
];

let mondstatDatabase = [
  {
    "title" : "Venti",
    "picture_url" : "images/venti.jpeg",
    "color" : "#bcecd7", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Bow",
    "lore" : "Current Mortal Vessel of Barbatos, the Ameno Archon"
  },
  {
    "title" : "Jean",
    "picture_url" : "images/jean.jpeg",
    "color" : "#bcecd7", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Sword",
    "lore" : "Acting Grand Master of the Knights of Favonius"
  },
  {
    "title" : "Kaeya",
    "picture_url" : "images/kaeya.jpeg",
    "color" : "#ccf6f8", // match element color
    "rarity" : four_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Cavalry Captain of the Knights of Favonius"
  },
  {
    "title" : "Amber",
    "picture_url" : "images/amber.jpeg",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Bow",
    "lore" : "Final Remaining Outrider of the Knights of Favonius"
  },
  {
    "title" : "Lisa",
    "picture_url" : "images/lisa.jpeg",
    "color" : "#d590fa", // match element color
    "rarity" : four_star,
    "element" : "Electro",
    "weapon" : "Catalyst",
    "lore" : "Librarian of the Knights of Favonius"
  },
  {
    "title" : "Barbara",
    "picture_url" : "images/barbara.jpeg",
    "color" : "#31bbee", // match element color
    "rarity" : four_star,
    "element" : "Hydro",
    "weapon" : "Catalyst",
    "lore" : "Deaconess of the Church of Favonius; self-proclaimed 'idol'"
  }
];

let liyueDatabase = [
  {
    "title" : "Zhongli",
    "picture_url" : "images/zhongli.png",
    "color" : "#f4d284", // match element color
    "rarity" : five_star,
    "element" : "Geo",
    "weapon" : "Polearm",
    "lore" : "Current Mortal Vessel of Morax, the Geo Archon"
  },
  {
    "title" : "Ningguang",
    "picture_url" : "images/ningguang.jpeg",
    "color" : "#f4d284", // match element color
    "rarity" : four_star,
    "element" : "Geo",
    "weapon" : "Catalyst",
    "lore" : "Tianquan of the Liyue Qixing"
  },
  {
    "title" : "Yanfei",
    "picture_url" : "images/yanfei.png",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Catalyst",
    "lore" : "Legal Advisor; Half Adeptus-Half Human"
  },
  {
    "title" : "Xiangling",
    "picture_url" : "images/xiangling.jpeg",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Polearm",
    "lore" : "Head Chef at Wanmin Restaurant"
  },
  {
    "title" : "Qiqi",
    "picture_url" : "images/qiqi.jpeg",
    "color" : "#ccf6f8", // match element color
    "rarity" : five_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Works at Bubu Pharmacy; is a zombie"
  },
  {
    "title" : "Chongyun",
    "picture_url" : "images/chongyun.jpeg",
    "color" : "#ccf6f8", // match element color
    "rarity" : four_star,
    "element" : "Cryo",
    "weapon" : "Claymore",
    "lore" : "Exorcist"
  }
];

let inazumaDatabase = [
  {
    "title" : "Raiden Shogun (real name: Raiden Ei)",
    "picture_url" : "images/raiden_shogun.jpeg",
    "color" : "#d590fa", // match element color
    "rarity" : five_star,
    "element" : "Electro",
    "weapon" : "Polearm (Sword when ultimate is activated)",
    "lore" : "Vessel of Beelzebul, the Electro Archon"
  },
  {
    "title" : "Kaedehara Kazuha",
    "picture_url" : "images/kazuha.png",
    "color" : "#89f2c3", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Sword",
    "lore" : "Wandering Samurai; temporary member of The Crux"
  },
  {
    "title" : "Kamisato Ayaka",
    "picture_url" : "images/ayaka.png",
    "color" : "#ccf6f8", // match element color
    "rarity" : five_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Eldest Daughter of the Kamisato Clan"
  },
  {
    "title" : "Sangonomiya Kokomi",
    "picture_url" : "images/kokomi.jpeg",
    "color" : "#31bbee", // match element color
    "rarity" : five_star,
    "element" : "Hydro",
    "weapon" : "Catalyst",
    "lore" : "Divine Priestess of Watatsumi Island and Descendant of the Sangonomiya Clan"
  },
  {
    "title" : "Thoma",
    "picture_url" : "images/thoma.jpeg",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Polearm",
    "lore" : "Housekeepyer for the Kamisato Clan"
  },
  {
    "title" : "Sayu",
    "picture_url" : "images/sayu.png",
    "color" : "#89f2c3", // match element color
    "rarity" : four_star,
    "element" : "Ameno",
    "weapon" : "Claymore",
    "lore" : "Ninja from the Shuumatsuban"
  },
];

for (var i = 0; i < travelerDatabase.length; i++) {
  createElementProper(travelerDatabase[i], contentGridElementTrav);
}

for (var i = 0; i < mondstatDatabase.length; i++) {
  createElementProper(mondstatDatabase[i], contentGridElementMond);
}

for (var i = 0; i < liyueDatabase.length; i++) {
  createElementProper(liyueDatabase[i], contentGridElementLiyue);
}

for (var i = 0; i < inazumaDatabase.length; i++) {
  createElementProper(inazumaDatabase[i], contentGridElementIna);
}

function createElementProper(incomingJSON, content) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  /// Character Image
  let newImage = document.createElement("IMG");
  newImage.classList.add("char-img");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Rarity image
  let newRarity = document.createElement("IMG");
  newRarity.classList.add("rarity");
  newRarity.src = incomingJSON['rarity'];
  newContentElement.appendChild(newRarity);

  /// Name
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Lore
  let newContentSubhead3 = document.createElement("P");
  newContentSubhead3.innerText = "Title: " + incomingJSON['lore'];
  newContentElement.appendChild(newContentSubhead3);

  /// Element
  let newContentSubhead1 = document.createElement("P");
  newContentSubhead1.innerText = "Element: " + incomingJSON['element'];
  newContentElement.appendChild(newContentSubhead1);

  /// Weapon
  let newContentSubhead2 = document.createElement("P");
  newContentSubhead2.innerText = "Weapon: " + incomingJSON['weapon'];
  newContentElement.appendChild(newContentSubhead2);

  /// Add the item to the page
  content.appendChild(newContentElement);
}
