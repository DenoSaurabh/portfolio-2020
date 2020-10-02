import React from 'react';
import Link from 'next/link';

import { FooterS } from '../../styles/components/footer.styles';

import { NeueUBoldSmallText } from '../../styles/typography';

const Footer = () => (
  <FooterS>
    <Link href="/projects">
      <a>
        <NeueUBoldSmallText className="link-projects">
          Projects
        </NeueUBoldSmallText>
      </a>
    </Link>
    <Link href="/skills">
      <a>
        <NeueUBoldSmallText className="link-skills">Skills</NeueUBoldSmallText>
      </a>
    </Link>
    <Link href="/about">
      <a>
        <NeueUBoldSmallText className="link-about">About</NeueUBoldSmallText>
      </a>
    </Link>
    <Link href="/blogs">
      <a>
        <NeueUBoldSmallText className="link-blogs">Blogs</NeueUBoldSmallText>
      </a>
    </Link>
  </FooterS>
);

export default Footer;
