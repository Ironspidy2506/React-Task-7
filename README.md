# Custom Hooks: Currency Converter Project

The Currency Converter project is a web application designed to convert currency values between different denominations. It utilizes JavaScript and React for dynamic user interaction and event handling, providing a seamless experience for users to input amounts and select currencies for conversion.

## Goals
- To create a user-friendly interface for currency conversion.
- To implement real-time updates as users input values and select currencies.
- To ensure accurate conversion calculations based on user input.

## Components
1. **Input Box**: 
   - Allows users to enter the amount they wish to convert.
   - Includes a dropdown for selecting the currency type.
   - Uses `onChange` events to update the state dynamically as users interact with the input fields.

2. **Conversion Logic**:
   - Handles the conversion calculations based on the selected currencies.
   - Updates the displayed converted amount in real-time.

3. **Event Handling**:
   - Implements JavaScript event handling to manage user interactions effectively.
   - Uses `onChange` to track changes in input fields and dropdown selections.
   - The `onClick` event is utilized for buttons to trigger conversion actions.

## Implementation Steps
1. **Set Up State Management**:
   - Initialize state variables for the amount, selected currencies, and converted amount using React's `useState` hook.

2. **Create Input Components**:
   - Develop input fields for amount entry and currency selection with appropriate labels and event handlers.

3. **Handle Conversion Logic**:
   - Implement a function to calculate the converted amount based on user input and selected currencies.

4. **Render Output**:
   - Display the converted amount dynamically as the user interacts with the input fields.

5. **Testing and Debugging**:
   - Test the application for accuracy in conversions and responsiveness to user input.
   - Debug any issues related to event handling and state updates.

## Key Concepts
- **JavaScript Event Handling**:
  - Understanding how to use events like `onChange` and `onClick` to manage user interactions effectively.
  - Using `event.target.value` to retrieve input values dynamically.

- **React Components**:
  - Building reusable components that manage their own state and handle events.
  - Utilizing hooks like `useState` for state management and `useEffect` for side effects.

This README provides a comprehensive overview of the Currency Converter project, detailing its goals, components, implementation steps, and key concepts in JavaScript and React.