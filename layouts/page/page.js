import Link from 'next/link';
import Head from 'next/head';

import {
  AquireSecondaryHeading,
  NeueUBoldMediumSmallText,
} from '../../styles/typography';

import CustomCursor from '../../components/cursor/CustomCursor';

const Page = ({
  id,
  metaName,
  metaDes,
  title,
  children,
  nextPageLink,
  nextPageTitle,
  previousPageLink,
}) => {

  return (
    <PageS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      key={id}
    >
      <Head>
        <title>{id} - denosaurabh</title>
        <meta name={metaName} content={metaDes} />
      </Head>
      <CustomCursor />
      <NeueUBoldMediumSmallText
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href={previousPageLink || '/'}>&larr; denosaurabh.</Link>
        <Link href={nextPageLink || '/'}>
          <a>
            <u>{nextPageTitle}</u>
          </a>
        </Link>
      </NeueUBoldMediumSmallText>
      <AquireSecondaryHeading>{title}</AquireSecondaryHeading>
      {children}
    </PageS>
  );
};

export default Page;
