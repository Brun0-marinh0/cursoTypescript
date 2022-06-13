"use strict";
const tlou = {
    title: "elden ring",
    description: "the best game in the world",
    genre: "RPG soulsLike",
    platform: ["ps4", "ps5", "pc"],
    getSimilars(title) {
        console.log(`Similar games to ${title}: DarkSouls`);
    },
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftbehind = {
    title: "elden ring - part2",
    description: "dead dead end dead",
    genre: "RPG SoulsLike",
    platform: ["ps4"],
    originalGame: tlou,
    newContent: ["3 hours story"]
};
