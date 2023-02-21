// ITERATION 1

// Suspects Array

const suspectsArray = [
    {firstName: 'Cassandra', lastName: 'Scarlett', occupation: 'Actress', age: 25, description: 'A femme fatale with a glamorous and seductive appearance. She is charming and manipulative.', 
    image: 'Typically depicted in a red dress and high heels, with dark hair and bold makeup.', color: 'Red'},

    {firstName: 'Michael', lastName: 'Mustard', occupation: 'Retired military colonel', age: 60, description: 'A tough and commanding figure, with a brusque manner and a stiff upper lip. He has a military bearing and is physically imposing.', 
    image: 'Typically depicted in a yellow or gold jacket, with gray or white hair and a mustache.', color: 'Yellow'},

    {firstName: 'Blanche', lastName: 'White', occupation: 'Housekeeper', age: 53, description: 'A matronly figure with a stern and no-nonsense attitude. She is efficient and organized, but also somewhat suspicious and untrusting.',
    image: 'Typically depicted in a black dress or skirt, with a white apron and a white cap on her head', color: 'White'},

    {firstName: 'Jacob', lastName: 'Green', occupation: 'Businessman', age: 45, description: 'A smooth and slick operator, with a charming and persuasive manner. He is somewhat shady and untrustworthy, with a reputation for bending the rules.', image: 'Typically depicted in a green suit, with slicked-back hair and a smarmy expression.', color: 'Green'},

    {firstName: 'Elizabeth', lastName: 'Peacock', occupation: 'Socialite', age: 50, description: 'A flamboyant and high-maintenance woman, with a sharp tongue and a tendency to be dramatic. She is vain and self-centered, with a love for luxury and attention.', image: 'Typically depicted in a blue or purple dress, with a feather boa and a bejeweled brooch.', color: 'Blue'},

    {firstName: 'Victor', lastName: 'Plum', occupation: 'Professor of psychology', age: 38, description: 'An absent-minded and quirky intellectual, with a passion for research and analysis. He is somewhat awkward in social situations, but can be insightful and perceptive.', image: 'Typically depicted in a purple suit, with unkempt hair and thick-rimmed glasses.', color: 'Purple'}
];

// Rooms Array

const roomsArray = [
    {name: 'Hall'},
    {name: 'Lounge'},
    {name: 'Dining Room'},
    {name: 'Kitchen'},
    {name: 'Ballroom'},
    {name: 'Conservatory'},
    {name: 'Billiard Room'},
    {name: 'Library'},
    {name: 'Study'},
    {name: 'Hall'},
    {name: 'Lounge'},
    {name: 'Dining Room'},
    {name: 'Kitchen'},
    {name: 'Ballroom'},
    {name: 'Conservatory'}
        
];

// Weapons Array

const weaponsArray = [
    {name: 'Candlestick', weight: 1},
    {name: 'Dagger', weight: 0.5},
    {name: 'Lead Pipe', weight: 3},
    {name: 'Revolver', weight: 2},
    {name: 'Rope', weight: 1.2},
    {name: 'Wrench', weight: 2.5},
    {name: 'Spanner', weight: 1.5},
    {name: 'Poison', weight: 0.3},
    {name: 'Trophy', weight: 5}
];


// ITERATION 2

function selectRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}



function pickMystery() {
        const suspects = ['Cassandra Scarlet', 'Michael Mustard', 'Blanche White', 'Jacob Green', 'Elizabeth Peacock', 'Victor Plum'];
        const weapons = ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench', 'Spanner', 'Poisin', 'Trophy'];
        const rooms = ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study'];
      
        const suspect = selectRandom(suspects);
        const weapon = selectRandom(weapons);
        const room = selectRandom(rooms);
        
        return { suspect, weapon, room };
      }


// ITERATION 3

function revealMystery(mystery) {
    const { suspect, weapon, room } = mystery;
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;
}
