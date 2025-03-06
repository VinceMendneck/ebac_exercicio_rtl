import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('2 comentários devem ser inseridos e corretamente renderizados', () => {
        render(<PostComment />);

        const input = screen.getByTestId('campo-comment');
        const button = screen.getByTestId('btn-comment');

        // Insere o primeiro comentário
        fireEvent.change(input, { target: { value: 'muito fera!' } });
        fireEvent.click(button);
        
        // Insere o segundo comentário
        fireEvent.change(input, { target: { value: 'que demais!' } });
        fireEvent.click(button);

        // Verifica ambos os comentários no DOM
        expect(screen.getByText('muito fera!')).toBeInTheDocument();
        expect(screen.getByText('que demais!')).toBeInTheDocument();
        expect(input).toHaveValue('');
    });
});