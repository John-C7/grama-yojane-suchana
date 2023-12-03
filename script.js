// Initial language setting (default to English)
var currentLanguage = "english";

function showTab(tab) {
  var homeContent = document.getElementById("homeContent");
  var taluksContent = document.getElementById("taluksContent");
  var informationContent = document.getElementById("informationContent");
  var newsContent = document.getElementById("newsContent");
  var gramPanchayatContent = document.getElementById("gramPanchayatContent");
  var contactContent = document.getElementById("contactContent");

  if (tab === "home") {
    homeContent.style.display = "block";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    gramPanchayatContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "taluks") {
    homeContent.style.display = "none";
    taluksContent.style.display = "block";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    gramPanchayatContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "information") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "block";
    newsContent.style.display = "none";
    gramPanchayatContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "news") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "block";
    gramPanchayatContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "gramPanchayat") {
    // Added
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    gramPanchayatContent.style.display = "block";
    contactContent.style.display = "none";
  } else if (tab === "contact") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    gramPanchayatContent.style.display = "none";
    contactContent.style.display = "block";
  }
}

function redirectToGramPanchayat() {
  showTab("gramPanchayat");
}

function toggleLanguage() {
  var langButton = document.querySelector("button");

  // Toggle between English and Kannada
  if (currentLanguage === "english") {
    langButton.textContent = "Switch to English";
    translateToKannada();
    currentLanguage = "kannada";
  } else {
    langButton.textContent = "Switch to Kannada";
    translateToEnglish();
    currentLanguage = "english";
  }
}
var gramaPanchayatMap = {
  Agara:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9851644630435!2d77.4846434751092!3d12.84423458745959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae40c41eaaaaab%3A0xada2e99105fe41c!2sAagara%20Grama%20Panchayath!5e0!3m2!1sen!2sin!4v1701503063759!5m2!1sen!2sin" width="100%" height="400" style="border:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  Ajjanahalli:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.967358441414!2d77.36934077511033!3d12.909819487399947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae378217ffeb41%3A0xa966751ff0f966df!2sAjjanahalli%20Village%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1701502848467!5m2!1sen!2sin" width="100%" height="400" style="border:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  ChannenaHalli:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72398.00715098389!2d77.32195585497654!3d12.954627819494641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3be26dc993d7%3A0x7692aeb82d3d7e8c!2sChennenahalli%20panchayat%20office!5e0!3m2!1sen!2sin!4v1701502926349!5m2!1sen!2sin" width="100%" height="400" style="border:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  CHIKKANAHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.412106808437!2d77.35272027510977!3d12.881201387425952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae37c2759a0edf%3A0x9448439fc4a00ba3!2sChikkanahalli%20Village%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1701502949311!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  CHOLANAYAKANAHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.74116717696!2d77.3135700324327!3d12.920808471655242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae31308eb6d0a5%3A0x56e286f2e86fc7fd!2sGrama%20Panchayat%20Cholanayakanahalli!5e0!3m2!1sen!2sin!4v1701503000793!5m2!1sen!2sin"" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  CHUNCHANAKUPPE:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.95649728135!2d77.38626457511035!3d12.910517587399273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae382ce91af1a5%3A0x348d2139af58ff73!2sChunchunkuppe%20Gram%20Panchayath%20Office!5e0!3m2!1sen!2sin!4v1701503031079!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  DODDATHOGURU:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.840078285555!2d77.65297527510934!3d12.853603687450997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c9e57136875%3A0x68b9246dd98ad9e7!2sDoddathogur%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1701507940903!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  HGOLLAHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5580.638605920996!2d77.47467000892591!3d12.873418121954087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5668f5ec11%3A0x4f9712b798936b91!2sH%20Gollahalli%20Gram%20Panchayat!5e0!3m2!1sen!2sin!4v1701507991907!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  KGOLLAHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16485.2786000858!2d77.43973166489741!3d12.842761523142702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae473e965c5fcb%3A0xd6b46dbc21194cf8!2sK%20Gollahalli%20Gram%20Panchayat!5e0!3m2!1sen!2sin!4v1701508046306!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  KAGGALIPURA:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.656825443386!2d77.50557857510844!3d12.800773487499107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4173b7f03853%3A0x9bd078b8900612f5!2sKaggalipura%20Gram%20Panchayati%20Office!5e0!3m2!1sen!2sin!4v1701508072283!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  KONAPPANAAGRAHAARA:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.846313379619!2d77.66115097510936!3d12.853201187451374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c99eaeb3c3f%3A0xc850d51119457df2!2sKonnapana%20Agrahara%20Grama%20Panchayath%20Office.!5e0!3m2!1sen!2sin!4v1701508114449!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  KUMBALAGODU:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4372507936246!2d77.44324617510979!3d12.879581587427396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae389812cbd9a7%3A0x744d556e421451ca!2sGram%20Panchayat%20Office%20Kumbalgodu!5e0!3m2!1sen!2sin!4v1701508133198!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NELAGULI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.26030816247!2d77.4836949417373!3d12.770058500108147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4343866c8a4b%3A0xbf47a8546acda4b5!2sNelaguli%20Grama%20Panchayat!5e0!3m2!1sen!2sin!4v1701508156512!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  RAMOHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2710.511477906629!2d77.4181703317475!3d12.907860758190978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzI4LjIiTiA3N8KwMjUnMDUuMCJF!5e0!3m2!1sen!2sin!4v1701508289922!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  SOMANAHALLI:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.336018507687!2d77.49393826859786!3d12.773056401137934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae43da96798931%3A0x49d6795953358f75!2sGrama%20Panchayat!5e0!3m2!1sen!2sin!4v1701508347370!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  SOOLIKERE:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.563609866825!2d77.44432817511075!3d12.935745487376291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae39101c2291c7%3A0xe37898ff403b5144!2sSulikere%20Gram%20Panchayat!5e0!3m2!1sen!2sin!4v1701508366580!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  THARALU:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124470.49213787274!2d77.40202322731618!3d12.862457290265723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae418407a836d1%3A0x4c6d00a14063eed5!2sTharalu%20Grama%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1701508388870!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  THAVAREKERE:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.245335859008!2d77.39182935218034!3d12.964001568938652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3a18eec470e5%3A0x154260d7d88e345a!2sTavarekere%20grampanchayathi%20karyalaya%20(Nada%20Kacheri)!5e0!3m2!1sen!2sin!4v1701508450050!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};

