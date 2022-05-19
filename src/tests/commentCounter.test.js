import commentCounter from '../modules/commentCounter.js';

describe('Returns number of comments on a meal item', () => {
  it('returns 0 if the comments array is empty', () => {
    const commentList = [];
    expect(commentCounter(commentList)).toBe(0);
  });

  it('returns the number of comments for a meal item ', () => {
    const commentList = [
      {
        item_id: 'abc123',
        username: 'Maua',
        comment: 'Delicous. Getting this on weekend',
      },
      {
        item_id: 'xyz123',
        username: 'Karua',
        comment: 'Awesome. Getting this on weekend',
      },
    ];
    expect(commentCounter(commentList)).toBe(2);
  });
});