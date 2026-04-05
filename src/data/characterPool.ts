import type { CharacterClass, Franchise } from "../types/game.types"

export interface CharacterMetadata {
  id: string
  name: string
  sourceId: string
  apiSource: "jikan" | "hp-api" | "disney" | "custom" | "ffapi"
  characterClass: CharacterClass
  franchise: Franchise
  isEnemy?: boolean
}

export const characterPool: CharacterMetadata[] = [
  // MYSTERIANS
  { id:"scooby-doo",         name:"Scooby-Doo",          sourceId:"scooby-doo",                              apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"courage",            name:"Leone il Cane Fifone", sourceId:"courage",                                 apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"shaggy-rogers",      name:"Shaggy Rogers",        sourceId:"shaggy",                                  apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"velma-dinkley",      name:"Velma Dinkley",        sourceId:"velma",                                   apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"fred-jones",         name:"Fred Jones",           sourceId:"fred",                                    apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"daphne-blake",       name:"Daphne Blake",         sourceId:"daphne",                                  apiSource:"custom",  characterClass:"Mysterian", franchise:"scooby" },
  { id:"harry-potter",       name:"Harry Potter",         sourceId:"9e3f6a9a-b276-4bd0-8588-bc6b971a8bc5",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"hermione-granger",   name:"Hermione Granger",     sourceId:"4c7a5214-4113-4d4b-a7f4-d022b3956ca0",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"albus-dumbledore",   name:"Albus Silente",        sourceId:"b415c865-64bc-4924-8a24-7488f5833441",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"luna-lovegood",      name:"Luna Lovegood",        sourceId:"765d137b-8300-410a-ade6-c0c4578b8f2d",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"draco-malfoy",       name:"Draco Malfoy",         sourceId:"10986fa8-4f7f-4100-8451-b0bad51f0431",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"sirius-black",       name:"Sirius Black",         sourceId:"983ee23f-e8b8-4e8c-859a-18b7654a9918",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"hagrid",             name:"Rubeus Hagrid",        sourceId:"40e06020-0985-455b-b9d3-568ea46f534a",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter" },
  { id:"voldemort",          name:"Lord Voldemort",       sourceId:"770fa241-cd4c-47db-a2d9-1ab1955fb462",   apiSource:"hp-api",  characterClass:"Mysterian", franchise:"harry_potter", isEnemy:true },

  // STRIKERS
  { id:"goku",    name:"Goku",            sourceId:"246",    apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"vegeta",  name:"Vegeta",          sourceId:"545",    apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"gohan",   name:"Son Gohan",       sourceId:"2093",   apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"piccolo", name:"Junior",          sourceId:"1411",   apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"naruto",  name:"Naruto Uzumaki",  sourceId:"17",     apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"sasuke",  name:"Sasuke Uchiha",   sourceId:"13",     apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"kakashi", name:"Kakashi Hatake",  sourceId:"85",     apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"luffy",   name:"Monkey D. Luffy", sourceId:"40",     apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"zoro",    name:"Roronoa Zoro",    sourceId:"62",     apiSource:"jikan", characterClass:"Striker", franchise:"anime" },
  { id:"itachi",  name:"Itachi Uchiha",   sourceId:"61",     apiSource:"jikan", characterClass:"Striker", franchise:"anime", isEnemy:true },

  // ETHEREALS
  { id:"sora",       name:"Sora",                  sourceId:"sora",           apiSource:"custom",  characterClass:"Ethereal", franchise:"disney" },
  { id:"riku",       name:"Riku",                  sourceId:"riku",           apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"aqua",       name:"Aqua",                  sourceId:"aqua",           apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"mickey",     name:"Topolino",              sourceId:"mickey",         apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"axel",       name:"Axel",                  sourceId:"axel",           apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"elsa",       name:"Elsa",                  sourceId:"elsa",           apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"donald",     name:"Paperino",              sourceId:"donald",         apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"ventus",     name:"Ventus",                sourceId:"ventus",         apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"simba",      name:"Simba",                 sourceId:"simba",          apiSource:"disney",  characterClass:"Ethereal", franchise:"disney" },
  { id:"cloud",      name:"Cloud Strife",          sourceId:"cloud",          apiSource:"ffapi",   characterClass:"Ethereal", franchise:"final_fantasy" },
  { id:"aerith",     name:"Aerith Gainsborough",   sourceId:"aerith",         apiSource:"ffapi",   characterClass:"Ethereal", franchise:"final_fantasy" },
  { id:"squall",     name:"Squall Leonhart",        sourceId:"squall",         apiSource:"ffapi",   characterClass:"Ethereal", franchise:"final_fantasy" },
  { id:"vivi",       name:"Vivi Ornitier",          sourceId:"vivi",           apiSource:"ffapi",   characterClass:"Ethereal", franchise:"final_fantasy" },
  { id:"sephiroth",  name:"Sephiroth",              sourceId:"sephiroth",      apiSource:"ffapi",   characterClass:"Ethereal", franchise:"final_fantasy", isEnemy:true },
]
