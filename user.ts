type AccountInfo ={
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 1,
    name: 'bruno'
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo ={
    nickname: 'JKL_br_',
    level: 100
}

//intersection
type PlayerInfor= AccountInfo & CharInfo

const player: PlayerInfor ={
    id: 1,
    name: "Bruno",
    nickname:"JKL_br_",
    level: 1
}