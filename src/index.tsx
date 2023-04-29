import {
  createBrowserRouter,
  createHashRouter,
  Link,
  RouterProvider,
  To,
} from "react-router-dom";
import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BlogLoader from "./components/BlogLoader";
import BlogPost from "./components/BlogPost";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Oh No, turn back!</h1>,
    children: [
      {
        loader: ({ params }) => BlogLoader(params),
        path: "/:id",
        element: <BlogPost />,
      },
    ]
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
