import type { CharacterRole } from "../types/game.types"

export interface CharacterBaseStats {
  hp: number
  atk: number
  def: number
  spd: number
  mp: number
  role: CharacterRole
}

export const characterStats: Record<string, CharacterBaseStats> = {
  "scooby-doo":       { hp:1100, atk:70,  def:130, spd:85,  mp:90,  role:"tank"    },
  "courage":          { hp:950,  atk:85,  def:100, spd:120, mp:100, role:"support" },
  "shaggy-rogers":    { hp:850,  atk:90,  def:80,  spd:130, mp:70,  role:"dps"     },
  "velma-dinkley":    { hp:750,  atk:60,  def:95,  spd:90,  mp:150, role:"mage"    },
  "fred-jones":       { hp:1050, atk:80,  def:120, spd:75,  mp:80,  role:"tank"    },
  "daphne-blake":     { hp:800,  atk:95,  def:85,  spd:125, mp:90,  role:"balanced"},
  "harry-potter":     { hp:900,  atk:100, def:90,  spd:100, mp:160, role:"mage"    },
  "hermione-granger": { hp:800,  atk:90,  def:100, spd:110, mp:180, role:"mage"    },
  "albus-dumbledore": { hp:1000, atk:110, def:110, spd:95,  mp:200, role:"support" },
  "luna-lovegood":    { hp:780,  atk:75,  def:95,  spd:105, mp:140, role:"support" },
  "draco-malfoy":     { hp:850,  atk:105, def:85,  spd:100, mp:120, role:"dps"     },
  "sirius-black":     { hp:950,  atk:115, def:80,  spd:130, mp:110, role:"dps"     },
  "hagrid":           { hp:1150, atk:110, def:125, spd:65,  mp:80,  role:"tank"    },
  "voldemort":        { hp:1400, atk:160, def:120, spd:100, mp:200, role:"mage"    },
  "goku":             { hp:1300, atk:160, def:85,  spd:120, mp:130, role:"dps"     },
  "vegeta":           { hp:1200, atk:155, def:80,  spd:115, mp:120, role:"dps"     },
  "gohan":            { hp:1150, atk:145, def:90,  spd:100, mp:110, role:"dps"     },
  "piccolo":          { hp:1100, atk:120, def:115, spd:95,  mp:100, role:"tank"    },
  "naruto":           { hp:1250, atk:140, def:90,  spd:110, mp:120, role:"dps"     },
  "sasuke":           { hp:1100, atk:150, def:75,  spd:140, mp:110, role:"dps"     },
  "kakashi":          { hp:1050, atk:130, def:100, spd:120, mp:130, role:"balanced"},
  "luffy":            { hp:1250, atk:145, def:80,  spd:130, mp:100, role:"dps"     },
  "zoro":             { hp:1150, atk:150, def:85,  spd:115, mp:90,  role:"dps"     },
  "itachi":           { hp:1100, atk:145, def:85,  spd:125, mp:150, role:"mage"    },
  "sora":             { hp:1050, atk:120, def:100, spd:110, mp:140, role:"balanced"},
  "riku":             { hp:1100, atk:135, def:95,  spd:115, mp:120, role:"dps"     },
  "aqua":             { hp:950,  atk:110, def:105, spd:100, mp:180, role:"mage"    },
  "mickey":           { hp:900,  atk:95,  def:110, spd:120, mp:150, role:"support" },
  "axel":             { hp:1000, atk:130, def:80,  spd:130, mp:110, role:"dps"     },
  "elsa":             { hp:900,  atk:115, def:90,  spd:105, mp:170, role:"mage"    },
  "donald":           { hp:800,  atk:100, def:80,  spd:100, mp:160, role:"mage"    },
  "ventus":           { hp:950,  atk:115, def:95,  spd:130, mp:120, role:"balanced"},
  "simba":            { hp:1100, atk:125, def:100, spd:110, mp:100, role:"dps"     },
  "cloud":            { hp:1200, atk:155, def:90,  spd:100, mp:110, role:"dps"     },
  "aerith":           { hp:900,  atk:100, def:85,  spd:95,  mp:200, role:"healer"  },
  "squall":           { hp:1100, atk:145, def:95,  spd:105, mp:110, role:"dps"     },
  "vivi":             { hp:750,  atk:95,  def:80,  spd:90,  mp:200, role:"mage"    },
  "sephiroth":        { hp:1600, atk:180, def:130, spd:110, mp:180, role:"dps"     },
}
