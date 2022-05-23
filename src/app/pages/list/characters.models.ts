export interface ICharacters{
  name: string;
  image: string;
  alias: string;
  faction:factionList;
  isActive: boolean
}

export interface ApiCharacters{
  name: string;
  image: string;
  alias: string;
  faction:factionList;
  isActive: boolean,
  id: number
}
export enum factionList{
SAMCRO = "Samcro",
MAYANS = "Mayans",
IRA="Ira",
ONENINERS="One-niners"
}
