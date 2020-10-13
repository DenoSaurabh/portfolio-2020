import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_DENOSAURABH } from '../../apollo/denosaurabh.query';
import withApollo from '../../lib/apollo';

import { HeaderS } from '../../styles/components/header.styles';
import {
  NeueUBoldSmallText,
  NeueUBoldMediumSmallText,
} from '../../styles/typography';

import { useCursor } from '../../state/cursor.recoil';

const Header = () => {
  const { updateCursorStatus } = useCursor();

  const { loading, error, data } = useQuery(GET_DENOSAURABH);

  if (loading) {
    console.log('loading');
    return (
      <HeaderS>
        <NeueUBoldMediumSmallText>loading</NeueUBoldMediumSmallText>
      </HeaderS>
    );
  }

  const { name, event } = data.denosaurabh;

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
        {name}.
      </NeueUBoldMediumSmallText>
      <NeueUBoldSmallText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {event}
      </NeueUBoldSmallText>
    </HeaderS>
  );
};

export default withApollo({ ssr: true })(Header);
