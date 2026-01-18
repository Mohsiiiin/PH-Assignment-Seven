# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 Ans. JSX (JavaScript XML) হলো JavaScript syntax extension.

 - What is the difference between State and Props?
 Ans.Props হলো parent component থেকে child component-এ তথ্য পাঠানোর উপায়

 - What is the useState hook, and how does it work?
 Ans.React-এ useState একটি Hook যা functional components-এ state ব্যবহার করে 

 - How can you share state between components in React?
 Ans.React-এ state সাধারণত component-specific। একটি component-এর state অন্য component থেকে সরাসরি পরিবর্তন করা যায় না.... Parent component state ধারণ করে এবং child component-এ props হিসেবে পাঠানো যায়

 - How is event handling done in React?
Ans. 1.CamelCase ব্যবহার হয়,
    2.Event handler একটি function হয়, direct string নয়,
    3.JSX-এর মধ্যে {} ব্যবহার করা হয় function call করার জন্য

---
