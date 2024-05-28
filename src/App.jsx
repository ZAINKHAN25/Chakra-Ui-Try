import { Box, Button, Heading, Spinner, Text } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <Box maxW='32rem'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='lg'
      />
      <Heading mb={4}>Modern online and offline payments for Africa</Heading>
      <Text fontSize='xl'>
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
      </Text>
      <Button size='lg' colorScheme='green' mt='24px'>
        Create a free account
      </Button>
    </Box>
  );
}

export default App;
