export interface Article {
  id: number;
  title: string;
  intro: string;
  slug: string;
  image: string;
  featured?: boolean;
  category: string;
  date: string;
  author?: string;
  sections: {
    heading: string;
    content: string;
  }[];
}
