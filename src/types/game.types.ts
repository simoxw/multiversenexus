export type CharacterClass = "Mysterian" | "Ethereal" | "Striker"
export type Franchise = "harry_potter" | "anime" | "disney" | "scooby" | "final_fantasy"
export type ResourceType = "MP" | "Ki" | "Chakra" | "Courage"
export type CharacterRole = "tank" | "dps" | "support" | "mage" | "healer" | "balanced"
export type StatusEffect =
  | "atk_up" | "atk_down" | "def_up" | "def_down"
  | "spd_up" | "spd_down" | "stun" | "burn" | "regen"
  | "immune" | "taunt" | "evasion" | "paralysis" | "confuse"
export type QuizSource = "local" | "opentrivia"
export type Difficulty = "easy" | "medium" | "hard"
export type BattlePhase = "player_turn" | "enemy_turn" | "quiz" | "victory" | "defeat" | "transition"
export type MoveType = "physical" | "magical" | "hybrid"
export type Element = "fire" | "ice" | "light" | "dark" | "nonElemental"

export interface Weapon {
  id: string
  name: string
  atk: number
  mag?: number
  element?: Element
}

export interface Armor {
  id: string
  name: string
  def: number
  res: number
  hp?: number
}

export interface Accessory {
  id: string
  name: string
  luck?: number
  specialEffect?: string
}

export interface Move {
  id: string
  name: string
  mpCost: number
  power: number
  type: MoveType
  element: Element
  accuracy: number
  baseDamageMultiplier: number | null
  healAmount: number | null
  healTarget: "self" | "single" | "party" | null
  effect: StatusEffect | null
  effectTarget: "enemy" | "self" | "party" | "single" | null
  effectDuration: number
  requiresQuiz: boolean
  emoji: string
  quote: string
  description: string
}

export interface ActiveEffect {
  effect: StatusEffect
  turnsLeft: number
}

export interface Resource {
  type: ResourceType
  current: number
  max: number
}

export interface CharacterStats {
  hp: number
  maxHp: number
  atk: number
  def: number
  mag: number
  res: number
  spd: number
  luck: number
  loreLevel: number
}

export interface GrowthRates {
  hp: number
  atk: number
  def: number
  mag: number
  res: number
  spd: number
  luck: number
}

export interface GameCharacter {
  id: string
  name: string
  imageUrl: string
  franchise: Franchise
  characterClass: CharacterClass
  role: CharacterRole
  stats: CharacterStats
  resource: Resource
  isAlive: boolean
  activeEffects: ActiveEffect[]
  currentExp: number
  expToNextLevel: number
  awakeningPoints: number
  equipment: {
    weapon: Weapon | null
    armor: Armor | null
    accessory: Accessory | null
  }
}

export interface Enemy extends GameCharacter {
  isBoss: boolean
}

export interface QuizQuestion {
  question: string
  options: [string, string, string, string]
  correctIndex: number
  difficulty: Difficulty
  source: QuizSource
  franchise: Franchise
}

export interface DamagePopup {
  id: string
  value: number
  isCrit: boolean
  isHeal: boolean
  targetId: string // 'enemy' o 'p0','p1','p2'
  x?: number
  y?: number
}

export interface BattleState {
  party: (GameCharacter | null)[]
  enemy: Enemy
  synergy: number
  activeTurnIndex: number | null
  log: string[]
  phase: "player_turn" | "enemy_turn" | "quiz" | "victory" | "defeat" | "transition"
  quizMultiplier: number
  backgroundId: number
  bgClass: string
  pendingMove: Move | null
  damagePopups: DamagePopup[]
}

export interface RosterSlot {
  character: GameCharacter | null
  slotIndex: number
}

export interface Item {
  id: string
  name: string
  description: string
  type: "consumable" | "weapon" | "armor" | "accessory"
  effect?: { hp?: number; mp?: number; revive?: boolean }
  stats?: {
    atk?: number;
    def?: number;
    mag?: number;
    res?: number;
    hp?: number;
    luck?: number;
  }
  element?: Element
  quantity: number
}

export interface Inventory {
  items: Item[]
  currency: number
}