function searchLocation() {
  var gramaPanchayat = document.getElementById("gramaPanchayat").value;

  // Get the map container and replace its content with the embedded HTML code
  var mapContainer = document.getElementById("map");
  mapContainer.innerHTML = gramaPanchayatMap[gramaPanchayat];

  // Create an iframe with the Google Maps URL
  var mapIframe = document.createElement("iframe");
  mapIframe.src = googleMapsURL;
  mapIframe.width = "600";
  mapIframe.height = "450";
  mapIframe.style.border = "0";
  mapIframe.allowfullscreen = true;
  mapIframe.loading = "lazy";
  mapIframe.referrerpolicy = "no-referrer-when-downgrade";

  // Get the map container and replace its content with the iframe
  var mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";
  mapContainer.appendChild(mapIframe);
}

var gramPanchayatOptionsSouth = [
  "Agara",
  "Ajjanahalli",
  "ChannenaHalli",
  "CHIKKANAHALLI",
  "CHOLANAYAKANAHALLI",
  "CHUNCHANAKUPPE",
  "DODDATHOGURU",
  "HGOLLAHALLI",
  "KGOLLAHALLI",
  "KAGGALIPURA",
  "KONAPPANAAGRAHAARA",
  "KUMBALAGODU",
  "NELAGULI",
  "RAMOHALLI",
  "SOMANAHALLI",
  "SOOLIKERE",
  "THARALU",
  "THAVAREKERE",
];

// Function to update Grama Panchayat options based on the selected district
function updateGramaPanchayatOptions() {
  var taluk = document.getElementById("taluk").value;
  var gramaPanchayatSelect = document.getElementById("gramaPanchayat");

  gramaPanchayatSelect.innerHTML = "";

  // Add default option
  gramaPanchayatSelect.appendChild(new Option("--", "--"));

  if (taluk === "BENGALURU SOUTH") {
    for (var i = 0; i < gramPanchayatOptionsSouth.length; i++) {
      gramaPanchayatSelect.appendChild(
        new Option(gramPanchayatOptionsSouth[i], gramPanchayatOptionsSouth[i])
      );
    }
  }
}

