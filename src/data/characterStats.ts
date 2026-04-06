import type { CharacterRole, GrowthRates } from "../types/game.types"

export interface CharacterBaseStats {
  hp: number
  atk: number
  def: number
  mag: number
  res: number
  spd: number
  luck: number
  mp: number
  role: CharacterRole
  growthRates: GrowthRates
}

// Growth Rate Templates based on classes
const STRIKER_GROWTH: GrowthRates = { hp: 1.2, atk: 1.5, def: 1.0, mag: 0.6, res: 0.7, spd: 1.4, luck: 1.0 };
const ETHEREAL_GROWTH: GrowthRates = { hp: 0.8, atk: 0.7, def: 0.8, mag: 1.5, res: 1.4, spd: 1.1, luck: 1.2 };
const MYSTERIAN_GROWTH: GrowthRates = { hp: 1.1, atk: 1.0, def: 1.2, mag: 1.0, res: 1.2, spd: 1.0, luck: 1.5 };

export const characterStats: Record<string, CharacterBaseStats> = {
  // MYSTERIANS (Scooby gang & HP)
  "scooby-doo":       { hp:1100, atk:45,  def:140, mag:30,  res:120, spd:85,  luck:160, mp:90,  role:"tank",     growthRates: MYSTERIAN_GROWTH },
  "courage":          { hp:900,  atk:40,  def:110, mag:100, res:130, spd:125, luck:180, mp:110, role:"support",  growthRates: MYSTERIAN_GROWTH },
  "shaggy-rogers":    { hp:850,  atk:110, def:75,  mag:20,  res:80,  spd:140, luck:150, mp:70,  role:"dps",      growthRates: MYSTERIAN_GROWTH },
  "velma-dinkley":    { hp:750,  atk:35,  def:90,  mag:160, res:140, spd:90,  luck:130, mp:160, role:"mage",     growthRates: MYSTERIAN_GROWTH },
  "fred-jones":       { hp:1150, atk:105, def:130, mag:20,  res:100, spd:70,  luck:110, mp:80,  role:"tank",     growthRates: MYSTERIAN_GROWTH },
  "daphne-blake":     { hp:850,  atk:115, def:90,  mag:50,  res:95,  spd:130, luck:135, mp:90,  role:"balanced", growthRates: MYSTERIAN_GROWTH },
  "harry-potter":     { hp:880,  atk:40,  def:85,  mag:175, res:140, spd:105, luck:140, mp:180, role:"mage",     growthRates: MYSTERIAN_GROWTH },
  "hermione-granger": { hp:780,  atk:30,  def:90,  mag:190, res:160, spd:110, luck:130, mp:200, role:"mage",     growthRates: MYSTERIAN_GROWTH },
  "albus-dumbledore": { hp:1000, atk:55,  def:110, mag:210, res:180, spd:95,  luck:150, mp:250, role:"support",  growthRates: MYSTERIAN_GROWTH },
  "luna-lovegood":    { hp:750,  atk:30,  def:80,  mag:165, res:160, spd:100, luck:200, mp:150, role:"support",  growthRates: MYSTERIAN_GROWTH },
  "draco-malfoy":     { hp:850,  atk:60,  def:85,  mag:155, res:120, spd:105, luck:110, mp:140, role:"dps",      growthRates: MYSTERIAN_GROWTH },
  "sirius-black":     { hp:950,  atk:130, def:80,  mag:120, res:110, spd:140, luck:120, mp:120, role:"dps",      growthRates: MYSTERIAN_GROWTH },
  "hagrid":           { hp:1400, atk:140, def:135, mag:20,  res:100, spd:60,  luck:90,  mp:80,  role:"tank",     growthRates: MYSTERIAN_GROWTH },
  "voldemort":        { hp:1300, atk:45,  def:110, mag:230, res:170, spd:110, luck:80,  mp:250, role:"mage",     growthRates: MYSTERIAN_GROWTH },

  // STRIKERS (Anime)
  "goku":             { hp:1400, atk:190, def:90,  mag:30,  res:80,  spd:130, luck:110, mp:110, role:"dps",      growthRates: STRIKER_GROWTH },
  "vegeta":           { hp:1300, atk:185, def:85,  mag:40,  res:75,  spd:125, luck:100, mp:100, role:"dps",      growthRates: STRIKER_GROWTH },
  "gohan":            { hp:1250, atk:165, def:95,  mag:130, res:100, spd:110, luck:130, mp:120, role:"dps",      growthRates: STRIKER_GROWTH },
  "piccolo":          { hp:1200, atk:130, def:140, mag:120, res:130, spd:95,  luck:110, mp:120, role:"tank",     growthRates: STRIKER_GROWTH },
  "naruto":           { hp:1350, atk:160, def:100, mag:120, res:110, spd:120, luck:150, mp:140, role:"dps",      growthRates: STRIKER_GROWTH },
  "sasuke":           { hp:1100, atk:155, def:80,  mag:160, res:130, spd:145, luck:120, mp:130, role:"dps",      growthRates: STRIKER_GROWTH },
  "kakashi":          { hp:1050, atk:140, def:105, mag:140, res:140, spd:130, luck:140, mp:140, role:"balanced", growthRates: STRIKER_GROWTH },
  "luffy":            { hp:1450, atk:175, def:120, mag:10,  res:110, spd:140, luck:160, mp:90,  role:"dps",      growthRates: STRIKER_GROWTH },
  "zoro":             { hp:1350, atk:185, def:110, mag:5,   res:95,  spd:125, luck:110, mp:80,  role:"dps",      growthRates: STRIKER_GROWTH },
  "itachi":           { hp:1000, atk:145, def:85,  mag:200, res:160, spd:135, luck:150, mp:180, role:"mage",     growthRates: STRIKER_GROWTH },

  // ETHEREALS (Disney & FF)
  "sora":             { hp:1100, atk:140, def:100, mag:150, res:120, spd:115, luck:140, mp:160, role:"balanced", growthRates: ETHEREAL_GROWTH },
  "riku":             { hp:1150, atk:160, def:105, mag:140, res:115, spd:120, luck:120, mp:140, role:"dps",      growthRates: ETHEREAL_GROWTH },
  "aqua":             { hp:1000, atk:115, def:110, mag:185, res:170, spd:105, luck:130, mp:200, role:"mage",     growthRates: ETHEREAL_GROWTH },
  "mickey":           { hp:950,  atk:110, def:115, mag:165, res:160, spd:125, luck:160, mp:180, role:"support",  growthRates: ETHEREAL_GROWTH },
  "axel":             { hp:1050, atk:150, def:85,  mag:140, res:100, spd:140, luck:120, mp:130, role:"dps",      growthRates: ETHEREAL_GROWTH },
  "elsa":             { hp:900,  atk:20,  def:85,  mag:195, res:150, spd:105, luck:130, mp:200, role:"mage",     growthRates: ETHEREAL_GROWTH },
  "donald":           { hp:800,  atk:15,  def:80,  mag:185, res:140, spd:100, luck:120, mp:220, role:"mage",     growthRates: ETHEREAL_GROWTH },
  "ventus":           { hp:1000, atk:130, def:95,  mag:120, res:110, spd:145, luck:150, mp:140, role:"balanced", growthRates: ETHEREAL_GROWTH },
  "simba":            { hp:1250, atk:145, def:110, mag:40,  res:95,  spd:120, luck:130, mp:100, role:"dps",      growthRates: ETHEREAL_GROWTH },
  "cloud":            { hp:1250, atk:175, def:100, mag:130, res:105, spd:105, luck:120, mp:130, role:"dps",      growthRates: ETHEREAL_GROWTH },
  "aerith":           { hp:950,  atk:30,  def:90,  mag:200, res:180, spd:95,  luck:170, mp:250, role:"healer",   growthRates: ETHEREAL_GROWTH },
  "squall":           { hp:1200, atk:165, def:105, mag:115, res:100, spd:110, luck:130, mp:120, role:"dps",      growthRates: ETHEREAL_GROWTH },
  "vivi":             { hp:800,  atk:10,  def:85,  mag:220, res:170, spd:90,  luck:140, mp:250, role:"mage",     growthRates: ETHEREAL_GROWTH },
  "sephiroth":        { hp:1800, atk:210, def:140, mag:190, res:160, spd:120, luck:110, mp:200, role:"dps",      growthRates: ETHEREAL_GROWTH },
}
