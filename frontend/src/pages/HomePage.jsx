import { Container, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const HomePage = () => {
    return (
        <Container>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    Current Products
                </Text>
                <Text
                    fontSize='xl' textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                    no products found {"  "}
                    <Link to="/create">
                        <Text as="span" color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                            Create a Product
                        </Text>
                    </Link>
                </Text>

            </VStack>
        </Container>
    )
}

export default HomePage