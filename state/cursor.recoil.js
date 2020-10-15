import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';

// This is the state for when you Hover ans specific element, it will show some text on cursor.
const cursorState = atom({
  key: 'cursor',
  default: null,
});

// Get and Set State Functions
export const useCursor = () => ({
  cursorStatus: useRecoilValue(cursorState),
  updateCursorStatus: useSetRecoilState(cursorState),
});
