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
tlou.getSimilars(tlou.title);
