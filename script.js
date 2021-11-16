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
*/

/*
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

  sheznaya:
    tartaglia
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

var four_star = "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Icon_4_Stars.png/revision/latest/scale-to-width-down/51?cb=20201226100702"
var five_star = "https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Icon_5_Stars.png/revision/latest/scale-to-width-down/63?cb=20201226100736"

let travelerDatabase = [
  {
    "title" : "Aether",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Traveler_Male_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024043323",
    "color" : "#e9c979", // match element color
    "rarity" : five_star,
    "element" : "Ameno, Geo, Electro (Geo-coded)",
    "weapon" : "Sword",
    "lore" : "Traveler (Male)"
  },
  {
    "title" : "Lumine",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Traveler_Female_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024043415",
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
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024042752",
    "color" : "#bcecd7", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Bow",
    "lore" : "Current Mortal Vessel of Barbatos, the Ameno Archon"
  },
  {
    "title" : "Jean",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg/revision/latest/scale-to-width-down/562?cb=20210706133041",
    "color" : "#bcecd7", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Sword",
    "lore" : "Acting Grand Master of the Knights of Favonius"
  },
  {
    "title" : "Kaeya",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Character_Kaeya_Card.jpg/revision/latest/scale-to-width-down/562?cb=20190704215128",
    "color" : "#ccf6f8", // match element color
    "rarity" : four_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Cavalry Captain of the Knights of Favonius"
  },
  {
    "title" : "Amber",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024042115",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Bow",
    "lore" : "Final Remaining Outrider of the Knights of Favonius"
  },
  {
    "title" : "Lisa",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Character_Lisa_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024042621",
    "color" : "#d590fa", // match element color
    "rarity" : four_star,
    "element" : "Electro",
    "weapon" : "Catalyst",
    "lore" : "Librarian of the Knights of Favonius"
  },
  {
    "title" : "Barbara",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Character_Barbara_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024042228",
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
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png/revision/latest/scale-to-width-down/562?cb=20201217052506",
    "color" : "#f4d284", // match element color
    "rarity" : five_star,
    "element" : "Geo",
    "weapon" : "Polearm",
    "lore" : "Current Mortal Vessel of Morax, the Geo Archon"
  },
  {
    "title" : "Ningguang",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Character_Ningguang_Card.jpg/revision/latest/scale-to-width-down/562?cb=20200401040354",
    "color" : "#f4d284", // match element color
    "rarity" : four_star,
    "element" : "Geo",
    "weapon" : "Catalyst",
    "lore" : "Tianquan of the Liyue Qixing"
  },
  {
    "title" : "Yanfei",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Character_Yanfei_Card.png/revision/latest/scale-to-width-down/562?cb=20210422100113",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Catalyst",
    "lore" : "Legal Advisor; Half Adeptus-Half Human"
  },
  {
    "title" : "Xiangling",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Character_Xiangling_Card.jpg/revision/latest/scale-to-width-down/562?cb=20200331191545",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Polearm",
    "lore" : "Head Chef at Wanmin Restaurant"
  },
  {
    "title" : "Qiqi",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg/revision/latest/scale-to-width-down/562?cb=20200904131037",
    "color" : "#ccf6f8", // match element color
    "rarity" : five_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Works at Bubu Pharmacy; is a zombie"
  },
  {
    "title" : "Chongyun",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Character_Chongyun_Card.jpg/revision/latest/scale-to-width-down/562?cb=20201024042420",
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
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Raiden_Shogun_Card.jpg/revision/latest/scale-to-width-down/562?cb=20210914130858",
    "color" : "#d590fa", // match element color
    "rarity" : five_star,
    "element" : "Electro",
    "weapon" : "Polearm (Sword when ultimate is activated)",
    "lore" : "Vessel of Beelzebul, the Electro Archon"
  },
  {
    "title" : "Kaedehara Kazuha",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png/revision/latest/scale-to-width-down/562?cb=20210607100841",
    "color" : "#89f2c3", // match element color
    "rarity" : five_star,
    "element" : "Ameno",
    "weapon" : "Sword",
    "lore" : "Wandering Samurai; temporary member of The Crux"
  },
  {
    "title" : "Kamisato Ayaka",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png/revision/latest/scale-to-width-down/562?cb=20210607100828",
    "color" : "#ccf6f8", // match element color
    "rarity" : five_star,
    "element" : "Cryo",
    "weapon" : "Sword",
    "lore" : "Eldest Daughter of the Kamisato Clan"
  },
  {
    "title" : "Sangonomiya Kokomi",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Character_Sangonomiya_Kokomi_Card.jpg/revision/latest/scale-to-width-down/562?cb=20210722100135",
    "color" : "#31bbee", // match element color
    "rarity" : five_star,
    "element" : "Hydro",
    "weapon" : "Catalyst",
    "lore" : "Divine Priestess of Watatsumi Island and Descendant of the Sangonomiya Clan"
  },
  {
    "title" : "Thoma",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Character_Thoma_Card.jpg/revision/latest/scale-to-width-down/562?cb=20210830125722",
    "color" : "#ee764e", // match element color
    "rarity" : four_star,
    "element" : "Pyro",
    "weapon" : "Polearm",
    "lore" : "Housekeepyer for the Kamisato Clan"
  },
  {
    "title" : "Sayu",
    "picture_url" : "https://static.wikia.nocookie.net/gensin-impact/images/8/83/Character_Sayu_Card.png/revision/latest/scale-to-width-down/562?cb=20210607100829",
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
