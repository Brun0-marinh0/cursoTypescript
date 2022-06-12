interface Game{
    title: string
    description: string
    genre: string
    platform: string[]
    getSimilars:(title: string) => void
}

const tlou: Game ={
    title: "elden ring",
    description: "the best game in the world",
    genre:"RPG soulsLike",
    platform: ["ps4", "ps5", "pc"],
    getSimilars(title: string) {
       console.log(`Similar games to ${title}: DarkSouls`)
    },
}

tlou.getSimilars(tlou.title)