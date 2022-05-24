import profileReduser, { addPost } from './profileReducer';
const state = {
  postData: [
    { id: 1, message: "Text for post 1", likesCount: 0 },
    { id: 2, message: "Text for post 2", likesCount: 4 },
  ],
};

it('check count posts after add new post', () => {
  const action = addPost("test");

  const newState = profileReduser(state, action);

  expect(newState.postData.length).toBe(3);
});

it('check current text post', () => {
  const action = addPost("test");

  const newState = profileReduser(state, action);

  expect(newState.postData[2].message).toBe("test");
});