import { Switch } from "./styledComponents/Switch";
import Sun from "./components/Sun";
import Moon from "./components/Moon";
import { ThemeInterface } from "./interface/ThemeInterface";

const ThemeToggler: React.FC<ThemeInterface> = ({ theme, toggle }) => {
  return (
    <Switch onClick={toggle}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Switch>
  );
};

export default ThemeToggler;