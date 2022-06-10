"use strict";
function logDetails(uid, item) {
    console.log(`a product with ${uid} has a title as  ${item}`);
}
function logIfon(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('linux');
logDetails(123, 'oi');
logDetails("123", "oi");
logIfon(123, "oi");
logIfon("123", "oi");
