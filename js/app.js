$(document).ready(function(){
  $(".button-collapse").sideNav();
});


var profileData = {
  name: 'zakaria',
  surname: 'benbakkar',
  email: 'zakhttp@gmail.com',
  github: 'zakhttp',
  freeCodeCamp: 'zakhttp',
  twitter: 'zaksudo',
  skills: [
    'html5',
    'css3',
    'javascript',
    'git',
    'php',
    'laravel',
  ],
  bio: "I am a web craftsman and tech enthusiast. In love with javascript and it's prototypal OOP approach. ",
  tagline: 'I do what i do for love. Anything else is a reduction of my humanity.',
  quotes: [
    {
      quote: "I don't go on dates. I don't go clubbing. I don't care about celebrity hookups or which sports team just won. My universe exists entirely within computers.",
      source: 'LU$er, Algorithm: The Hacker Movie'
    },
    {
      quote: "Any concept you have a world that doesn't involve electronics is naive. Of course, you can manufacture a reality to suit your delusions if you like. What difference does that make to me? It's just one less person I have to deal with. Because, if that's your choice, then you are irrelevant. You cease to exist in any meaningful way except as extremely low-hanging fruit.",
      source: 'L$user, Algorithm: The Hacker Movie'
    },
    {
      quote: "Generally, the craft of programming is the factoring of a set of requirements into a a set of functions and data structures.",
      source: 'Douglas Crockford, Javascript: The Good Parts'
    },
    {
      quote: "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.",
      source: 'Kyle Simpson, YDKJS: Scopes and Closures'
    }

  ],
  projects: [
    {
      name: 'idesign interiors',
      githubUrl: 'http://idesignuae.com',
      previewUrl: '',
      type: 'wordspress',
      imagrUrl: '',
      altText: '',
      description: ''
    },
    {
      name: 'super mario frogger',
      githubUrl: 'https://github.com/zakhttp/super-mario-frogger',
      previewUrl: '',
      type: 'javascript',
      imagrUrl: 'images/super-mario-project-card.jpg',
      altText: 'Super Mario',
      description: "This a reproduction of the 80's frogger game with a Super Mario Bros flavor using a simple javascript game engine."
    },
    {
      name: 'shippey photography',
      githubUrl: 'http://shippeyphotography.com',
      previewUrl: '',
      type: 'wordpress',
      imagrUrl: '',
      altText: '',
      description: ''
    },
    {
      name: 'weather app',
      githubUrl: 'https://github.com/zakhttp/weather-app',
      previewUrl: '',
      type: 'react native',
      imagrUrl: '',
      altText: '',
      description: ''
    },
  ]
};
