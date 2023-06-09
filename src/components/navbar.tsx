import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import Logo from '../../public/img/queen.png'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'

const Links = [
    {
        title: 'History',
        path: '/history',
    },
    {
        title: 'Members',
        path: '/members',
    },
    {
        title: 'Discography',
        path: '/discography',
    },
];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'black',
    }}
    color={'white'}
    href={href}>
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'black'} px={6} pt={2} position={'absolute'} width={'100%'} zIndex={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <NavLink href={'/'} >
                    <Image width={'50px'} src={Logo.src} />
                </NavLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} href={link.path}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title} href={link.path}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )}