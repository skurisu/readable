export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function setCategories(data) {
  return { type: SET_CATEGORIES, data };
}

export function selectCategory(data) {
  return { type: SELECT_CATEGORY, data };
}
