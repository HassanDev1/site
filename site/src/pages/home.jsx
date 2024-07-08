import AvatarWithRipple from "../components/avatar";
import NavBar from "../components/navbar";
import {
  Progress,
  Container,
  Divider,
  Text,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW='100vw' bgColor='black' h='100vh' color='white'>
      <Progress colorScheme='orange' value={100} />
      <VStack p={10}>
        <HStack paddingBottom={4}>
          <NavBar />
        </HStack>
        <Divider />
        <HStack width='30%'>
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
            </Box>
          </VStack>
          <AvatarWithRipple />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Home;
