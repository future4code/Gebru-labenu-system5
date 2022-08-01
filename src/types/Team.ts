export enum MOD {
    "Module00",
    "Module01",
    "Module02",
    "Module03",
    "Module04",
    "Module05",
    "Module06"
}

export type Team = {
    id: string,
    name: string,
    mod?: MOD
}
