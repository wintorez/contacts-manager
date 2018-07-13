const defaultState = {
  loading: false,
  error: false
};

export default (state = defaultState, action) => {
  const { type } = action;

  if (type.endsWith('_REQUEST')) return { loading: true };

  if (type.endsWith('_SUCCESS')) return { loading: false, error: false };

  if (type.endsWith('_ERROR')) return { loading: false, error: true };

  return state;
};
