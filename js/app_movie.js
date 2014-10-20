var movieApp = {};

var movieActor = ['Brad Pitt', 'Johnny Depp', 'Channing Tatum', 'Jack Nicholson', 'Will Smith', 'Liam Neeson', 'George Clooney', 'Tom Cruise',
'Nicolas Cage', 'Hugh Jackman', 'Bradley Cooper', 'Gene Hackman', 'Christian Bale', 'Adam Sandler', 'Jim Carrey', 'Shia LaBeouf',
'Russel Brand', 'Morgan Freeman', 'Samuel L Jackson', 'Benedict Cumberbatch', 'Christoph Waltz', 'Quentin Tarantino', 'Jamie Foxx', 'Tyler Perry', 'Daniel Radcliffe', 'Robert De Niro', 'Colin Farrell', 'Leonardo DiCaprio', 'Ryan Gosling', 'Andrew Garfield', 'Joseph Gordon-Levitt', 'Jake Gyllenhaal', 'Patton Oswalt', 'Jeff Daniels', 'Dax Shepard', 'Edward Norton',
'Bryan Cranston', 'Mark Wahlberg', 'Jackie Chan', 'Dustin Hoffman', 'Sylvester Stallone', 'Keanu Reeves', 'Al Pacino', 'Jason Segel', 'Neil Patrick Harris', 'Marlon Brando', 'James Franco', 'Seth Rogen', 'Steve Carell', 'Ben Affleck', 'Matt Damon', 'Zach Galifianakis'];

var movieActress = ['Jennifer Lawrence', 'Amy Adams', 'Nicole Kidman', 'Meryl Streep', 'Melissa McCarthy', 'Kristen Bell', 'Rose Byrne', 'Oprah Winfrey', 'Zoe Saldana', 'Reese Witherspoon', 'Emma Watson', 'Hilary Duff', 'Chloë Grace Moretz', 'Abigail Breslin', 'Sandra Bullock', 'Julia Roberts', 'Angelina Jolie', 'Sigourney Weaver', 'Michelle Monaghan', 'Kerry Washington', 'Lucy Liu', 'Gabrielle Union',
'Jessica Alba', 'Anne Hathaway', 'Amanda Seyfried', 'Cate Blanchett', 'Kate Winslet', 'Rachel McAdams', 'Maggie Gyllenhaal', 'Naomi Watts', 'Selena Gomez', 'Charlize Theron', 'Scarlett Johansson', 'Elle Fanning', 'Dakota Fanning', 'Mila Kunis', 'Tina Fey', 'Lindsay Lohan', 'Gwyneth Paltrow', 'Marilyn Monroe', 'Audrey Hepburn', 'Keira Knightley', 'Halle Berry', 'Ellen Page', 'Kristen Stewart', 'Drew Barrymore', 'Cameron Diaz', 'Cobie Smulders', 'Katharine Hepburn', 'Lea Michele', 'Emily Blunt', 'Grace Kelly'];

var movieGenre = ['Action', 'Animated', 'Comedy', 'Drama', 'Horror', 'Romance', 'SciFi', 'Superhero'];

var movieAction = ['Rambo', 'Django', 'Maverick', 'Hook', 'Spartacus', 'Hanna', 'Troy', 'Rocky', 'Pompeii', 'Scarface', 'John Carter', 'Hercules Reborn', 'Max Payne', 'Serpico', 'Indiana Jones and the Last Crusade', 'Ronin', 'Sherlock Holmes', 'Scott Pilgrim vs. the World'];

var movieAnimated = ['Ferngully', 'Fantasia', 'Shrek', 'Aladdin', 'Cinderella', 'Pinocchio', 'Ratatouille', 'Bambi', 'Mulan', 'Pocahontas', 'Dumbo', 'WALL-E', 'Tarzan', 'Hercules', 'Coraline', 'Anastasia', 'ParaNorman', 'Frankenweenie', 'Rango', 'Marmaduke', 'Bolt', 'Popeye', 'Garfield: A Tail of Two Kitties', 'Hercules', 'Alice in Wonderland', 'Wallace & Gromit: The Curse of the Were-Rabbit', 'James and the Giant Peach'];

