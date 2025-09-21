const crackers = [
  { name_en: "7 Cm Electric Sparklers", name_ta: "7செ.மீ மின் சிலம்பு", price: 50 },
  { name_en: "7 Cm Colour Sparklers", name_ta: "7செ.மீ நிற சிலம்பு", price: 60 },
  { name_en: "10 Cm Electric Sparklers", name_ta: "10செ.மீ மின் சிலம்பு", price: 100 },
  { name_en: "10 Cm Colour Sparklers", name_ta: "10செ.மீ நிற சிலம்பு", price: 100 },
  { name_en: "12 Cm Electric Sparklers", name_ta: "12செ.மீ மின் சிலம்பு", price: 100 },
  { name_en: "15 Cm Red Sparklers", name_ta: "15செ.மீ சிவப்பு சிலம்பு", price: 240 },
  { name_en: "30 Cm Green Sparklers", name_ta: "30செ.மீ பச்சை சிலம்பு", price: 230 },
  { name_en: "Flower Pots Small", name_ta: "சிறிய பூச்செண்டு", price: 280 },
  { name_en: "Flower Pots Big", name_ta: "பெரிய பூச்செண்டு", price: 300 },
  { name_en: "Flower Pots Deluxe", name_ta: "டிலக்ஸ் பூச்செண்டு", price: 900 },
  { name_en: "Tri Colour Fountain", name_ta: "மூவர்ண புட்டு", price: 1300 },
  { name_en: "Ground Chakkar Small", name_ta: "சிறிய பூமிச்சக்கரம்", price: 200 },
  { name_en: "Ground Chakkar Big", name_ta: "பெரிய பூமிச்சக்கரம்", price: 600 },
  { name_en: "Ground Chakkar Deluxe", name_ta: "டிலக்ஸ் பூமிச்சக்கரம்", price: 640 },
  { name_en: "Double Rotation Wheel", name_ta: "இரட்டை சக்கரம்", price: 800 },
  { name_en: "Whistling Wheel", name_ta: "விசிலடி சக்கரம்", price: 700 },
  { name_en: "Baby Rockets", name_ta: "சிறிய ராக்கெட்", price: 220 },
  { name_en: "Rocket Bomb", name_ta: "ராக்கெட் பாம்", price: 360 },
  { name_en: "2 Sound Rocket", name_ta: "இரட்டை சத்தம் ராக்கெட்", price: 660 },
  { name_en: "Sky Whistle Rocket", name_ta: "வான விசில் ராக்கெட்", price: 740 },
  { name_en: "Kuruvi Crackers", name_ta: "குருவி வெடி", price: 40 },
  { name_en: "Lakshmi Crackers Small", name_ta: "சிறிய லட்சுமி வெடி", price: 100 },
  { name_en: "Mega Lakshmi Crackers", name_ta: "மெகா லட்சுமி வெடி", price: 400 },
  { name_en: "Bullet Bomb", name_ta: "புல்லட் பாம்", price: 200 },
  { name_en: "Hydro Bomb", name_ta: "ஹைட்ரோ பாம்", price: 340 },
  { name_en: "King of King Bomb", name_ta: "கிங் ஆஃப் கிங் பாம்", price: 600 },
  { name_en: "Classic Bomb", name_ta: "கிளாசிக் பாம்", price: 760 },
  { name_en: "Paper Bomb Big", name_ta: "பேப்பர் பாம் பெரியது", price: 380 },
  { name_en: "Half Kg Paper Bomb", name_ta: "அரை கிலோ பேப்பர் பாம்", price: 560 },
  { name_en: "1 Kg Paper Bomb", name_ta: "ஒரு கிலோ பேப்பர் பாம்", price: 1300 },
  { name_en: "24 Deluxe Crackers", name_ta: "24 டிலக்ஸ் வெடி", price: 280 },
  { name_en: "50 Deluxe Crackers", name_ta: "50 டிலக்ஸ் வெடி", price: 560 },
  { name_en: "100 Deluxe Crackers", name_ta: "100 டிலக்ஸ் வெடி", price: 1300 },
  { name_en: "100 Bullets", name_ta: "100 புல்லட் வெடிகள்", price: 300 },
  { name_en: "200 Penats", name_ta: "200 வெடிகள்", price: 500 },
  { name_en: "1000 Street Dogs", name_ta: "1000 தெருவு வெடிகள்", price: 1200 },
  { name_en: "5000 High Light", name_ta: "5000 மேகா வெடிகள்", price: 6000 },
  { name_en: "10000 Micky Sounds", name_ta: "10000 மிக்கி வெடிகள்", price: 12000 },
  { name_en: "Niagara Falls Shots", name_ta: "நயாகரா ஷாட்ஸ்", price: 560 },
  { name_en: "Twin Shower", name_ta: "இரட்டை ஷவர்", price: 700 },
  { name_en: "Yellow Rangers", name_ta: "மஞ்சள் ரேஞ்சர்", price: 1500 },
  { name_en: "Milky Way Shot", name_ta: "மில்கி வே ஷாட்", price: 2300 },
  { name_en: "Double Ball Phoenix", name_ta: "டபுள் பால் ஃபீனிக்ஸ்", price: 2400 },
  { name_en: "7 Colour Comet", name_ta: "ஏழு நிற காமெட்", price: 2300 },
  { name_en: "7 Shots Colour", name_ta: "7 ஷாட்ஸ் கலர்", price: 600 },
  { name_en: "25 Shots Crackling", name_ta: "25 ஷாட்ஸ் கிராக்லிங்", price: 1500 },
  { name_en: "50 Shots Crackling", name_ta: "50 ஷாட்ஸ் கிராக்லிங்", price: 3500 },
  { name_en: "100 Shots Crackling", name_ta: "100 ஷாட்ஸ் கிராக்லிங்", price: 5200 },
  { name_en: "240 Shots Crackling", name_ta: "240 ஷாட்ஸ் கிராக்லிங்", price: 20000 },
  { name_en: "Dancing Butterfly", name_ta: "ஆடும் வண்ணத்துப்பூச்சி", price: 500 },
  { name_en: "Helicopter", name_ta: "ஹெலிகாப்டர் வெடி", price: 600 },
  { name_en: "Magic Peacock Dance", name_ta: "மாயில் ஆட்டம்", price: 900 },
  { name_en: "Bada Peacock", name_ta: "பெரிய மயில்", price: 2200 },
  { name_en: "Cocktail Fountain", name_ta: "காக்டெயில் புட்டு", price: 900 },
  { name_en: "Popcorn Gold Fountain", name_ta: "பாப்கார்ன் தங்க புட்டு", price: 1500 },
  { name_en: "Colour Smoke", name_ta: "நிற புகை", price: 1300 },
  { name_en: "Lollipop Fountain", name_ta: "லாலிபாப் புட்டு", price: 1600 }
];


const listDiv = document.getElementById("crackerList");

crackers.forEach(c => {
  const discountPrice = (c.price * 0.1).toFixed(2); // 90% OFF
  const card = document.createElement("div");
  card.className = "cracker-card";
  card.innerHTML = `
    <div class="cracker-info">
      <h3>${c.name_en} <span>(${c.name_ta})</span></h3>
      <p><span class="price">₹${c.price}</span> → <span class="discount">₹${discountPrice}</span></p>
    </div>
    <button class="buy-btn" onclick="buyCracker('${c.name_en}')">Buy</button>
  `;
  listDiv.appendChild(card);
});

function buyCracker(crackerName) {
  const phoneNumber = "916384686897"; // WhatsApp number
  const message = encodeURIComponent(`Hi, I want to buy ${crackerName} from your cracker shop.`);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
