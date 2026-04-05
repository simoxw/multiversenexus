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

export interface Move {
  id: string
  name: string
  mpCost: number
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
  spd: number
  loreLevel: number
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

export interface BattleState {
  party: [GameCharacter, GameCharacter, GameCharacter]
  enemy: Enemy
  synergy: number
  activeTurnIndex: number
  log: string[]
  phase: BattlePhase
  quizMultiplier: number
  pendingMove: Move | null
}

export interface RosterSlot {
  character: GameCharacter | null
  slotIndex: number
}

export interface Item {
  id: string
  name: string
  description: string
  type: "consumable" | "equipment"
  effect: { hp?: number; mp?: number; revive?: boolean }
  quantity: number
}

export interface Inventory {
  items: Item[]
  currency: number
}
