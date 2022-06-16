// import * as actions from '../api';

const api = (store) => (next) => (action) => {
  console.log(action, '=== action');
  next(action);
};

export default api;
