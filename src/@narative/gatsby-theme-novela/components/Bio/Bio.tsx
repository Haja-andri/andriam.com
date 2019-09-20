import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

import Image from '@components/Image';
import { IAuthor } from '@types';

function Bio({ author }: IAuthor) {
  return (
    <BioContainer>
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
    </BioContainer>
  );
}

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;

  ${mediaqueries.phablet`
    flex-direction: column;
  `};
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
