// Initial language setting (default to English)
var currentLanguage = 'english';

function showTab(tab) {
    var homeContent = document.getElementById('homeContent');
    var taluksContent = document.getElementById('taluksContent');
    var informationContent = document.getElementById('informationContent');
    var newsContent = document.getElementById('newsContent');
    var contactContent = document.getElementById('contactContent');

    if (tab === 'home') {
        homeContent.style.display = 'block';
        taluksContent.style.display = 'none';
        informationContent.style.display = 'none';
        newsContent.style.display = 'none';
        contactContent.style.display = 'none';
    } else if (tab === 'taluks') {
        homeContent.style.display = 'none';
        taluksContent.style.display = 'block';
        informationContent.style.display = 'none';
        newsContent.style.display = 'none';
        contactContent.style.display = 'none';
    } else if (tab === 'information') {
        homeContent.style.display = 'none';
        taluksContent.style.display = 'none';
        informationContent.style.display = 'block';
        newsContent.style.display = 'none';
        contactContent.style.display = 'none';
    } else if (tab === 'news') {
        homeContent.style.display = 'none';
        taluksContent.style.display = 'none';
        informationContent.style.display = 'none';
        newsContent.style.display = 'block';
        contactContent.style.display = 'none';
    } else if (tab === 'contact') {
        homeContent.style.display = 'none';
        taluksContent.style.display = 'none';
        informationContent.style.display = 'none';
        newsContent.style.display = 'none';
        contactContent.style.display = 'block';
    }
}

function toggleLanguage() {
    var langButton = document.querySelector('button');
    
    // Toggle between English and Kannada
    if (currentLanguage === 'english') {
        langButton.textContent = 'Switch to English';
        translateToKannada();
        currentLanguage = 'kannada';
    } else {
        langButton.textContent = 'Switch to Kannada';
        translateToEnglish();
        currentLanguage = 'english';
    }
}

function translateToKannada() {
    // Add your Kannada translations here
    document.getElementById('contactContent').innerHTML = `
        <div id="contactContent" class="content" style="display: none;">
            <h2>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
            <p>ಈ ವೆಬ್ಸೈಟ್ ಒಂದು AICTE ಯಜಮಾನತ್ವದ ಭಾಗವಾಗಿ ರಚಿಸಲಾಗಿದೆ</p>
            <p>ಸಿಎಸ್ಇ ವಿಭಾಗದಿಂದ ದಯಾನಂದ ಸಾಗರ ತಾಂತ್ರಿಕ ಮತ್ತು ವಿವಿಧಿಯ ಮಂಜೂರಿಗೆ ಸೇರಿದ ವಿದ್ಯಾರ್ಥಿಗಳ ಕೈಯಲ್ಲಿ ಕೃತಿ ಕಾರ್ಯದ ಭಾಗವಾಗಿದೆ</p>
            <p>ಪ್ರಶ್ನೆಗಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ: <a href="mailto:Karthikrr@duck.com">ಇ-ಮೇಲ್</a></p>
            <p>ಯಾವುದೇ ದೋಷ ಮತ್ತು ಸೂಚನೆಗಳನ್ನು ವರದಿಸಲಾಗಿದೆ ಎಂದರೆ: <a href="github.com/Karthik-R-R">ಸಂಪರ್ಕ-1</a>  <a href="github.com/John-C7">ಸಂಪರ್ಕ-2</a></p>
        </div>
    `;
}


function translateToEnglish() {
    // Add your English translations here
    // Example: document.getElementById('homeContent').innerHTML = '...';
}
