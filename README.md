# My First React App - Lab 1

Welcome to your first React lab! This project is designed to help you understand the fundamental concepts of React by building and correcting various components.

## 🚀 Overview

This application demonstrates the core building blocks of React, including:
- **Components**: How to structure and import reusable UI pieces.
- **JSX**: Writing HTML-like code within JavaScript and fixing common syntax errors.
- **Props**: Passing data from parent to child components.
- **State**: making components interactive and dynamic.
- **Lists & Keys**: Rendering multiple items using `.map()`.
- **Conditional Rendering**: Displaying content based on specific conditions.

## 🛠️ Project Structure

The project follows a standard Vite + React structure:
- `src/main.jsx`: The entry point that renders the `App` component.
- `src/App.jsx`: The main container where all lab components are assembled.
- `src/components/`: A directory containing all the individual components you'll work with:
    - `Greeting.jsx`: A simple functional component.
    - `JSXErrors.jsx`: Components used to practice fixing JSX syntax.
    - `StatusBadge.jsx`: Demonstrates conditional rendering.
    - `UserCard.jsx`: Shows how to pass simple string props.
    - `Prpduct.jsx`: Shows how to pass multiple props (strings, numbers, booleans).
    - `Card.jsx`: Demonstrates the use of `props.children`.
    - `BlogPost.jsx`: Combines multiple props for a more complex UI.
    - `MovieList.jsx`: Shows how to render a list of items from an array.
    - `ToggleButton.jsx`: Introduction to React `useState` hook.

## ⚙️ How to Run

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Open in your browser**:
    Follow the URL provided in the terminal (usually `http://localhost:5173`).

## 📝 Lab Tasks

1.  **Fixing JSX**: Open `src/components/JSXErrors.jsx` and resolve the syntax errors.
2.  **Passing Props**: Customize the data passed to `UserCard` and `Product` in `App.jsx`.
3.  **Conditional Styles**: Modify `StatusBadge.jsx` to change colors based on the status.
4.  **Composition**: Use the `Card` component to wrap different types of content.
5.  **State Management**: Implement the toggle logic in `ToggleButton.jsx`.

Happy coding! 💻
