import { Box, Text } from "@chakra-ui/react";

import { darkColor } from "../../consts";
import { useUserContext } from "../../context/all-user-score";

import { roundToDecimalPlace } from "../../utils";

import { TableHeader } from "../common/table-header";
import { TextDisplayColumn } from "../common/text-display-column";
import { AllLoggedFish } from "../molecules/all-logged-fish";
import { Modal, ModalContentProps } from "./modal";

export const UserModal = ({ show, onClose }: ModalContentProps) => {
  const { currentUser, users } = useUserContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  if (!user) return null;
  return (
    <Modal bg={darkColor} title="User Score" show={show} onClose={onClose}>
      <Box overflowY={"scroll"} maxH="100%">
        <Box p="10px" flex={1} bg={darkColor}>
          <Box pb="25px">
            <Box pb="5px">
              <Text lineHeight="18px" fontWeight={600} fontSize="16px">
                {user ? user.name : ""}
              </Text>
            </Box>
            <Box pl="5px">
              <TextDisplayColumn
                text={`Total Fish: ${user?.allFish?.length || 0}`}
              />
              <TextDisplayColumn
                text={`Total Specimen: ${user?.totalSpecimenNumber || 0}`}
              />
              <TextDisplayColumn
                text={`Score Points: ${
                  user ? roundToDecimalPlace(user.score) : 0
                }`}
              />
            </Box>
          </Box>
          <Box pb="50px">
            <TableHeader text="All Logged Fish" />
            <AllLoggedFish user={user} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
