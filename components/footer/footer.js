import React, { useEffect } from 'react';
import Link from 'next/link';

import { FooterS } from '../../styles/components/footer.styles';

import { NeueUBoldSmallText } from '../../styles/typography';

import { useCursor } from '../../state/cursor.recoil';

const Footer = () => {
  const { updateCursorStatus } = useCursor();

  useEffect(() => {
    return () => updateCursorStatus(null);
  }, []);

  return (
    <FooterS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Link href="/projects">
        <a>
          <NeueUBoldSmallText
            onHoverStart={() =>
              updateCursorStatus({
                text: 'Have a look on some of my cool projects!',
                alignment: 'right',
              })
            }
            onHoverEnd={() => updateCursorStatus(null)}
          >
            Projects
          </NeueUBoldSmallText>
        </a>
      </Link>
      <Link href="/skills">
        <a>
          <NeueUBoldSmallText
            onHoverStart={() =>
              updateCursorStatus({
                text: 'My developer & design skillset!',
                alignment: 'right',
              })
            }
            onHoverEnd={() => updateCursorStatus(null)}
          >
            Skills
          </NeueUBoldSmallText>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <NeueUBoldSmallText
            onHoverStart={() =>
              updateCursorStatus({
                text: 'About denosaur, contact and some secrets!',
                alignment: 'right',
              })
            }
            onHoverEnd={() => updateCursorStatus(null)}
          >
            About
          </NeueUBoldSmallText>
        </a>
      </Link>
      <Link href="/blogs">
        <a>
          <NeueUBoldSmallText
            onHoverStart={() =>
              updateCursorStatus({
                text: 'Some written medium blogs from me!',
                alignment: 'left',
              })
            }
            onHoverEnd={() => updateCursorStatus(null)}
          >
            Blogs
          </NeueUBoldSmallText>
        </a>
      </Link>
    </FooterS>
  );
};

export default Footer;
