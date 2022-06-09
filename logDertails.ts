type Uid = number | string | undefined

function logDetails( uid: Uid | string, item: string){
    console.log(`a product with ${uid} has a title as  ${item}`)
}

function logIfon(uid: Uid | string, user: string){
    console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'windows' | 'linux' | 'Mac os'
function renderPlatform(platform: Platform){
    return platform
}

renderPlatform('linux')

logDetails(123, 'oi')
logDetails("123", "oi")

logIfon(123, "oi")
logIfon("123", "oi")