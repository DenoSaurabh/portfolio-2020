import React from 'react';

import { HeaderS } from '../../styles/components/header.styles';
import {
  NeueUBoldSmallText,
  NeueUBoldMediumSmallText,
} from '../../styles/typography';

import { useCursor } from '../../state/cursor.recoil';

const Header = () => {
  const { updateCursorStatus } = useCursor();

  return (
    <HeaderS>
      <NeueUBoldMediumSmallText
        onHoverStart={() =>
          updateCursorStatus({
            text: 'My main Identity on most platforms!',
            alignment: 'right',
          })
        }
        onHoverEnd={() => updateCursorStatus(null)}
      >
        denosaurabh.
      </NeueUBoldMediumSmallText>
      <NeueUBoldSmallText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Halloween 🎃 2020
      </NeueUBoldSmallText>
    </HeaderS>
  );
};

export default Header;
