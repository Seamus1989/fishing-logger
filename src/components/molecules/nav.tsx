import { useCallback, useState } from "react";

import { lightColor } from "../../consts";

import group from "../../images/group.svg";
import user from "../../images/user.svg";

import { Box, Image } from "@chakra-ui/react";
import { GroupUserModal } from "../modals/group-user-modal";
import { UserModal } from "../modals/user-modal";

const navMenuHeight = "50px";
const navIconHeight = 30;

const NavMenuContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <Box
      background={lightColor}
      fontFamily="roboto"
      fontWeight={200}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      height={navMenuHeight}
    >
      {children}
    </Box>
  );
};
const SingleNavDiv = ({ children }: { children: JSX.Element }) => {
  return (
    <Box
      appearance="none"
      height={navMenuHeight}
      flex={1}
      display="flex"
      whiteSpace="normal"
      position="relative"
    >
      {children}
    </Box>
  );
};

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
  const [showUserModal, setShowUserModal] = useState(false);
  const [showGroupUserModal, setShowGroupUserModal] = useState(false);
  const showUserInfo = useCallback(() => {
    setShowUserModal(true);
  }, []);

  const showGroupUserInfo = useCallback(() => {
    setShowGroupUserModal(true);
  }, []);

  return (
    <>
      <NavMenuContainer>
        <>
          <SingleNavDiv>
            <ImageContainer
              title="User Stats"
              onClick={showUserInfo}
              bottomSpacer="10px"
              render={() => (
                <>
                  <Image
                    height={(2 * navIconHeight) / 3}
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
                <Image
                  height={navIconHeight}
                  width={navIconHeight}
                  src={group}
                  alt="logo"
                />
              )}
            />
          </SingleNavDiv>
        </>
      </NavMenuContainer>
      <UserModal show={showUserModal} onClose={() => setShowUserModal(false)} />
      <GroupUserModal
        show={showGroupUserModal}
        onClose={() => setShowGroupUserModal(false)}
      />
    </>
  );
};
