import Link from 'next/link';

import {
  BlogsPageS,
  ProjectIMG,
  InlineStyle,
  SmallProjectsContent,
  ProjectBox,
} from '../styles/pages/blogs';

import {
  AquireSecondaryHeading,
  NeueUBoldMediumSmallText,
  NeueTertiaryHeading,
  NeueLightMiniText,
} from '../styles/typography';

const BlogsPage = () => (
  <BlogsPageS>
    <NeueUBoldMediumSmallText>
      <Link href="/">denosaurabh.</Link>
    </NeueUBoldMediumSmallText>
    <AquireSecondaryHeading>Blogs</AquireSecondaryHeading>
    <SmallProjectsContent>
      <ProjectBox>
        <ProjectIMG
          src="/assets/img/blogs/mongodb-realm.png"
          alt="mongodb-realm"
        />
        <InlineStyle>
          <NeueTertiaryHeading>MongoDB Realm</NeueTertiaryHeading>
          <NeueLightMiniText>
            is a brand new product by MongoDB and it is very exciting
            backend-as-a-service.
          </NeueLightMiniText>
        </InlineStyle>
      </ProjectBox>
      <ProjectBox>
        <ProjectIMG
          src="/assets/img/blogs/mongodb-atlas.png"
          alt="mongodb-atlas"
        />
        <InlineStyle>
          <NeueTertiaryHeading>MongoDB Atlas</NeueTertiaryHeading>
          <NeueLightMiniText>
            let’s find out what’s new in MongoDB Atlas in 2020.
          </NeueLightMiniText>
        </InlineStyle>
      </ProjectBox>
      <ProjectBox>
        <ProjectIMG
          src="/assets/img/blogs/authentication.png"
          alt="authentication"
        />
        <InlineStyle>
          <NeueTertiaryHeading>
            Future Authentication Techniques
          </NeueTertiaryHeading>
          <NeueLightMiniText>
            is a blogs consists information about 5 Future and New
            Authentication Techniques.
          </NeueLightMiniText>
        </InlineStyle>
      </ProjectBox>
    </SmallProjectsContent>
  </BlogsPageS>
);

export default BlogsPage;
