import {
  Box,
  Button,
  Modal as ChakraModal,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import remove from "../../images/cancel.svg";

const ModalHeaderContainer = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}): JSX.Element => {
  return (
    <Box backgroundColor="darkColor">
      <Box px="15px" py="10px" display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text lineHeight="21px" fontWeight={600} fontSize="18px">
            {title}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          flex={1}
        >
          <Box onClick={onClose}>
            <Image height={25} width={25} src={remove} alt="logo" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  bg?: string;
};
export type ModalContentProps = Omit<ModalProps, "title" | "children">;

export function Modal({ show, bg, onClose, title, children }: ModalProps) {
  return (
    <ChakraModal
      motionPreset="slideInBottom"
      blockScrollOnMount={true}
      scrollBehavior="inside"
      isOpen={show}
      onClose={onClose}
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent borderRadius={"20px"}>
        <ModalHeader bg={bg}>
          <ModalHeaderContainer title={title} onClose={onClose} />
        </ModalHeader>
        <ModalBody bg={bg}>{children}</ModalBody>

        <ModalFooter bg={bg}>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}
