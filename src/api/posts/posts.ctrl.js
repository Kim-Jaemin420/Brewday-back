let postId = 1;

const posts = [
  {
    id: 2,
    title: '제목',
    body: '내용',
  },
];

exports.write = ctx => {
  const { title, body } = ctx.request.body;
  postId += 1;

  const post = { id: postId, title, body };
};
