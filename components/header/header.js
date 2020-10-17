import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_DENOSAURABH } from '../../apollo/denosaurabh.query';
import withApollo from '../../lib/apollo';

import { useDenosaurabh } from '../../state/denosaurabh.recoil';

import { HeaderS } from '../../styles/components/header.styles';
import {
  NeueUBoldSmallText,
  NeueUBoldMediumSmallText,
} from '../../styles/typography';

import { useCursor } from '../../state/cursor.recoil';

const Header = () => {
  const { updateCursorStatus } = useCursor();
  const { updateDenosaurabh } = useDenosaurabh();

  const { loading, error, data } = useQuery(GET_DENOSAURABH);

  if (loading) {
    return (
      <HeaderS>
        <NeueUBoldMediumSmallText>loading</NeueUBoldMediumSmallText>
      </HeaderS>
    );
  }

  const { name, season, currentStatus } = data.denosaurabh;
  updateDenosaurabh(data.denosaurabh);

  return (
    <HeaderS>
      <NeueUBoldMediumSmallText
        onHoverStart={() =>
          updateCursorStatus({
            text: currentStatus,
            alignment: 'right',
          })
        }
        onHoverEnd={() => updateCursorStatus(null)}
        onTapStart={() =>
          updateCursorStatus({
            text: currentStatus,
            alignment: 'right',
          })
        }
        onTap={() => updateCursorStatus(null)}
        onTapCancel={() => updateCursorStatus(null)}
      >
        {name}.
      </NeueUBoldMediumSmallText>
      <NeueUBoldSmallText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {season}
      </NeueUBoldSmallText>
    </HeaderS>
  );
};

export default withApollo({ ssr: true })(Header);