var movieComedy = ['Ted', 'Juno', 'Zoolander', 'Tammy', 'Bernie', 'Sahara', 'Marmaduke', 'Borat', 'Brüno', 'Arthur', 'Beethoven', 'MacGruber', 'Alexander and the Terrible, Horrible, No Good, Very Bad Day', 'Amos & Andrew', 'Harold & Kumar Go to White Castle', 'Austin Powers: International Man of Mystery', 'Deuce Bigalow: European Gigolo', 'Ace Ventura: Pet Detective', "Romy and Michele's High School Reunion", 'Patch Adams', 'Napoleon Dynamite', 'Zack and Miri Make a Porno'];

var movieDrama = ['Selena', 'Philomena', 'Elizabeth', 'Frida', 'Lolita', 'Serena', 'Babe', 'Noah', 'Annie', 'Amadeus', 'Lincoln', 'Patton', 'Nixon', 'Hamlet', 'Lassie', 'Jack', 'Babel', 'Capote', 'Ray Charles - In Concert', 'August: Osage County', 'Charlie St. Cloud', 'Forrest Gump', 'Simon Birch', 'Nicholas Nickleby', 'Stella', 'Oliver Twist', 'Erin Brockovich', 'Pollyanna'];

var movieHorror = ['Carrie', 'Hitchcock', 'Hannibal', 'Constantine', 'Dracula', 'Nosferatu', 'Frankenstein','Annabelle', 'Godzilla', 'Riddick', 'Donnie Darko', 'Freddy vs. Jason', 'Jason Goes to Hell: The Final Friday', 'Buffy the Vampire Slayer'];

var movieRomance = ['Serendipity', 'Hitch', 'Alfie', 'Cinderella', 'Gigli', 'Australia', 'Sabrina', 'Vicky Cristina Barcelona', 'Charlie St. Cloud', 'Shakespeare in Love', 'Edward Scissorhands', 'Forrest Gump', 'Jerry Maguire', 'Peggy Sue Got Married', 'Jane Eyre', 'Anna Karenina', 'Belle', 'Mickey Blue Eyes'];

var movieSciFi = ['Beowulf', 'Eragon', 'Lucy', 'Tron', 'Beetlejuice', 'Casper', 'Matilda', 'Barbarella', 'Prometheus', 'Solaris', 'Malificent', "Harry Potter and the Philosopher's Stone", 'Percy Jackson: Sea of Monsters', 'Edward Scissorhands'];

var movieSuperHero = ['Batman', 'Superman', 'Thor', 'Spiderman', 'Hulk', 'Kick-Ass', 'Hellboy', 'Blade', 'Daredevil', 'Dredd', 'Elektra', 'Hancock'];

var moviePicker = [movieAction, movieAnimated, movieComedy, movieDrama, movieHorror, movieRomance, movieSciFi, movieSuperHero]

var moviePicked = '';
var actorPicked = '';

movieApp.apikey = "d94c57e3a1b9c3793bc35c040cb22b78";
movieApp.baseURL = '';

movieApp.init = function(){
  movieApp.getConfig();
  
};

movieApp.getConfig = function(){
  $.ajax({
    url: 'http://api.themoviedb.org/3/configuration',
    type: 'GET',
    data: {
      api_key: movieApp.apikey,
    },
    dataType: 'jsonp',
    success: function(result){
      console.log(result);
      movieApp.baseURL = result.images.base_url;
      // movieApp.getActor(movieActor[0]);
      // movieApp.getMovie(movieName[1]);

    }
  });

}

movieApp.getActor = function(nameOfActor){
  $.ajax({
    url: 'http://api.themoviedb.org/3/search/person',
    type: 'GET',
    data: {
      api_key: movieApp.apikey,
      query: nameOfActor,
    },
    dataType: 'jsonp',
    success: function(result){
      movieApp.displayActor(result);
    }
  });
}

