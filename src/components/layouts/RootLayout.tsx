import "../../styles/App.scss";
import { Outlet } from "react-router-dom";
import RootHeader from "../headers/RootHeader";
import { DesignProvider } from "../../contexts/design-context";
import { ThemeProvider } from "@emotion/react";
import { headerTheme, bodyTheme } from "../../mui-styles/mui-themes";
import RootFooter from "../footers/RootFooter";
import { Provider } from "react-redux";
import store from '../../redux/store';

export default function RootLayout() {
  return (
    <>
        <DesignProvider>
          <Provider store={store}>
            <ThemeProvider theme={bodyTheme}>
              <div className="container">
                <ThemeProvider theme={headerTheme}>
                  <RootHeader />
                </ThemeProvider>
                <Outlet />
              </div>
              <RootFooter />
            </ThemeProvider>
          </Provider>
      </DesignProvider>
    </>
  );
}
