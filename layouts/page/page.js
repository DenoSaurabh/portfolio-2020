import Link from 'next/link';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import { PageS } from '../../styles/components/page';

import { GET_DENOSAURABH } from '../../apollo/denosaurabh.query';
import withApollo from '../../lib/apollo';

import { useDenosaurabh } from '../../state/denosaurabh.recoil';

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
  const { updateDenosaurabh, denosaurabh } = useDenosaurabh();

  // if (!denosaurabh) {
  const { loading, error, data } = useQuery(GET_DENOSAURABH);

  if (loading) {
    console.log('querying denosaurabh');
    return <NeueUBoldMediumSmallText>loading</NeueUBoldMediumSmallText>;
  }

  updateDenosaurabh(data.denosaurabh);
  // }

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

export default withApollo({ ssr: true })(Page);
