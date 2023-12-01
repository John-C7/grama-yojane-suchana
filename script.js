// Initial language setting (default to English)
var currentLanguage = "english";

function showTab(tab) {
  var homeContent = document.getElementById("homeContent");
  var taluksContent = document.getElementById("taluksContent");
  var informationContent = document.getElementById("informationContent");
  var newsContent = document.getElementById("newsContent");
  var contactContent = document.getElementById("contactContent");

  if (tab === "home") {
    homeContent.style.display = "block";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "taluks") {
    homeContent.style.display = "none";
    taluksContent.style.display = "block";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "information") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "block";
    newsContent.style.display = "none";
    contactContent.style.display = "none";
  } else if (tab === "news") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "block";
    contactContent.style.display = "none";
  } else if (tab === "contact") {
    homeContent.style.display = "none";
    taluksContent.style.display = "none";
    informationContent.style.display = "none";
    newsContent.style.display = "none";
    contactContent.style.display = "block";
  }
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

function translateToKannada() {
  // Add your Kannada translations here
  document.getElementById("contactContent").innerHTML = `
        <h2>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
        <p>ಈ ವೆಬ್ಸೈಟ್ ಒಂದು AICTE ಯಜಮಾನತ್ವದ ಭಾಗವಾಗಿ ರಚಿಸಲಾಗಿದೆ</p>
        <p>ಸಿಎಸ್ಇ ವಿಭಾಗದಿಂದ ದಯಾನಂದ ಸಾಗರ ತಾಂತ್ರಿಕ ಮತ್ತು ವಿವಿಧಿಯ ಮಂಜೂರಿಗೆ ಸೇರಿದ ವಿದ್ಯಾರ್ಥಿಗಳ ಕೈಯಲ್ಲಿ ಕೃತಿ ಕಾರ್ಯದ ಭಾಗವಾಗಿದೆ</p>
        <p>ಪ್ರಶ್ನೆಗಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ: <a href="mailto:Karthikrr@duck.com">ಇ-ಮೇಲ್</a></p>
        <p>ಯಾವುದೇ ದೋಷ ಮತ್ತು ಸೂಚನೆಗಳನ್ನು ವರದಿಸಲಾಗಿದೆ ಎಂದರೆ: <a href="github.com/Karthik-R-R">ಸಂಪರ್ಕ-1</a>  <a href="github.com/John-C7">ಸಂಪರ್ಕ-2</a></p>
        <p>ಸೋರ್ಸ್ ಕೋಡ್: <a href="https://github.com/Karthik-R-R/grama-yojane-suchana">ಗ್ರಾಮ ಯೋಜನೆ ಸೂಚನಾ</a></p>

    `;
  document.getElementById("taluksContent").innerHTML = `
    
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
</div>

`;
}
function translateToEnglish() {
  // Add your English translations here
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
    `;
  document.getElementById("taluksContent").innerHTML = `
    <h2>Explore Taluks</h2>

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
    `;
}
