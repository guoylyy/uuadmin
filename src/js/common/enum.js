/**
* Enum Relative JS Class
*/

export const clazzJoinStatusEnum = {
  'INVITATION': {
    name: '邀请中',
    key: 'INVITATION'
  },
  'PENDING': {
    name: '待审核',
    key: 'PENDING'
  }
};

export function getEnumByKey(key, EnumObj) {
  if (EnumObj[key]) {
    return EnumObj[key];
  } else {
    return null;
  }
}