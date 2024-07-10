import AvatarWithRipple from "../components/avatar";
import NavBar from "../components/navbar";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbMailPin } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  Progress,
  Container,
  Divider,
  Text,
  Stack,
  VStack,
  HStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import About from "./about";

const Home = () => {
  return (
    <Container maxW='100vw' bgColor='black' color='white'>
      <Progress colorScheme='orange' value={100} />
      <VStack width='full'>
        <HStack paddingBottom={4}>
          <NavBar />
        </HStack>
        <Divider />
        <Stack
          width={{ base: "100%", md: "50%", lg: "30%" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <VStack>
            <Box display='flex' gap={8}>
              <Text fontWeight='bold' fontSize={50} color='orange'>
                Hassan
              </Text>
              <Text fontSize={50}>Ali</Text>
            </Box>
            <Box>
              <Text color='orange' fontSize='large' mb={6}>
                Softaware Developer
              </Text>
              <Text pb={1} fontSize='large'>
                BS in Computer Science
              </Text>
              <Text>University of Texas at San Antonio</Text>
              <HStack pt={4}>
                <TbMailPin fontSize={40} />
                <PiGithubLogoFill fontSize={40} />
                <AiOutlineLinkedin fontSize={40} />
              </HStack>
            </Box>
          </VStack>
          <Flex
            justifyContent='center'
            alignItems='center'
            h='216px'
            w='full'
            overflow='hidden'
          >
            <AvatarWithRipple />
          </Flex>
        </Stack>

        <About />
      </VStack>
    </Container>
  );
};

export default Home;
