import { Box, Flex, Heading, Text, Button, Image, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaCalendarAlt, FaEnvelope, FaImage, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h1" size="2xl" mb={2}>Band Name</Heading>
        <Text fontSize="xl">Catch us live on tour!</Text>
      </Flex>

      <VStack spacing={8} mb={10}>
        <Box w="full" p={5} boxShadow="md" borderRadius="md">
          <Flex align="center" mb={3}>
            <FaCalendarAlt />
            <Heading as="h3" size="lg" ml={2}>Tour Dates</Heading>
          </Flex>
          <Text>Placeholder for tour dates...</Text>
        </Box>

        <Box w="full" p={5} boxShadow="md" borderRadius="md">
          <Flex align="center" mb={3}>
            <FaInfoCircle />
            <Heading as="h3" size="lg" ml={2}>Biography</Heading>
          </Flex>
          <Text>Placeholder for band biography...</Text>
        </Box>

        <Box w="full" p={5} boxShadow="md" borderRadius="md">
          <Flex align="center" mb={3}>
            <FaImage />
            <Heading as="h3" size="lg" ml={2}>Photo Gallery</Heading>
          </Flex>
          <Text>Placeholder for photo gallery...</Text>
        </Box>
      </VStack>

      <Box w="full" p={5} boxShadow="md" borderRadius="md">
        <Flex align="center" mb={3}>
          <FaEnvelope />
          <Heading as="h3" size="lg" ml={2}>Contact Us</Heading>
        </Flex>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;