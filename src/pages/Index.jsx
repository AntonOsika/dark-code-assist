import React from "react";
import { Box, Flex, VStack, HStack, Heading, Text, Input, IconButton, Image, useColorModeValue } from "@chakra-ui/react";
import { FaFile, FaSearch, FaGithub, FaCog, FaPlay } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const inputBg = useColorModeValue("white", "gray.800");

  return (
    <Flex w="100%" h="100vh">
      {/* Left sidebar */}
      <VStack bg={bg} p={4} spacing={8} alignItems="center" borderRightWidth={1} h="100%">
        <IconButton icon={<FaFile />} variant="ghost" />
        <IconButton icon={<FaSearch />} variant="ghost" />
        <IconButton icon={<FaGithub />} variant="ghost" />
        <IconButton icon={<FaCog />} variant="ghost" />
      </VStack>

      {/* Main panels */}
      <VStack flex={1} p={8} spacing={4} alignItems="stretch" w="100%">
        <HStack spacing={4}>
          <Box flex={1} borderWidth={1} p={4} h="100%">
            <Heading size="md">Shell</Heading>
          </Box>
          <Box flex={1} borderWidth={1} p={4} h="100%">
            <Heading size="md">Browser</Heading>
            <Text mt={4}>Hey Devin, I'd like for you to benchmark Llama 2 on three different provide[r]</Text>
            <Text color="gray.500" mt={1}>
              Devin is waiting to start up...
            </Text>
            <Input bg={inputBg} mt={4} placeholder="Type a message..." />
          </Box>
        </HStack>
        <HStack>
          <Text color="gray.500">00 | KJ | Live</Text>
          <IconButton ml="auto" colorScheme="green" icon={<FaPlay />} />
        </HStack>
      </VStack>

      {/* User avatar */}
      <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDQ1MjQ4MHww&ixlib=rb-4.0.3&q=80&w=1080" w={12} h={12} rounded="full" m={4} />
    </Flex>
  );
};

export default Index;
