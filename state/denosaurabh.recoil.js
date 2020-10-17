import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';

// This is to save info about denosaurabh
const denosaurabhState = atom({
  key: 'denosaurabh',
  default: null,
});

// Get and Set State Functions
export const useDenosaurabh = () => ({
  denosaurabh: useRecoilValue(denosaurabhState),
  updateDenosaurabh: useSetRecoilState(denosaurabhState),
});
