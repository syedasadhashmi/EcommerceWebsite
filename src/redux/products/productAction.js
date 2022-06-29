import { DETAILS } from './productType';
export const detail = (id) => {
  return {
    type: DETAILS,
    id: id,
  };
};
