let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
// Who is the Academy Member whose ID is 187?
let member = academyMembers.find(m => m.memID == 187);
console.log(member);

// HARDER: Which Academy Members have been in a film that starts with "A"
function filmStartsWithA(film) {
    // Returns true if film starts with A
    return film.toLowerCase().startsWith('a');
}

function findMemberWithFilmThatStartsWithA(member) {
    // Finds and returns film that starts with A
    return member.films.find(filmStartsWithA);
}

function actorsWithFilmsThatStartWithA(actors) {
    // Filters through and returns an array of actors
    // that have films that start with A
    return actors.filter(findMemberWithFilmThatStartsWithA);
}

console.log(actorsWithFilmsThatStartWithA(academyMembers));

// Who has been in at least 3 films?

function findMembersWithAtLeast3Films() {
  return academyMembers.filter(function (members) {
        return member.films.length >= 3;
    });
}

console.log(findMembersWithAtLeast3Films());

// Who has a name that starts with "Bob"?
let membersWithNamedBob = academyMembers.filter(member => member.name.startsWith("Bob"));
membersWithNamedBob.forEach(member => console.log(member));

