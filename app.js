var Guest_List = ["MUSTAFA", "MANZOOR", "MUNWARZAMA"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr," + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
var absent_Guest = 'MUSTAFA';
var new_Guest = 'KALEEMULLAH';
Guest_List[0] = "KALEEMULLAH";
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log("Mr.".concat(absent_Guest, "  is not coming to the party."));
