export interface IProps {
  articleData: IArticleData;
  id: string;
  commentList: IComment[];
  owner: string,
  repo: string
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
  '+': number,
  '-': number,
  'confused': number,
  'eyes': number,
  'heart': number,
  'hooray': number,
  'rocket': number,
  'total_count': number,
  'url': string,
}
export type reactionsOptions = '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket'
