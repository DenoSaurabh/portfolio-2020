import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';

const alertState = atom({
  key: 'alert',
  default: null,
});

// Get and Set State Functions
export const useAlert = () => ({
  alertStatus: useRecoilValue(alertState),
  updateAlertStatus: useSetRecoilState(alertState),
});
