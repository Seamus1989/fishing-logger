import React, {useCallback} from 'react';
import styled from 'styled-components';

import group from '../../group.svg';
import user from '../../user.svg';
import {Box} from '../common/box';
import {StyledImage} from '../random';

const navMenuHeight = '70px';
const navIconHeight = 40;
const NavMenuContainer = styled.div`
  background: #ff8883;
  font-family: roboto;
  font-weight: 200;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: ${navMenuHeight};
`;
const SingleNavDiv = styled.div({
  appearance: 'none',
  height: navMenuHeight,
  flex: 1,
  display: 'flex',
  whiteSpace: 'normal',
  '&:hover, :active': {
    backgroundColor: `#FFC2BB`,
    cursor: `pointer`,
    transition: 'all 0.7s',
  },
});

const ImageContainer = ({
  onClick,
  title,
  render,
  bottomSpacer,
}: {
  onClick: () => void;
  title: string;
  render: () => JSX.Element;
  // eslint-disable-next-line react/require-default-props
  bottomSpacer?: string;
}) => {
  return (
    <Box flex={1} display="flex" justifyContent="center">
      <Box
        flex={1}
        display="flex"
        onClick={() => onClick()}
        title={title}
        position="relative"
      >
        <Box
          justifyContent="center"
          flexDirection="row"
          display="flex"
          flex={1}
        >
          <Box justifyContent="center" flexDirection="column" display="flex">
            {render()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Nav = (): JSX.Element => {
  const showUserInfo = useCallback(() => {
    // todo SEAMO
  }, []);
  const showGroupUserInfo = useCallback(() => {
    // todo SEAMO
  }, []);

  return (
    <NavMenuContainer>
      <SingleNavDiv>
        <ImageContainer
          title="User Stats"
          onClick={showUserInfo}
          bottomSpacer="10px"
          render={() => (
            <>
              <StyledImage
                height={30}
                width={navIconHeight}
                src={user}
                alt="logo"
              />
            </>
          )}
        />
      </SingleNavDiv>
      <SingleNavDiv>
        <ImageContainer
          title="Scoreboard"
          onClick={showGroupUserInfo}
          render={() => (
            <StyledImage
              height={60}
              width={navIconHeight}
              src={group}
              alt="logo"
            />
          )}
        />
      </SingleNavDiv>
    </NavMenuContainer>
  );
};
