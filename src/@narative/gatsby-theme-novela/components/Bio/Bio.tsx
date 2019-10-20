import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

import Image from '@components/Image';
import { IAuthor } from '@types';
import SocialLinks from "@components/SocialLinks";

interface AuthorHeroProps {
  author: IAuthor;
}

function Bio({ author }: IAuthor) {
  return (
    <BioContainer>
      <MainBio>
        <BioAvatar
          as={author.authorsPage ? Link : 'div'}
          to={author.slug}
          data-a11y="false"
          aria-label="Author's bio"
        >
          <BioAvatarInner>
            <Image src={author.avatar.medium} />
          </BioAvatarInner>
        </BioAvatar>
        <BioText dangerouslySetInnerHTML={{ __html: author.bio }} />
      </MainBio>
      <Social>
        <SocialLinks links={author.social} />
      </Social>
    </BioContainer>
  );
}

export default Bio;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: -10px;

  ${mediaqueries.phablet`
    flex-direction: column;
  `};
`;

const MainBio = styled.div`
  display: flex;
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 20px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 60px;
    height: 60px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const BioAvatarInner = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0px;
  margin-left:120px;
  width:90%;
  ${mediaqueries.phablet`
  margin-top: 15px;
  margin-left:140px;
`}
`;
