import "../../styles/App.scss";
import { Outlet } from "react-router-dom";
import RootHeader from "../headers/RootHeader";
import { NavigationProvider } from "../../contexts/navigation-context";
import { DesignProvider } from "../../contexts/design-context";
import { OpinionsProvider } from "../../contexts/opinions-context";
import { ThemeProvider } from "@emotion/react";
import { headerTheme, bodyTheme } from "../../mui-styles/mui-themes";
import RootFooter from "../footers/RootFooter";

export default function RootLayout() {
  return (
    <>
      <NavigationProvider>
        <DesignProvider>
          <OpinionsProvider>
            <ThemeProvider theme={bodyTheme}>
              <div className="container">
                <ThemeProvider theme={headerTheme}>
                  <RootHeader />
                </ThemeProvider>
                <Outlet />
              </div>
              <RootFooter />
            </ThemeProvider>
          </OpinionsProvider>
        </DesignProvider>
      </NavigationProvider>
    </>
  );
}
