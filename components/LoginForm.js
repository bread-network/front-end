import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

export const LoginForm = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                // send to the other page
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