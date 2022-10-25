import { render, screen } from '@testing-library/react';
import { SignInButton } from '.';
import { useSession } from 'next-auth/client';

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'John Doe',
        email: 'teste@teste.com',
      },
      expires: 'test-expires',
    }, false]);

    render(<SignInButton />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

})