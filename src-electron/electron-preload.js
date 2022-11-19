import { contextBridge } from "electron";
import { BrowserWindow } from "@electron/remote";

contextBridge.exposeInMainWorld("windowManagement", {
  minimize() {
    BrowserWindow.getFocusedWindow().minimize();
  },

  toggleMaximize() {
    const win = BrowserWindow.getFocusedWindow();

    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  },

  close() {
    BrowserWindow.getFocusedWindow().close();
  },
});

contextBridge.exposeInMainWorld("utilsSettings", {
  reportIssues() {
    require("electron").shell.openExternal(
      "https://github.com/DylanAkp/luna-game-launcher/issues"
    );
  },
});

contextBridge.exposeInMainWorld("getWindowPosition", () => {
  return BrowserWindow.getFocusedWindow().getPosition();
});

/*contextBridge.exposeInMainWorld("popUpUtils", {
  addGame() {
    popup = new BrowserWindow({
      width: 500,
      height: 500,
      focusable: true,
      resizable: false,
      alwaysOnTop: true,
      frame: false,
      show: false,
      webPreferences: {
        contextIsolation: true,
        sandbox: false,
      },
    });

    popup.loadURL(process.env.APP_URL + "#/addgame");

    popup.once("ready-to-show", () => {
      popup.show();
    });

    popup.on("closed", () => {
      popup.destroy();
    });
  },
});*/
