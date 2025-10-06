import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главаня</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
      {/* <Suspense fallback={<div> Loading</div>}> */}
      {/* <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes> */}
      {/* <AppRouter /> */}
      {/* </Suspense> */}
    </div>
  );
};

export default App;
