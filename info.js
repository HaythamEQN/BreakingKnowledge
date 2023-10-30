const randomLink = document.getElementById('randomLink');
const generateButton = document.getElementById('generateButton');


const wordLinks = [
    { word: 'Walter White', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/Walter%20white.html' },
    { word: 'Skyler White ', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/skyler%20white.html' },
    { word: 'Walter White Jr ', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/walter%20jr.html' },
    { word: 'Holly White', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/Holly.html' },
    { word: 'Hank schrader', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/Hank.html' },
    { word: 'Marie Schrader', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/marie.html' },
    { word: 'Tuco Salamanca', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/tuco.html' },
    { word: 'Krazy8', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/krazy%208.html' },
    { word: 'Emilio', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/Emilios1.html' },
    { word: 'Jesse Pinkman', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/jessa.html' },
    { word: 'Pete', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/pete.html' },
    { word: 'Steven Gomez', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/steven.html' },
    { word: 'Badger', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/Badgers1..html' },
    { word: 'Gretchen And Man', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/gretchenmans1.html' },
    { word: 'Combo', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/combos1.html' },
    { word: 'Bogdan', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/bogdans1.html' },
    { word: 'Jesse Parents ', link: 'http://127.0.0.1:5500/Pages/Character%20pages/season1%20characters/jesseparentss1.html' },
    { word: 'Gus', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/gus.html' }, 
    { word: 'Hector', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/Hector.html' },
    { word: 'Jane', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/jane.html' },
    { word: 'Saul Goodman', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/saul.html' },
    { word: 'Victor', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/vitor.html' },
    { word: 'Mike', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/mike.html' },
    { word: 'Ted', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/ted.html' },
    { word: 'Donald', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s2/donald.html' },
    { word: 'The Twins', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/thetwins.html' },
    { word: 'Gale', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/gale1.html' },
    { word: 'Merkert', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/merkert1.html' },
    { word: 'Group Leader', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/groupleader.html' },
    { word: 'Juan Bolsa', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/juan.html' },
    { word: 'OLd Joe ', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/oldjoe.html' },
    { word: 'Andrea', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/andrea.html' },
    { word: 'Principal', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/principal.html' },
    { word: 'Clovis', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s3%20char/clovis.html' },
    { word: 'Don Eladio', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s4%20char/eladio.html' },
    { word: 'Gaff', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s4%20char/eladio.html' },
    { word: 'Huell', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s4%20char/huell.html' },
    { word: 'Patrick Kuby', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s4%20char/kuby.html' },
    { word: 'Tyruss Kitt', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s4%20char/kuby.html' },
    { word: 'Jack Welker', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/jack.html' },
    { word: 'Kenny', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/kenny.html' },
    { word: 'Todd Alquist', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/todd.html' },
    { word: 'Declan', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/declan.html' },
    { word: 'Dennis Markowsky', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/dennis.html' },
    { word: 'Dan Wachsberger', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/dan.html' },
    { word: 'Lydia Rodarte-Quayle', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/lydia.html' },
    { word: 'Lawson', link: 'http://127.0.0.1:5500/Pages/Character%20pages/s5char/lawson.html' },
   
];

function getRandomWordLink() {
   
    const randomIndex = Math.floor(Math.random() * wordLinks.length);
    const randomWordLink = wordLinks[randomIndex];
    
   
    randomLink.href = randomWordLink.link;
    randomLink.textContent = randomWordLink.word;
}


generateButton.addEventListener('click', getRandomWordLink);


getRandomWordLink();

