export interface IProps {
  articleData: IArticleData;
  id: string;
  comments: IComment[];
  owner: string,
  repo: string,
  issueNumber: number | null
}
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

export interface IComment {
  username: string;
  avatarUrl: string;
  content: string;
  datetime: string;
  reactions: IReactions;
  id: number;
}

export interface IReactions {
  '+1': number,
  '-1': number,
  'confused': number,
  'eyes': number,
  'heart': number,
  'hooray': number,
  'rocket': number,
  'total_count': number,
  'url': string,
  'laugh': number
}
export type reactionsOptions = '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket'
