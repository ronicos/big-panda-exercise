import { observable } from 'mobx';

const server = 'http://localhost:3000/comments/';

const data = {
  @observable comments: []
};

const getComments = () => fetch(server)
  .then(res => res.json())
  .then((comments) => data.comments = comments);

const removeComment = (id) => fetch(server + id, { method: 'DELETE' })
  .then(res => res.text())
  .then(() => data.comments = data.comments.filter((comment) => comment.id !== id));

const editComment = (id, comment) => fetch(server + id, {
    method: 'PUT',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ comment })
  })
  .then(res => res.json())
  .then(() => {
    const editedComment =  data.comments.filter((comment) => comment.id === id)[0];

    editedComment.comment = comment;
  });

export const store = Object.assign(data, { getComments, removeComment, editComment });
