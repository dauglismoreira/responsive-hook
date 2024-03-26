# React Responsive Hook

The React Responsive Hook is a lightweight library providing a custom hook for real-time viewport width detection and breakpoint customization. This hook enables you to create responsive components in React applications, adjusting behavior based on user screen dimensions.

## Key Features:

- **Real-time Viewport Width Detection:** This hook utilizes the `useState` and `useEffect` hooks to dynamically detect the viewport width and update the state whenever the window is resized.

- **Custom Breakpoint Configuration:** You can specify a custom breakpoint as a parameter to the `useScreenSize` hook. This allows you to define when a screen is considered "large" or "small" and update the state accordingly.

### How it Works:

1. **isLargeScreen Function:**
   - The `isLargeScreen` function determines whether the current viewport width exceeds the specified breakpoint.
   - If the viewport width is greater than the breakpoint, `isLargeScreen` returns `true`, indicating that the screen is considered "large"; otherwise, it returns `false`.
   - Example:

     ```javascript
     // Usage example
     const screenSize = useScreenSize(768); // Define the breakpoint as 768 pixels
     console.log(screenSize.isLargeScreen); // Output: true or false
     ```

2. **Width Function:**
   - The `width` function provides the current viewport width in pixels.
   - Example:

     ```javascript
     // Usage example
     const screenSize = useScreenSize(768);
     console.log(screenSize.width); // Output: Current viewport width in pixels
     ```

With these functions, you can easily create responsive components that adapt their behavior based on the user's screen size, providing a seamless user experience across devices.
