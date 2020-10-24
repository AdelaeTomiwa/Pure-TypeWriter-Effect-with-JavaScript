// const TypeWriter = function (txtElement, words, wait = 3000) {
//    this.txtElement = txtElement;
//    this.words = words;
//    this.txt = '';
//    this.wordIndex = 0;
//    this.wait = parseInt(wait, 10);
//    this.type();
//    this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//    // Current Index of words
//    const current = this.wordIndex % this.words.length;

//    // Get full Text of the word
//    const fullTxt = this.words[current];

//    // Check if deleting
//    if (this.isDeleting) {
//       // Remove a Character
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//    } else {
//       // Add a Character
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//    }

//    // Insert Txt into Element
//    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//    //Initial Type Speed
//    let typeSpeed = 300;

//    if (this.isDeleting) {
//       typeSpeed /= 2;
//    }

//    // Check and see if the word is complete
//    if (!this.isDeleting && this.txt === fullTxt) {
//       // Make a pause at the end
//       typeSpeed = this.wait;

//       // Set Delete to true
//       this.isDeleting = true;
//    } else if ((this, this.isDeleting && this.txt === '')) {
//       this.isDeleting = false;
//       // Move to the next word
//       this.wordIndex++;
//       // Pause before start typing
//       typeSpeed = 500;
//    }

//    setTimeout(() => this.type(), typeSpeed);
// };

// // Init on DOM LOAD
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//    const txtElement = document.querySelector('.txt-type');
//    const words = JSON.parse(txtElement.getAttribute('data-words'));
//    const wait = txtElement.getAttribute('data-wait');

//    //   Init Typewrite
//    new TypeWriter(txtElement, words, wait);
// }

// ES 6 CLASS
class TypeWriter {
   constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
   }

   type() {
      // Current Index of words
      const current = this.wordIndex % this.words.length;

      // Get full Text of the word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
         // Remove a Character
         this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
         // Add a Character
         this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert Txt into Element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      //Initial Type Speed
      let typeSpeed = 300;

      if (this.isDeleting) {
         typeSpeed /= 2;
      }

      // Check and see if the word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
         // Make a pause at the end
         typeSpeed = this.wait;

         // Set Delete to true
         this.isDeleting = true;
      } else if ((this, this.isDeleting && this.txt === '')) {
         this.isDeleting = false;
         // Move to the next word
         this.wordIndex++;
         // Pause before start typing
         typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
   }
}

// Init on DOM LOAD
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');

   //   Init Typewrite
   new TypeWriter(txtElement, words, wait);
}
