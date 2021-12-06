/*
Passes each item in the array to the Boolean object.
Checks if the item is truthy, if it is then we keep.
*/
export const setClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
