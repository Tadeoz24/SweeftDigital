import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Cookies from "js-cookie";

// reset css and global styles
const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li, form, label,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  
`;

export interface breadcrumbsProps {
  name: string;
  to: string;
}

// import dashboard 
import { Users, UserCard  } from "./dashboard";

const PAGE_NUMBER = 1;

function App() {
  Cookies.set("PLACEIMGSESS]\
  ", "cookie-value", {
    sameSite: "none",
    secure: true,
  });

  //
  const [page, setPage] = useState(PAGE_NUMBER);
  const [breadcrumbs, setBreadcrumbs] = useState<breadcrumbsProps[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Users
              page={page}
              setPage={setPage}
              breadcrumbs={breadcrumbs}
              setBreadcrumbs={setBreadcrumbs}
            />
          }
        ></Route>
        <Route
          path="/user/:userId"
          element={
            <UserCard
              page={page}
              setPage={setPage}
              setBreadcrumbs={setBreadcrumbs}
              breadcrumbs={breadcrumbs}
            />
          }
        ></Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
