

let Guest_List = ["MUSTAFA", "MANZOOR", "MUNWARZAMA"];

for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr," + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')


}

let absent_Guest :string = 'MUSTAFA' ;

let new_Guest :string = 'KALEEMULLAH' ;

Guest_List[0] = "KALEEMULLAH" ;

for (let i=0; i<Guest_List.length; i++) {

    console.log('Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


}

console.log(`Mr.${absent_Guest}  is not coming to the party.`) ;

