import { countComment } from './commentCounter.js';

let commentsList;
describe('The countComment function', () => {
  beforeEach(() => {
    commentsList = [
      { creation_date: '2022-06-22', username: 'Desor', comment: 'Chicken is best' },
      { creation_date: '2022-06-21', username: 'Bello', comment: 'I need some cake after' },
      { creation_date: '2022-06-20', username: 'Jeff', comment: 'Very nice food' },
    ];
  });
  it('should be able to display the number of comments', () => {
    expect(countComment(commentsList)).toBe(3);
  });
});