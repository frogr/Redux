export const ADDTODO = "ADDTODO";
export const SWITCH_COMPLETE = "SWITCH_COMPLETE";
export const REMOVE_COMPLETE = "REMOVE_COMPLETE";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addtodo = todo => {
  return {
    type: "ADDTODO",
    payload: todo
  };
};

export const switchComplete = index => {
  return {
    type: "SWITCH_COMPLETE",
    payload: index
  };
};
export const removeItem = index => {
  return {
    type: "REMOVE_ITEM",
    payload: index
  };
};

export const removeComplete = () => {
  return {
    type: "REMOVE_COMPLETE"
  };
};
