export const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_TAMBAH":
      return {
        ...state,
        data: action.payload, //akan masuk ke sini
      };
    case "ACTION_KURANG": //masuk kesini
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
