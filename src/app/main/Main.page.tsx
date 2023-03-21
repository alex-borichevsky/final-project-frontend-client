import AppBar from "./AppBar.component";
import AppFooter from "./AppFooter.component";
import Categories from "./Categories.component";
import Intro from "./Intro.component";

function MainPage() {
  return (
    <>
      <AppBar/>
      <Intro />
      <Categories />
      <AppFooter />
    </>
  );
}

export default MainPage;
