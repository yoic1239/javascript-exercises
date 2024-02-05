const findTheOldest = function(people) {
    let sorted = people.sort(function(person1, person2) {
        const age1 = (("yearOfDeath" in person1) ? person1.yearOfDeath : new Date().getFullYear()) - person1.yearOfBirth;
        const age2 = (("yearOfDeath" in person2) ? person2.yearOfDeath : new Date().getFullYear()) - person2.yearOfBirth;
        return age2 - age1;
    });
    return sorted.find(person => person.name === sorted[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
