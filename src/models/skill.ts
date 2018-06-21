
export class Skill {
  description: string;
  level: string;
  children: Skill[]

  constructor(
    description: string,
    level: string,
    children: Skill[]
  ) {
    this.description = description;
    this.level = level;
    this.children = children;
  }
} 