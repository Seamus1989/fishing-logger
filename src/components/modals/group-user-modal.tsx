import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";

import { darkColor } from "../../consts";
import { User, useUserContext } from "../../context/all-user-score";

import bin from "../../images/delete.svg";
import plus from "../../images/plus.svg";
import { getTrophy, roundToDecimalPlace } from "../../utils";

import { SelectNumber } from "../common/numeric-input";
import { TableHeader } from "../common/table-header";
import { TextDisplayColumn } from "../common/text-display-column";
import { Modal, ModalContentProps } from "./modal";

const SingleUserBreakdown = ({
  user,
  hideDetail,
  index,
}: {
  user: User;
  hideDetail?: boolean;
  index: number;
}) => {
  const [bonusPoints, setBonusPoints] = React.useState("");
  const { editBonusScore } = useUserContext();

  return (
    <Box px="10px" py="5px" flex={1} bg={darkColor}>
      <Box pb={!hideDetail ? "5px" : undefined}>
        <Text lineHeight="16px" fontWeight={500} fontSize="14px">
          {user
            ? `${getTrophy(index)}${user.name} - ${
                user ? roundToDecimalPlace(user.score + user.bonusScore) : 0
              }`
            : ""}
        </Text>
      </Box>
      <Flex direction="row" pb="3px">
        {!hideDetail && (
          <Box
            p="5px"
            display="flex"
            flexDirection="row"
            flex={1}
            borderWidth={1}
            borderColor="black"
            borderRadius={"5px"}
          >
            <Box flex={3}>
              <TextDisplayColumn
                text={`Total Fish: ${user?.allFish?.length || 0}`}
              />
              <TextDisplayColumn
                text={`Total Specimen: ${user?.totalSpecimenNumber || 0}`}
              />
              <TextDisplayColumn
                text={`Bonus Comp points: ${
                  bonusPoints ? roundToDecimalPlace(user.bonusScore) : 0
                }`}
              />
            </Box>
            <Box flex={2}>
              <Flex direction="row" gap="5px">
                <Box width="70px">
                  <SelectNumber
                    title="Bonus"
                    onChange={(value) => setBonusPoints(value)}
                    value={bonusPoints}
                  />
                </Box>
                <Box
                  ml="5px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  onClick={() => {
                    editBonusScore(user.name, parseFloat(bonusPoints || "0"));
                  }}
                >
                  <Image height={"25px"} width={"25px"} src={plus} alt="logo" />
                </Box>
                <Box
                  ml="5px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  onClick={() => {
                    editBonusScore(user.name, 0);
                  }}
                >
                  <Box bg="white">
                    <Image
                      height={"25px"}
                      width={"25px"}
                      src={bin}
                      alt="logo"
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

const AllUserTable = () => {
  const { exportToText, users } = useUserContext();

  const renderUsers = useMemo(() => {
    if (!users) return null;
    return users
      ?.sort((a, b) =>
        a.score + a.bonusScore < b.bonusScore + b.score ? 1 : -1
      )
      .map((user, index) => {
        return (
          <SingleUserBreakdown
            user={user}
            hideDetail
            key={`all-user-table-${user.name}-${index}`}
            index={index}
          />
        );
      });
  }, [users]);
  return (
    <Box
      pb="15px"
      borderWidth={1}
      borderColor="black"
      borderStyle="solid"
      borderRadius="5px"
      px="10px"
      mx="10px"
    >
      <TableHeader text="Top Scores" />
      {renderUsers}
      <Flex direction="row" justifyContent="flex-end">
        <Button mt="20px" onClick={exportToText} colorScheme="blue" mr={3}>
          <Text>Export to text</Text>
        </Button>
      </Flex>
    </Box>
  );
};
export const GroupUserModal = ({ show, onClose }: ModalContentProps) => {
  const { users } = useUserContext();

  const renderUsers = useMemo(() => {
    if (!users) return null;
    return users
      ?.sort((a, b) =>
        a.score + a.bonusScore < b.bonusScore + b.score ? 1 : -1
      )
      .map((user, index) => {
        return (
          <SingleUserBreakdown
            user={user}
            key={`grouped-users-${user.name}-${index}`}
            index={index}
          />
        );
      });
  }, [users]);

  return (
    <Modal title="All Scores" show={show} onClose={onClose} bg={darkColor}>
      <Box overflowY={"scroll"} maxH="100%">
        {renderUsers}
        {!!users?.length && (
          <Box py="20px">
            <AllUserTable />
          </Box>
        )}
      </Box>
    </Modal>
  );
};
