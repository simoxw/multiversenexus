import { getCharacterFallbackImage } from "../ui/image-fallback.ts";

export const characterExtraData: Record<string, { imageUrl: string; description: string }> = {
  "scooby-doo": {
    imageUrl: "characters/scooby-doo.webp",
    description: "Un Alano fifone ma adorabile, risolve misteri per Scooby Snacks."
  },
  "shaggy-rogers": {
    imageUrl: "characters/shaggy-rogers.webp",
    description: "Il migliore amico di Scooby, sempre affamato e pronto a scappare."
  },
  "velma-dinkley": {
    imageUrl: "characters/velma-dinkley.webp",
    description: "Il cervello della Mystery Inc., non vede nulla senza i suoi occhiali."
  },
  "fred-jones": {
    imageUrl: "characters/fred-jones.webp",
    description: "Leader del gruppo, esperto in trappole e amante del furgone."
  },
  "daphne-blake": {
    imageUrl: "characters/daphne-blake.webp",
    description: "Sempre alla moda, finisce spesso nei pasticci ma sa come liberarsi."
  },
  "courage": {
    imageUrl: "characters/courage.webp",
    description: "Un cane rosa che vive in mezzo al nulla e affronta terrori per Muriel."
  },
  "eustace": {
    imageUrl: "characters/eustace.webp",
    description: "Un contadino scorbutico che spaventa Leone con la sua maschera."
  },
  "muriel": {
    imageUrl: getCharacterFallbackImage("muriel-bagge"),
    description: "La gentile padrona di Leone, prepara thè e offre conforto."
  },
  "hermione-granger": {
    imageUrl: getCharacterFallbackImage("hp-hermione-granger"),
    description: "La strega più brillante della sua età, sempre pronta con l'incantesimo giusto."
  },
  "severus-snape": {
    imageUrl: getCharacterFallbackImage("hp-severus-snape"),
    description: "Maestro di Pozioni e Principe Mezzosangue. Le sue intenzioni sono sempre un mistero."
  },
  "voldemort": {
    imageUrl: "characters/voldemort.webp",
    description: "Colui che non deve essere nominato. Il mago oscuro più potente di tutti i tempi."
  },
  "naruto": {
    imageUrl: "characters/naruto.webp",
    description: "Ninja della Foglia che sogna di diventare Hokage. Credici!"
  },
  "luffy": {
    imageUrl: "characters/luffy.webp",
    description: "Capitano dei Pirati di Cappello di Paglia, vuole diventare il Re dei Pirati."
  },
  "bellatrix": {
    imageUrl: "characters/bellatrix.webp",
    description: "La seguace più fedele di Voldemort, nota per la sua crudeltà e abilità nei duelli."
  },
  "draco-malfoy": {
    imageUrl: "characters/draco-malfoy.webp",
    description: "Il rivale di Harry a Hogwarts, tormentato tra il dovere familiare e la propria coscienza."
  },
  "sirius-black": {
    imageUrl: getCharacterFallbackImage("hp-sirius-black"),
    description: "Il prigioniero di Azkaban e padrino di Harry. Un Animagus leale fino alla fine."
  },
  "albus-dumbledore": {
    imageUrl: "characters/albus-dumbledore.webp",
    description: "Preside di Hogwarts e uno dei maghi più saggi e potenti della storia."
  },
  "harry-potter": {
    imageUrl: getCharacterFallbackImage("hp-harry-potter"),
    description: "Il ragazzo che è sopravvissuto, l'eroe di Hogwarts."
  },
  "cloud": {
    imageUrl: getCharacterFallbackImage("ff7-cloud"),
    description: "Ex-SOLDIER con la Buster Sword, combatte per il destino del pianeta."
  },
  "sephiroth": {
    imageUrl: "characters/sephiroth.webp",
    description: "L'Angelo con un'ala sola, un tempo eroe dei SOLDIER, ora minaccia planetaria."
  }
};
