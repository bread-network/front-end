import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'
import { useRouter } from 'next/router'

export const LoginForm = () => {
    const router = useRouter()

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                try {
                    localStorage.setItem('login', 'true');
                }
                catch {
                    console.log();
                }
                router.push('/');
            }}
        >
            <Stack spacing="6">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" type="email" autoComplete="email" required />
                </FormControl>
                <PasswordField />
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                    Sign in
               </Button>
            </Stack>
        </form>
    )
}