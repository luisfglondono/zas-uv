import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import CreateCommunityModel from "../Modal/CreateCommunity/CreateCommunityModel";

const PersonalHome: React.FC = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const bg = useColorModeValue("white", "#1A202C");
  const borderColor = useColorModeValue("gray.300", "#2D3748");

  return (
    <Flex
      direction="column"
      bg={bg}
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor={borderColor}
      position="sticky"
    >
      <CreateCommunityModel open={open} handleClose={() => setOpen(false)} />
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="60px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/admoncentral.jpg)"
        backgroundSize="cover"
        backgroundPosition={250}
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Text fontWeight={600}>Página principal</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Página principal, aquí podras ver las publicaciones principales.
          </Text>
          <Button height="30px">Crear publicación</Button>
          {/* <Button
            disabled={!user}
            variant="outline"
            height="30px"
            onClick={() => {
              setOpen(true);
            }}
          >
            Create Community
          </Button> */}
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
