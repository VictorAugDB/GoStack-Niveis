import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import ForgotPassword from '../../pages/ForgotPassword';
import api from '../../services/api';

const mockedHistoryPush = jest.fn();

const mockedAddToast = jest.fn();

const apiMock = new MockAdapter(api);

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('ForgotPassword Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedAddToast.mockClear();
  });

  it('should be able to send email', async () => {
    apiMock.onPost('/password/forgot').reply(200);
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    const passwordField = getByPlaceholderText('E-mail');

    const buttonElement = getByText('Recuperar');

    fireEvent.change(passwordField, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'success',
        }),
      );
    });
  });

  it('should not be able to send email with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    const passwordField = getByPlaceholderText('E-mail');

    const buttonElement = getByText('Recuperar');

    fireEvent.change(passwordField, {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if forgot password fails', async () => {
    apiMock.onPost('/password/forgot').reply(400);
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);

    const passwordField = getByPlaceholderText('E-mail');

    const buttonElement = getByText('Recuperar');

    fireEvent.change(passwordField, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
