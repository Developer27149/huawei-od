export interface IArticleData {
  title: string,
  tags?: string[],
  content: string,
  navArr: INavbar[]
}

export interface INavbar {
  text: string,
  level: number,
  targetId: string,
}