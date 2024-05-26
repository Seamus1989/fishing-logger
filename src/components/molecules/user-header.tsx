import { useState } from "react";

import { useUserContext } from "../../context/all-user-score";

import { darkColor, lightColor } from "../../consts";
import { useFishContext } from "../../context/fish-list";

import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { capitaliseMe, roundToDecimalPlace } from "../../utils";
import { TextDisplayColumn } from "../common/text-display-column";
import { UserModal } from "../modals/user-modal";
import { UnderlinedText } from "../random";

const StyledContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Box bg={lightColor} zIndex={100} position="sticky" top={0} left={0}>
      {children}
    </Box>
  );
};

const UserHeaderProfile = ({
  setShowUserModal,
}: {
  setShowUserModal: () => void;
}) => {
  const { currentUser, users } = useUserContext();

  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  return (
    <Collapse in={!!user} animateOpacity style={{ width: "100%" }}>
      <Box m="10px" bg={darkColor} borderRadius="10px" p="15px" width="90%">
        <Box>
          <Box pb="5px">
            <Text lineHeight="18px" fontWeight={600} fontSize="16px">
              {user ? user.name : ""}
            </Text>
          </Box>
          <TextDisplayColumn
            text={`Total Fish: ${user?.allFish?.length || 0}`}
          />
          <TextDisplayColumn
            text={`Total Specimen: ${user?.totalSpecimenNumber || 0}`}
          />
          <TextDisplayColumn
            text={`Score Points: ${user ? roundToDecimalPlace(user.score) : 0}`}
          />

          <Box onClick={setShowUserModal} mt="5px">
            <UnderlinedText copy="See All / Edit"></UnderlinedText>
          </Box>
        </Box>
      </Box>
    </Collapse>
  );
};
export const AppHeader = (): JSX.Element => {
  const { currentUser, changeUser } = useUserContext();
  const [text, setText] = useState("");
  const { toggleRegion } = useFishContext();
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <>
      <StyledContainer>
        <Box display="flex" flex={1} width="100%" flexDirection="row">
          <Box
            p="10px"
            my="10px"
            flex={1}
            display="flex"
            flexDirection="row"
            width="100%"
          >
            <Box display="flex" flexDirection="column" flex={1}>
              <Box display="flex" p="10px" mt="5px" flexDirection="row">
                <InputGroup>
                  <Input
                    variant="filled"
                    min={0}
                    style={{ width: "100%" }}
                    max={100}
                    value={text}
                    bg="white"
                    disabled={!!currentUser}
                    onChange={(newValue) =>
                      setText(capitaliseMe(newValue.currentTarget.value))
                    }
                    placeholder="Enter a user"
                    _focus={{ bg: "white" }}
                  />
                  {!currentUser && (
                    <InputRightElement
                      onClick={() => {
                        if (text === "" || currentUser) return;
                        changeUser(text);
                        setText("");
                      }}
                    >
                      <PlusSquareIcon
                        color={
                          currentUser || text === "" ? "gray.300" : "green.500"
                        }
                      />
                    </InputRightElement>
                  )}
                </InputGroup>
              </Box>

              {!!currentUser && (
                <Box p="10px" justifyContent="center" flex={1}>
                  <Box
                    display="flex"
                    flex={1}
                    justifyContent="flex-end"
                    flexDirection="row"
                  >
                    <Box
                      onClick={() => {
                        changeUser("");
                        setText("");
                        toggleRegion(undefined);
                      }}
                    >
                      <UnderlinedText small copy={"Next User"}></UnderlinedText>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          <Box flex={1} display="flex" width="100%">
            <UserHeaderProfile
              setShowUserModal={() => setShowUserModal(true)}
            />
          </Box>
        </Box>
      </StyledContainer>
      <UserModal show={showUserModal} onClose={() => setShowUserModal(false)} />
    </>
  );
};
