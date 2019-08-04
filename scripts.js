/* Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old */

// assign record labels with empty arrays
const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []
//created a factory function for Blue Grass Artist with 3 parameters and an object defined inside containing the artist keys, values
const createBluegrassArtist = (artistName, genre, age) => ({
    "artistName": artistName,
    "genre": genre,
    "age": age

})
//assigned the invoked factory function to a constant name bluegrassArtist with the artist arguments assigned.
const bluegrassArtist = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", "23")
//assigned the artist into the record label array using the push() method.
chattenRecords.push(bluegrassArtist)

//created a factory function for Country Artist with 3 parameters and an object defined inside containing the artist keys, values
const createCountryArtist = (artistName, genre, age) => ({
    "artistName": artistName,
    "genre": genre,
    "age": age

})

//assigned the invoked factory function to a constant name countryArtist1 and countryArtist2 with the artist arguments assigned.
const countryArtist1 = createCountryArtist("Bruce Atikins", "Country", "23")
const countryArtist2 = createCountryArtist("Avile Dallas", "Country", "19")

//assigned the artists into the record label array using the push() method.
chattenRecords.push(countryArtist1,countryArtist2)

//created a factory function for Pop Artist with 3 parameters and an object defined inside containing the artist keys, values
const createPopArtist = (artistName, genre, age) => ({
    "artistName": artistName,
    "genre": genre,
    "age": age

})

//assigned the invoked factory function to a constant name popArtist1 and popArtist2 with the artist arguments assigned.
const popArtist1 = createPopArtist("Jensen Brown", "Pop", "20")
const popArtist2 = createPopArtist("Austin Kinkaid", "Pop", "22")

//assigned the artists into the record label array using the push() method.
polarRecords.push(popArtist1,popArtist2)

//created a factory function for Funk Artist with 3 parameters and an object defined inside containing the artist keys, values
const createFunkArtist = (artistName, genre, age) => ({
    "artistName": artistName,
    "genre": genre,
    "age": age

})

//assigned the invoked factory function to a constant name funkArtist with the artist arguments assigned.
const funkArtist = createFunkArtist("Dre Funkz", "Funk", "25")

//assigned the artist into the record label array using the push() method.
jumpStopRecords.push(funkArtist)

//created a factory function for Rap Artists with 3 parameters and an object defined inside containing the artist keys, values
const createRapArtist = (artistName, genre, age) => ({
    "artistName": artistName,
    "genre": genre,
    "age": age

})

//assigned the invoked factory function to a constant name rapArtist1 and rapArtist2 with the artist arguments assigned.
const rapArtist1 = createRapArtist("Dusta Grimes", "Rap", "21")
const rapArtist2 = createRapArtist("Loyoncé Branis", "Rap", "27")

//assigned the artists into the record label array using the push() method.
jumpStopRecords.push(rapArtist1, rapArtist2)

// console log the label record array with the artists assigned inside of each array.
console.log(jumpStopRecords)
console.log(chattenRecords)
console.log(polarRecords)

