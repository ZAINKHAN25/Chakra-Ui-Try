import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

function App() {

  let [todoList, setTodoList] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  const addTodoFoo = () => {
    if (inputValue.trim()) {
      if (isEditing) {
        const updatedTodos = todoList.map((item, index) => 
          index === currentIndex ? inputValue : item
        );
        setTodoList(updatedTodos);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setTodoList([...todoList, inputValue]);
      }
      setinputValue("");
    }
  };

  const editFoo = (index) => {
    setinputValue(todoList[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const deleteFoo = (index) => {
    const updatedTodos = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodos);
  };

  return (
    <Flex width={"100vw"} height={"100vh"} align={'center'} justify={"center"} bgImage={"url(https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151041.jpg)"} bgRepeat={"no-repeat"} bgPosition={"center"} bgSize={"cover"}>

      <Box w='800px' bgColor={"rgba(255, 255, 255, 80%)"} px={5} py={10} borderRadius={10} mx={3}>

        <Heading color={"#00246B"} fontSize={30}>To-Do List</Heading>

        <Box display={"flex"} alignItems='center' justifyContent="center" mt={5}>
          <Input
            noOfLines={1}
            placeholder='Write Your Todo here. (eg: Learn Book, Play Football etc.)'
            bgColor={"#fff"}
            size='lg'
            onChange={handleChange}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTodoFoo();
              }
            }}
          />
          <Button borderWidth={2} size={"md"} fontWeight={700} ms={3} colorScheme='blue' variant='outline' onClick={addTodoFoo}>
            {isEditing ? "Update Todo" : "Add Todo"}
          </Button>
        </Box>

        <Box mt={8}>
          {
            todoList.map((x, i) => {
              return (
                <Box key={i} my={2} color={"#00246B"} bgColor={"rgba(0,0,0, 20%)"} py={3} px={10} borderRadius={10} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                  <Text fontWeight={700} fontSize={18} noOfLines={1}>{x}</Text>
                  <Box>
                    <EditIcon mx={2} cursor="pointer" boxSize={4} onClick={() => editFoo(i)} />
                    <CloseIcon mx={2} cursor="pointer" boxSize={4} onClick={() => deleteFoo(i)} />
                  </Box>
                </Box>
              )
            })
          }
        </Box>

      </Box>

    </Flex>
  );
}

export default App;
