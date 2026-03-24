export type CharacterClass = "Mysterian" | "Ethereal" | "Striker";

export type Franchise = "harry_potter" | "anime" | "disney" | "scooby" | "final_fantasy";

export type ResourceType = "MP" | "Ki" | "Courage";

export interface Resource {
  type: ResourceType;
  current: number;
  max: number;
}

export interface CharacterStats {
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  spd: number;
  loreLevel: number;
}

export interface GameCharacter {
  id: string;
  name: string;
  imageUrl: string;
  franchise: Franchise;
  characterClass: CharacterClass;
  stats: CharacterStats;
  resource: Resource;
  isAlive: boolean;
}

export interface Enemy extends GameCharacter {
  isBoss: boolean;
}

export type Difficulty = "easy" | "medium" | "hard";
export type QuizSource = "local" | "opentrivia";

export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  difficulty: Difficulty;
  source: QuizSource;
  franchise: Franchise;
}

export type BattlePhase = "player_turn" | "enemy_turn" | "quiz" | "victory" | "defeat" | "transition";

export interface BattleState {
  party: [GameCharacter, GameCharacter, GameCharacter];
  enemy: Enemy;
  synergy: number; // 0-100
  activeTurnIndex: number;
  log: string[];
  phase: BattlePhase;
  quizMultiplier: number;
  atb: ATBState[];
}

export interface RosterSlot {
  character: GameCharacter | null;
  slotIndex: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: "consumable" | "equipment";
  effect: {
    hp?: number;
    mp?: number;
    revive?: boolean;
    statBonus?: Partial<CharacterStats>;
  };
  quantity: number;
}

export interface Inventory {
  items: Item[];
  currency: number; // Memory Fragments
}

export interface ATBState {
  characterId: string;
  progress: number; // 0-100
}
