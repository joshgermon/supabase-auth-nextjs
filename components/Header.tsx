import { Flex, Heading, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = ({signOut}) => {
    return (
        <Flex as='nav' align='center' justify='space-between' px={8} py={6} bg='gray.50'>
            <Flex>
                <Heading size='md' color='teal.700'>
                    Photo App
                </Heading>
            </Flex>
            <Stack spacing={6} direction='row'>
                <Link href='/signup'>
                    <Button colorScheme='teal' variant='outline'>Create Account</Button>
                </Link>
                <Button colorScheme='teal' variant='solid' onClick={signOut}>Sign Out</Button>
            </Stack>
        </Flex>
    );
}

export default Header;