'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'How do you say "Good morning"?',
      answers: {
        a: 'Goedemorgen',
        b: 'Tot ziens',
        c: 'Goedeavond',
        d: 'Goedmiddag',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "Thank You very much"?',
      answers: {
        a: 'Proost!',
        b: 'Pardon',
        c: 'Ik weet het niet',
        d: 'Dank u zeer',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "Goodbye"?',
      answers: {
        a: 'tot dan',
        b: 'tot zien',
        c: 'doei or dag',
        d: 'tot straks',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'How do you say "beach"?',
      answers: {
        a: 'het strand',
        b: 'het huis',
        c: 'het paspoort',
        d: 'de vis',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "opposite"?',
      answers: {
        a: 'overstand!',
        b: 'tegenover',
        c: 'geldig',
        d: 'zeer',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "mashroom"??',
      answers: {
        a: 'de boter',
        b: 'de komkommer',
        c: 'de champignon',
        d: 'de ui',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'How do you say "I need a doctor"?',
      answers: {
        a: 'Waar is het strand',
        b: 'Mag ik de rekening',
        c: 'Ik weet het niet',
        d: 'Ik heb een dokter nodig',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "Where is the shop??',
      answers: {
        a: 'Waar is het spoorwegstation?',
        b: 'Waar is het spoor',
        c: 'Waar is het winkel?',
        d: 'waar is het strand',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "five o clock"?',
      answers: {
        a: 'tien uur',
        b: 'zes uur',
        c: 'acht uur',
        d: 'vijf uur',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'How do you say "I am hungry"?',
      answers: {
        a: 'Ik heb honger',
        b: 'Ik heb auto',
        c: 'Ik heb geen pen',
        d: 'Ik heb dorst',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "Happy Birthday"?',
      answers: {
        a: 'gelukkige nieuw jaar',
        b: 'gelukkige  verjaardag',
        c: 'gefeliciteerd',
        d: 'fijne verjaardag',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "I have a appointment"?',
      answers: {
        a: 'Ik heb afspraak',
        b: 'Ik heb auto',
        c: 'Ik heb geen afspraak',
        d: 'Ik heb dorst',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'What is the correct translation for "breakfast"??',
      answers: {
        a: 'ontbijt',
        b: 'tussendoortje',
        c: 'toetje',
        d: 'avondeten',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "keys"?',
      answers: {
        a: 'tot ziens',
        b: 'de sleutels',
        c: 'goedeavond',
        d: ' dorst',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "umberlla"?',
      answers: {
        a: 'de fiets',
        b: 'de telefone',
        c: 'de paraplu',
        d: 'het water',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "sad"?',
      answers: {
        a: 'helaas',
        b: 'zadel',
        c: 'verdrietig',
        d: 'vrolijk',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'What is the correct translation for "delicious"?',
      answers: {
        a: 'voel',
        b: 'verrukkelijk',
        c: 'verdrietig',
        d: 'vrolijk',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
    {
      text: 'How do you say "Sorry"?',
      answers: {
        a: 'dank u wel ',
        b: 'Ik weet het niet',
        c: 'Alstublieft',
        d: 'het spijt me',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'How do you say "Get well soon"?',
      answers: {
        a: 'beterschap ',
        b: 'het gaat wel',
        c: 'tot straks',
        d: 'tot wel',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Basic Dutch Phrases',
          href: 'https://ielanguages.com/dutch1.html',
        },
      ],
    },
    {
      text: 'What is the correct translation for "cinema"',
      answers: {
        a: ' cinematographer ',
        b: 'bioscoop',
        c: 'theater',
        d: 'films',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Dutch Volcabulary',
          href:
            'https://www.learndutch.org/lessons/introduce-yourself-in-dutch/',
        },
      ],
    },
  ],
};

export const selectedAnswers = []

export const randomQuestionsArray = [];
const QUESTION_LIMIT = 10;

export const createRandomQuestionList = () => {
  let randomIndexesOfQuestions = [];

  quizData.questions.forEach((question) => {
    let randomIndex = Math.floor(Math.random() * quizData.questions.length);
    if (
      !randomIndexesOfQuestions.includes(randomIndex) &&
      randomIndexesOfQuestions.length < QUESTION_LIMIT
    ) {
      randomIndexesOfQuestions.push(randomIndex);
    }
  });
  randomIndexesOfQuestions.forEach((index) => {
    randomQuestionsArray.push(quizData.questions[index]);
  });
};
