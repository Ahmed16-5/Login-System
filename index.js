
var arr=["“Be yourself; everyone else is already taken.”","-- Oscar Wilde",
         "“So many books, so little time.”","-- Frank Zappa",
         "“A room without books is like a body without a soul.”","-- Marcus Tullius Cicero",
         "“Be the change that you wish to see in the world.”","-- Mahatma Gandhi",
         "“If you tell the truth, you don't have to remember anything.”","-- Mark Twain",
         "“Always forgive your enemies; nothing annoys them so much.”","-- Oscar Wilde",
         "“Good friends, good books, and a sleepy conscience: this is the ideal life.”","-- Mark Twain",
         "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”","-- John Green",
         "The fool doth think he is wise, but the wise man knows himself to be a fool.","-- William Shakespeare",
         "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”","-- Mark Twain",
];

// Random Quote Generator
var newe;
var old;
const quote =document.getElementById('quote');
const writer =document.getElementById('writer');
function randomQuote() {
      for(;newe==old || newe%2!=0;) {
          newe = Math.floor(Math.random() * 10);
      }
    old=newe;
    quote.innerHTML = arr[newe];
    writer.innerHTML = arr[newe+1];
    console.log(newe);
}


document.getElementById('button').addEventListener('click', randomQuote);