function translateToKannada() {
  document.getElementById("headerContent").innerHTML = `
  <h1>ಗ್ರಾಮೀಣ ಮಾಹಿತಿ ಪೋರ್ಟಲ್</h1>`;
  document.getElementById("navContent").innerHTML = `
  <a href="#home" onclick="showTab('home')">ಮುಖಪುಟ</a>
  <a href="#taluks" onclick="showTab('taluks')">ತಾಲೂಕುಗಳು</a>
  <a href="#information" onclick="showTab('information')">ಮಾಹಿತಿ</a>
  <a href="#news" onclick="showTab('news')">ಸುದ್ದಿ</a>
  <a href="#gramPanchayat" onclick="showTab('gramPanchayat')">ಗ್ರಾಮ ಪಂಚಾಯತ್</a>
  <a href="#contact" onclick="showTab('contact')">ಸಂಪರ್ಕ</a>
  `;
  document.getElementById("footerContent").innerHTML = `
    <p>&copy; 2023 ಗ್ರಾಮೀಣ ಮಾಹಿತಿ ಪೋರ್ಟಲ್</p>
  `;
  document.getElementById("homeContent").innerHTML = `
    <h2>ನಮ್ಮ ಗ್ರಾಮೀಣ ಮಾಹಿತಿ ಪೋರ್ಟಲ್ ಗೆ ಸುಸ್ವಾಗತ!</h2>
    <p>ಈ ವೆಬ್‌ಸೈಟ್ ಹಳ್ಳಿಗಳಿಗೆ ಲಾಭಕರವಾಗಿರುವ ಸರ್ಕಾರದ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಹತ್ವದ ಮಾಹಿತಿ ಒದಗಿಸುತ್ತದೆ. ಇಲ್ಲಿ ನೀವು ಈ ಯೋಜನೆಗಳ ವಿವರಗಳನ್ನು ಅಧ್ಯಯನಿಸಬಹುದು ಎಂಬ ಲಿಂಕ್‌ಗಳನ್ನು ಕಾಣಬಹುದು.</p>
    <p><h3>ನಿಮ್ಮ ಹತ್ತಿರದ ಗ್ರಾಮ ಪಂಚಾಯತ್ ಕಚೇರಿಯನ್ನು ಹುಡುಕಿ <button onclick="redirectToGramPanchayat()">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</button></h3></p>
    <p><strong>ಸಂದರ್ಭ:</strong> ಗ್ರಾಮೀಣ ವಿಕಾಸವು ಮುಖ್ಯವಾಗಿದೆ, ಮತ್ತು ಈ ಪೋರ್ಟಲ್ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳೇನೋ ಸರ್ಕಾರದ ಹೊಗಳಿಕೆಗಳಡಿಯಲ್ಲಿ ಸೇರುತ್ತದೆ. ಇಂತಹ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಹಳ್ಳಿಯನ್ನು ಜ್ಞಾನದಿಂದ ಶಕ್ತಿಗೊಳಿಸಿ.</p>

  `;
  document.getElementById("contactContent").innerHTML = `
        <h2>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
        <p>ಈ ವೆಬ್ಸೈಟ್ ಒಂದು AICTE ಯಜಮಾನತ್ವದ ಭಾಗವಾಗಿ ರಚಿಸಲಾಗಿದೆ</p>
        <p>ಸಿಎಸ್ಇ ವಿಭಾಗದಿಂದ ದಯಾನಂದ ಸಾಗರ ತಾಂತ್ರಿಕ ಮತ್ತು ವಿವಿಧಿಯ ಮಂಜೂರಿಗೆ ಸೇರಿದ ವಿದ್ಯಾರ್ಥಿಗಳ ಕೈಯಲ್ಲಿ ಕೃತಿ ಕಾರ್ಯದ ಭಾಗವಾಗಿದೆ</p>
        <p>ಪ್ರಶ್ನೆಗಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ: <a href="mailto:Karthikrr@duck.com">ಇ-ಮೇಲ್</a></p>
        <p>ಯಾವುದೇ ದೋಷ ಮತ್ತು ಸೂಚನೆಗಳನ್ನು ವರದಿಸಲಾಗಿದೆ ಎಂದರೆ: <a href="github.com/Karthik-R-R">ಸಂಪರ್ಕ-1</a>  <a href="github.com/John-C7">ಸಂಪರ್ಕ-2</a></p>
        <p>ಸೋರ್ಸ್ ಕೋಡ್: <a href="https://github.com/Karthik-R-R/grama-yojane-suchana">ಗ್ರಾಮ ಯೋಜನೆ ಸೂಚನಾ</a></p>

    `;
  document.getElementById("taluksContent").innerHTML = `
  <h2>ಕರ್ನಾಟಕ-ಒನ್ ಕೇಂದ್ರಗಳು</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>ಕರ್ನಾಟಕ-ಒನ್ ಕೇಂದ್ರಗಳು</h3>
      <p>ಕರ್ನಾಟಕ-ಒನ್ ಕೇಂದ್ರಗಳ ಪಟ್ಟಿ <a href="https://www.karnatakaone.gov.in/Public/CenterDetails" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
  </div>
  
  <h2>ಮೈಸೂರು-ಒನ್ ಕೇಂದ್ರಗಳು</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>ಮೈಸೂರು-ಒನ್ ಕೇಂದ್ರಗಳು</h3>
      <p>ಮೈಸೂರು-ಒನ್ ಕೇಂದ್ರಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ <a href="https://www.karnataka.com/mysore/mysore-one/" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
  </div>
  
  <h2>ತುಮಕೂರು-ಒನ್ ಕೇಂದ್ರಗಳು</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>ತುಮಕೂರು-ಒನ್ ಕೇಂದ್ರಗಳು</h3>
      <p>ತುಮಕೂರು-ಒನ್ ಕೇಂದ್ರಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ <a href="https://www.karnataka.com/govt/tumkur-one/" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
  </div>
  
    
    <h2>ತಾಲೂಕುಗಳನ್ನು ಅನ್ವಯಿಸಿ</h2>
    
    <div class="taluk-box" id="agara">
        <h3>ಅಗರಾ</h3>
        <p>ಅಗರಾ ತಾಲೂಕಿನ ಬಗ್ಗೆ ಮಾಹಿತಿ.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/agara.html" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="taluk-box" id="Badamanavarthekaval">
        <h3>ಬಡಮಾನವರ್ತೇಕಾವಲ್</h3>
        <p>ಬಡಮಾನವರ್ತೇಕಾವಲ್ ತಾಲೂಕಿನ ಬಗ್ಗೆ ಮಾಹಿತಿ.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/badamanavarthekaval.html" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="taluk-box" id="Kaggalipura">
        <h3>ಕಗ್ಗಲಿಪುರ</h3>
        <p>ಕಗ್ಗಲಿಪುರ ತಾಲೂಕಿನ ಬಗ್ಗೆ ಮಾಹಿತಿ.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/kaggalipura.html" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="taluk-box" id="O B Chudahalli">
        <h3>ಒ ಬಿ ಚುಡಹಳ್ಳಿ</h3>
        <p>ಒ ಬಿ ಚುಡಹಳ್ಳಿ ತಾಲೂಕಿನ ಬಗ್ಗೆ ಮಾಹಿತಿ.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/o-b-chudahalli.html" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    `;
  document.getElementById("informationContent").innerHTML = `
    <h2>ಉಪಯುಕ್ತ ಮಾಹಿತಿ</h2>
    
    <div class="info-box">
        <h3>ಕರ್ನಾಟಕ ಭೌಗೋಳಿಕ ಮಾಹಿತಿ ವ್ಯವಸ್ಥೆ</h3>
        <p>ಬಾಕ್ಸ್ 1 ಬಗ್ಗೆ ಮಾಹಿತಿ. <a href="https://kgis.ksrsac.in/kgis/" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ಕರ್ನಾಟಕ ಸರ್ಕಾರ</h3>
        <p>ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ವೆಬ್ಸೈಟ್  <a href="https://www.karnataka.gov.in/english" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ಗ್ರಾಮೀಣ ಕುಡಿಯುವ ನೀರು ಮತ್ತು ಸಾಫೆಕರಣ ಇಲಾಖೆ</h3>
        <p>ಗ್ರಾಮೀಣ ಕುಡಿಯುವ ನೀರು ಮತ್ತು ಸಾಫೆಕರಣ ಇಲಾಖೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿ  <a href="https://english.swachhamevajayate.org/" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್ ಇಲಾಖೆ</h3>
        <p>ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್ ಇಲಾಖೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿ  <a href="https://rdpr.karnataka.gov.in/english" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ವಿಸ್ತಾರ ನಿರ್ವಹಣ ಪರಿಸರ</h3>
        <p>ಬಾಕ್ಸ್ 5 ಬಗ್ಗೆ ಮಾಹಿತಿ. <a href="https://www.manage.gov.in/fpoacademy/CGSchemes/central-schemes.asp" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ</h3>
        <p>ಭಾರತ ಸರ್ಕಾರದ ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆಯ ಅಧಿಕೃತ ವೆಬ್ಸೈಟ್  <a href="https://www.education.gov.in/schemes" target="_blank">ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ</a></p>
    </div>

    <div class="info-box">
        <h3>ಸ್ಟಾರ್ಟಅಪ್ ಇಂಡಿಯಾ</h3>
        <p>ಉದ್ಯಮ ಮತ್ತು ಆಂತರಿಕ ವ್ಯಾಪಾರ ಬೆಳವಣಿಗೆ ಇಲಾಖೆಯ ಅಧಿಕೃತ ವೆಬ್ಸೈಟ್  <a href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html
}
`;
  document.getElementById("newsContent").innerHTML = `
<h2>ಕೊನೆಯ ಸುದ್ದಿಗಳು</h2>
<div class="news-box">
    <h3>ದಿನಚರಿ ಬೆಲೆ ಪಟ್ಟಿ</h3>
    <p>ಹಣ್ಣು ಮತ್ತು ತರಕಾರಿಗಳ ದಿನಚರಿ ಬೆಲೆ ಪಟ್ಟಿ  <a href="https://market.todaypricerates.com/vegetables-daily-price" target="_blank">ಮತ್ತಷ್ಟು ಓದಿ</a></p>
</div>


<div class="news-box">
<h3>ರೈತ ಕಲ್ಯಾಣ ಯೋಜನೆ</h3>
<p>ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಮಂತ್ರಾಲಯ || ದಿನಾಂಕ: 01 ಆಗಸ್ಟ್ 2023 5:34 ಅಪರಾಹ್ನ ರಿಂದ PIB ದೆಹಲಿ<a href="https://pib.gov.in/PressReleasePage.aspx?PRID=1944749" target="_blank">ಮತ್ತಷ್ಟು ಓದಿ</a></p>
</div>

<div class="news-box">
<h3>ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್</h3>
<p>ಕುರಿತು ಕೊನೆಯ ಅಪ್ಡೇಟ್ಗಳು <a href="https://www.india.gov.in/topics/rural" target="_blank">ಮತ್ತಷ್ಟು ಓದಿ</a></p>
</div>

<div class="news-box">
<h3>2023 ರ ಸರ್ಕಾರದ ರಜಾ ದಿನಗಳ ಪಟ್ಟಿ</h3>
<p>ಕೊನೆಯ ಅಪ್ಡೇಟ್ಗಳು <a href="https://ceg.karnataka.gov.in/frontend/opt1/pdfs/HOLIDAYSLIST2023.pdf" target="_blank">ಮತ್ತಷ್ಟು ಓದಿ</a></p>
</div>

<div class="news-box">
<h3>ಕರ್ನಾಟಕ-ಎಸಮಿಕ್ಷ</h3>
<p>ಕರ್ನಾಟಕ-ಎಸಮಿಕ್ಷ ಹೊಸ ಸಮಯ, ಆನ್ಲೈನ್ ಸಿಸ್ಟಂ ನಿರ್ವಹಿಸಲು . <a href="https://esamiksha.gov.in/Karnataka/" target="_blank">ಮತ್ತಷ್ಟು ಓದಿ</a></p>
</div>
<div class="news-box">
    <h3>ಕರ್ನಾಟಕ-ಒನ್</h3>
    <p>ಕರ್ನಾಟಕ ಒನ್ ಆಫೀಸಿಯಲ್ ವೆಬ್‌ಸೈಟ್ ಕೊನೆಯ ಅಪ್‌ಡೇಟ್ಗಳು <a href="https://www.karnatakaone.gov.in/" target="_blank">ಓದಿ</a></p>
</div>
<div class="news-box">
    <h3>ಕರ್ನಾಟಕ-ಡೇಟಾ-ಗವ್</h3>
    <p>ಗ್ರಾಮೀಣ ಡೇಟಾಸೆಟ್ || 01/06/2023 ರಂದು ನವಿಲು <a href="https://karnataka.data.gov.in/catalogs?sector=Rural" target="_blank">ಓದಿ</a></p>
</div>
</div>

`;
  document.getElementById("gramPanchayatContent").innerHTML = `
  <h2>ಗ್ರಾಮ ಪಂಚಾಯತ್</h2>
    
  <label for="district">ಜಿಲ್ಲೆ *</label>
  <select id="district" name="district">
      <option value="BENGALURU">ಬೆಂಗಳೂರು</option>
      <!-- ಅವಶ್ಯವಿದ್ದಾಗ ಇತರ ಜಿಲ್ಲೆ ಆಯ್ಕೆಗಳನ್ನು ಸೇರಿಸಿ -->
  </select>
  
  <label for="taluk">ತಾಲೂಕು *</label>
  <select id="taluk" name="taluk" onchange="updateGramaPanchayatOptions()">
      <option value="BENGALURU SOUTH">ಬೆಂಗಳೂರು ದಕ್ಷಿಣ</option>
      <option value="BENGALURU NORTH">ಬೆಂಗಳೂರು ಉತ್ತರ</option>
      <option value="BENGALURU EAST">ಬೆಂಗಳೂರು ಪೂರ್ವ</option>
      <option value="BENGALURU WEST">ಬೆಂಗಳೂರು ಪಶ್ಚಿಮ</option>
  </select>

  <label for="gramaPanchayat">ಗ್ರಾಮ ಪಂಚಾಯತ್ *</label>
  <select id="gramaPanchayat" name="gramaPanchayat">
      <option value="Agara">ಆಗರ</option>
      <option value="Ajjanahalli">ಅಜ್ಜನಹಳ್ಳಿ</option>
      <option value="ChannenaHalli">ಚನ್ನೇನ ಹಳ್ಳಿ</option>
      <option value="CHIKKANAHALLI">ಚಿಕ್ಕನ ಹಳ್ಳಿ</option>
      <option value="CHOLANAYAKANAHALLI">ಚೊಲನಯಕನ ಹಳ್ಳಿ</option>
      <option value="CHUNCHANAKUPPE">ಚುಂಚನ ಕುಪ್ಪೆ</option>
      <option value="DODDATHOGURU">ದೊಡ್ಡ ತೋಗುರು</option>
      <option value="HGOLLAHALLI">ಹೆ. ಗೊಳ್ಳಹಳ್ಳಿ</option>
      <option value="KGOLLAHALLI">ಕೆ. ಗೊಳ್ಳಹಳ್ಳಿ</option>
      <option value="KAGGALIPURA">ಕಗ್ಗಲಿಪುರ</option>
      <option value="KONAPPANAAGRAHAARA">ಕೊನಪ್ಪನ ಆಗ್ರಹಾರ</option>
      <option value="KUMBALAGODU">ಕುಂಬಾಳಗೋಡು</option>
      <option value="NELAGULI">ನೆಲಗುಳಿ</option>
      <option value="RAMOHALLI">ರಾಮೊಹಳ್ಳಿ</option>
      <option value="SOMANAHALLI">ಸೋಮನ ಹಳ್ಳಿ</option>
      <option value="SOOLIKERE">ಸೂಲಿಕೆರೆ</option>
      <option value="THARALU">ತಾರಾಳು</option>
      <option value="THAVAREKERE">ತವರೇಕೆರೆ</option>
  </select>
  
  <button onclick="searchLocation()">ಹುಡುಕಾಟ</button>
  
  <div id="map"></div> <!-- ಇದು ನಕ್ಷೆ ಪ್ರದರ್ಶಿಸಲ್ಪಡುವ ಸ್ಥಳ -->
  `;
}
function translateToEnglish() {
  document.getElementById("homeContent").innerHTML = `
  
        <h2>Welcome to our Rural Information Portal!</h2>
        <p>This website provides valuable information about government schemes aimed at benefiting villages. You will find links to the respective government websites where you can explore detailed information about these schemes.</p>
        <p><h3>Find your nearest Gram Panchayat Office <button onclick="redirectToGramPanchayat()">Click Here</button></h3></p>
        <p><strong>Context:</strong> Rural development is a priority, and this portal serves as a bridge between rural communities and government initiatives. Stay informed and empower your village with the knowledge of available schemes.</p>

  `;
  document.getElementById("contactContent").innerHTML = `
        <h2>Contact Us</h2>
        <p>This website was created as a part of the project work under AICTE</p>
        <p>By the students from the Department of CSE, Dayananda Sagar Academy of Technology and Management</p>
        <p>For inquiries, please contact us at: <a href="mailto:Karthikrr@duck.com">E-Mail</a></p>
        <p>To report any Bugs and Suggestions: <a href="github.com/Karthik-R-R">Contact-1</a>  <a href="github.com/John-C7">Contact-2</a></p>
        <p>Source Code: <a href="https://github.com/Karthik-R-R/grama-yojane-suchana">Grama Yojane Suchana</a></p>
    `;
  document.getElementById("informationContent").innerHTML = `
    <h2>Useful Information</h2>

<div class="info-box">
    <h3>KARNATAKA GEOGRAPHIC INFORMATION SYSTEM</h3>
    <p>Information about Box 1. <a href="https://kgis.ksrsac.in/kgis/" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>GOVERNMENT OF KARNATAKA</h3>
    <p>Official Website of GOVERNMENT of KARNATAKA  <a href="https://www.karnataka.gov.in/english" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>Ruarl Driking Water And Santitation</h3>
    <p>Department of Ruarl Driking Water And Santitation  <a href="https://english.swachhamevajayate.org/" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>Rural Development and Panchayat Raj Department</h3>
    <p>Department of Rural Development and Panchayat Raj, Government of Karnataka  <a href="https://rdpr.karnataka.gov.in/english" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>National Institute of Agricultural Extention Management</h3>
    <p>Information about Box 5. <a href="https://www.manage.gov.in/fpoacademy/CGSchemes/central-schemes.asp" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>Department of Higher Education</h3>
    <p>Official Website of Department of Higher Education, Government of India <a href="https://www.education.gov.in/schemes" target="_blank">Learn more</a></p>
</div>

<div class="info-box">
    <h3>Startup India</h3>
    <p>Official Website of Department for Promotion of Industry and Internal Trade <a href="https://www.startupindia.gov.in/content/sih/en/government-schemes.html" target="_blank">Learn more</a></p>
</div>
<div class="info-box">
    <h3>SUKANYA SAMRIDDHI YOJANA</h3>
    <p>Information about Box 8. <a href="https://transformingindia.mygov.in/scheme/sukanya-samriddhi-yojana/" target="_blank">Learn more</a></p>
</div>
<div class="info-box">
    <h3>Fertilizer Subsidy</h3>
    <p>MINISTRY OF CHEMICALS & FERTILIZERS, Department of Fertilizers, Govt. of India. <a href="https://www.fert.nic.in/fertilizer-subsidy" target="_blank">Learn more</a></p>
</div>
<div class="info-box">
    <h3>MINISTRY OF RURAL DEVELOPMENT</h3>
    <p>List of Central Government Schemes for Ruarl Development. <a href="https://rural.nic.in/en/scheme-websites" target="_blank">Learn more</a></p>
</div>
<div class="info-box">
<h3>Panchatantra</h3>
<p>Gram Panchayat information. <a href="https://panchatantra.karnataka.gov.in/" target="_blank">Learn More</a></p></div>
    `;
  document.getElementById("taluksContent").innerHTML = `
  <h2>Karnataka-One Centers</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>Karnataka-One Centers</h3>
      <p>List of Karnataka One Centers <a href="https://www.karnatakaone.gov.in/Public/CenterDetails" target="_blank">Learn more</a></p>
  </div>
  <h2>Mysore-One Centers</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>Mysore-One Centers</h3>
      <p>Information about Mysore One Centers <a href="https://www.karnataka.com/mysore/mysore-one/" target="_blank">Learn more</a></p>
  </div>
  <h2>Tumkuru-One Centers</h2>
  <div class="taluk-box" id="Bengaluru Rural">
      <h3>Tumkuru-One Centers</h3>
      <p>Information about Tumkuru One Centers <a href="https://www.karnataka.com/govt/tumkur-one/" target="_blank">Learn more</a></p>
  </div>
    <h2>Explore Taluks in Bengaluru South</h2>

    <div class="taluk-box" id="agara">
        <h3>Agara</h3>
        <p>Information about Agara Taluk.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/agara.html" target="_blank">Learn more</a></p>
    </div>

    <div class="taluk-box" id="Badamanavarthekaval">
        <h3>Badamanavarthekaval</h3>
        <p>Information about Badamanavarthekaval.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/badamanavarthekaval.html" target="_blank">Learn more</a></p>
    </div>

    <div class="taluk-box" id="Kaggalipura">
        <h3>Kaggalipura</h3>
        <p>Information about Kaggalipura.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/kaggalipura.html" target="_blank">Learn more</a></p>
    </div>

    <div class="taluk-box" id="O B Chudahalli">
        <h3>O B Chudahalli</h3>
        <p>Information about O B Chudahalli.<a href="https://villageinfo.in/karnataka/bangalore/bangalore-south/o-b-chudahalli.html" target="_blank">Learn more</a></p>
    </div>
    `;

  document.getElementById("newsContent").innerHTML = `
    <h2>Latest News</h2>
    <div class="news-box">
      <h3>Daily Price List</h3>
      <p>Daily market price list for fruits and vegitables  <a href="https://market.todaypricerates.com/vegetables-daily-price" target="_blank">Read more</a></p>
    </div>

<div class="news-box">
    <h3>Farmer Welfare Scheme</h3>
    <p>Ministry of Agriculture & Farmers Welfare || Date: Posted On: 01 AUG 2023 5:34PM by PIB Delhi <a href="https://pib.gov.in/PressReleasePage.aspx?PRID=1944749" target="_blank">Read more</a></p>
</div>

<div class="news-box">
    <h3>National Portal of India</h3>
    <p>Latest updates <a href="https://www.india.gov.in/topics/rural" target="_blank">Read more</a></p>
</div>

<div class="news-box">
    <h3>List of Government Holidays, 2023</h3>
    <p>Latest updates <a href="https://ceg.karnataka.gov.in/frontend/opt1/pdfs/HOLIDAYSLIST2023.pdf" target="_blank">Read more</a></p>
</div>

<div class="news-box">
    <h3>Karnataka-eSamikSha</h3>
    <p>Decisions taken during the presentations made by different Department to the Chief Minister <a href="https://esamiksha.gov.in/Karnataka/" target="_blank">Read more</a></p>
</div>
<div class="news-box">
      <h3>Karnataka-One</h3>
      <p>Karnataka One Official Website latest updates <a href="https://www.karnatakaone.gov.in/" target="_blank">Read more</a></p>
</div>
<div class="news-box">
    <h3>Karnataka-Data-Gov</h3>
    <p>Rural DataSet || Updated on 01/06/2023 <a href="https://karnataka.data.gov.in/catalogs?sector=Rural" target="_blank">Read more</a></p>
</div>
    `;

  document.getElementById("gramPanchayatContent").innerHTML = `
    <h2>Gram Panchayat</h2>
    
    <label for="district">District *</label>
    <select id="district" name="district">
        <option value="BENGALURU">BENGALURU</option>
        <!-- Add other district options if needed -->
    </select>

    <label for="taluk">Taluk *</label>
    <select id="taluk" name="taluk" onchange="updateGramaPanchayatOptions()">
        <option value="BENGALURU SOUTH">BENGALURU SOUTH</option>
        <option value="BENGALURU NORTH">BENGALURU NORTH</option>
        <option value="BENGALURU EAST">BENGALURU EAST</option>
        <option value="BENGALURU WEST">BENGALURU WEST</option>
    </select>

    <label for="gramaPanchayat">Grama Panchayat *</label>
    <select id="gramaPanchayat" name="gramaPanchayat">
        <option value="Agara">AGARA</option>
        <option value="Ajjanahalli">AJJANAHALLI</option>
        <option value="ChannenaHalli">CHENNENA HALLI</option>
        <option value="CHIKKANAHALLI">CHIKKANA HALLI</option>
        <option value="CHOLANAYAKANAHALLI">CHOLANAYAKANA HALLI</option>
        <option value="CHUNCHANAKUPPE">CHUNCHANA KUPPE</option>
        <option value="DODDATHOGURU">DODDA THOGURU</option>
        <option value="HGOLLAHALLI">H. GOLLAHALLI</option>
        <option value="KGOLLAHALLI">K. GOLLAHALLI</option>
        <option value="KAGGALIPURA">KAGGALIPURA</option>
        <option value="KONAPPANAAGRAHAARA">KONAPPANA AGRAHAARA</option>
        <option value="KUMBALAGODU">KUMBALAGODU</option>
        <option value="NELAGULI">NELAGULI</option>
        <option value="RAMOHALLI">RAMOHALLI</option>
        <option value="SOMANAHALLI">SOMANA HALLI</option>
        <option value="SOOLIKERE">SOOLIKERE</option>
        <option value="THARALU">THARALU</option>
        <option value="THAVAREKERE">THAVAREKERE</option>
    </select>

    <button onclick="searchLocation()">Search</button>

    <div id="map"></div>
    `;
  document.getElementById("headerContent").innerHTML = `
    <h1>Rural Information Portal</h1>
    `;
  document.getElementById("navContent").innerHTML = `
  <a href="#home" onclick="showTab('home')">Home</a>
  <a href="#taluks" onclick="showTab('taluks')">Taluks</a>
  <a href="#information" onclick="showTab('information')">Information</a>
  <a href="#news" onclick="showTab('news')">News</a>
  <a href="#gramPanchayat" onclick="showTab('gramPanchayat')">Gram Panchayat</a>
  <a href="#contact" onclick="showTab('contact')">Contact</a>
  `;
  document.getElementById("footerContent").innerHTML = `
    <p>&copy; 2023 Rural Information Portal</p>
  `;
}
