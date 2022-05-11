export interface ICharacters{
  name: string;
  image: string;
  alias: string;
  faction:factionList;
  isActive: boolean
}

export enum factionList{
SAMCRO = "Samcro",
MAYANS = "Mayans",
IRA="Ira",
ONENINERS="One-niners"
}
