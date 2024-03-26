import { renderHook } from '@testing-library/react-hooks/dom'; // Importe renderHook do dom
import { useState, useEffect } from 'react';
import useScreenSize from '../src/hooks/useScreenSize';


describe('useScreenSize', () => {
    it('should return the width of the home screen and whether it is a large screen', () => {
        if (typeof document !== 'undefined') {
            const { result } = renderHook(() => useScreenSize(768), { wrapper: ({ children }) => <div>{children}</div> });
            expect(result.current.width).toBe(window.innerWidth);
            expect(result.current.isLargeScreen).toBe(window.innerWidth > 768);
        }
    });

    it('should update the screen width when the window is resized', () => {
        if (typeof document !== 'undefined') {
            const { result } = renderHook(() => useScreenSize(768), { wrapper: ({ children }) => <div>{children}</div> });
            expect(result.current.width).toBe(window.innerWidth);

            window.innerWidth = 800;
            window.dispatchEvent(new Event('resize'));

            expect(result.current.width).toBe(800);
            expect(result.current.isLargeScreen).toBe(true);
        }
    });
});