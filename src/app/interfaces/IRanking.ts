export interface IRanking {
  ranking_type: 'js' | 'html' | 'code_complete' | 'quiz';
  quarter: 1 | 2 | 3 | 4;
  limit?: number;
}