movieApp.getMovie = function(nameOfMovie){
  $.ajax({
    url: 'http://api.themoviedb.org/3/search/movie',
    type: 'GET',
    data: {
      api_key: movieApp.apikey,
      query: nameOfMovie,
    },
    dataType: 'jsonp',
    success: function(result){
      movieApp.displayMovie(result.results[0]);
    }
  });
}

movieApp.displayActor = function(data){
    console.log(data);
    var indexSpace = data.results[0].name.indexOf(' ');
    var name = data.results[0].name.slice(0,indexSpace);
    $('span.first-name').html(name);
    $('.result-image.image1 img').attr('src',movieApp.baseURL +"/w185"+data.results[0].profile_path); 
};

movieApp.displayMovie = function(data){
    console.log(data);
    var indexColon = data.title.indexOf(':');
    var indexSpace = data.title.indexOf(' ');
    var name = (data.title);
    if (indexColon > 0 && indexSpace > 0) {
        name = data.title.slice(0,Math.min(indexColon, indexSpace));
    } else if (indexColon > 0) {
        name = data.title.slice(0,indexColon);
    } else if (indexSpace > 0) {
        name = data.title.slice(0,indexSpace);
    } else {

    }
    $('span.movie-title').html(name);
    $('.result-image.image2 img').attr('src',movieApp.baseURL +"/w185"+data.poster_path); 
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = 0;
var rand2 = 0;

function changeMoviePic() { 
  // option = document.createElement('option');
  // option.value = this.value;
  // option.text = this.options[this.selectedIndex].text; 
  loadMovieButton();
  for (i = 0; i < movieGenre.length; i++) { 
    if (movieSelected.value == movieGenre[i]) {
      rand = getRandomInt(0,moviePicker[i].length - 1);
        moviePicked = moviePicker[i][rand];
        movieApp.getMovie(moviePicked);
        return i;
    } else {
        $('.result-image.image2 img').attr('src','images/image_movie.png');
    }
   }
};

function changePersonPic() { 
  // option = document.createElement('option');
  // option.value = this.value;
  // option.text = this.options[this.selectedIndex].text; 
    loadPersonButton();
    if (genderSelected.value == 'boy') {
      rand2 = getRandomInt(0,movieActor.length - 1);
        actorPicked = movieActor[rand2];
        movieApp.getActor(actorPicked);
    } else if (genderSelected.value == 'girl') {
      rand2 = getRandomInt(0,movieActress.length - 1);
        actorPicked = movieActress[rand2];
        movieApp.getActor(actorPicked);
    } else {
         $('.result-image.image1 img').attr('src','images/image_person.png');
    }
};

function loadMovieButton() { 
    if (movieSelected.value == 'selectgenre') {
        movieButton.style.display = 'none';
    } else {
      movieButton.style.display = '';
    }
};

function loadPersonButton() { 
    if (genderSelected.value == 'selectgender') {
        personButton.style.display = 'none';
    } else {
      personButton.style.display = '';
    }
};

var movieSelected = document.getElementById("genre"), option;
var genderSelected = document.getElementById("gender"), option;
var movieButton = document.getElementById("button-title"), option;
var personButton = document.getElementById("button-name"), option;
var moviePoster = document.getElementById("movie-poster"), option;
var personPhoto = document.getElementById("person-photo"), option;

movieButton.style.display = 'none';
personButton.style.display = 'none';
movieSelected.addEventListener('load', loadMovieButton);
movieSelected.addEventListener('change', changeMoviePic);

genderSelected.addEventListener('change', changePersonPic);

movieButton.addEventListener('click', changeMoviePic);

personButton.addEventListener('click', changePersonPic);

moviePoster.addEventListener('click', changeMoviePic);

personPhoto.addEventListener('click', changePersonPic);

$(function(){
  movieApp.init();
});