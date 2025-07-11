export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  publish_date: string;
  tags: string[];
  summary: string;
  read_time_minutes: number;
  featured: boolean;
}
