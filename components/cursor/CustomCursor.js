import React, { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Cursor, CursorBox } from '../../styles/components/customCursor';
import { NeueLightMiniText } from '../../styles/typography';

import { useCursor } from '../../state/cursor.recoil';

const CustomCursor = () => {
  const { cursorStatus } = useCursor();

  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <CursorBox ref={cursor} className="cursor">
      <Cursor />
      <AnimatePresence exitBeforeEnter>
        {cursorStatus ? (
          <NeueLightMiniText
            direction={cursorStatus.alignment}
            key={1}
            initial={{
              translateX: '30%',
              translateY: '-50%',
              opacity: 0,
              right: cursorStatus.alignment === 'left' ? `45rem` : '0',
            }}
            animate={{
              translateX: '0%',
              translateY: '-50%',
              opacity: 1,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.03)',
            }}
            transition={{ delay: 0.1 }}
            exit={{ translateY: '-150%', opacity: 0 }}
          >
            {cursorStatus.text}
          </NeueLightMiniText>
        ) : null}
      </AnimatePresence>
    </CursorBox>
  );
};

export default CustomCursor;
