import { app, BrowserWindow, nativeTheme } from "electron";
import { initialize, enable } from "@electron/remote/main";
import path from "path";
import os from "os";

initialize();
// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

const publicFolder = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER);

try {
  if (platform === "win32" && nativeTheme.shouldUseDarkColors === true) {
    require("fs").unlinkSync(
      path.join(app.getPath("userData"), "DevTools Extensions")
    );
  }
} catch (_) {}

let mainWindow;

// Menu Bar
const { menubar } = require("menubar");

const mb = menubar({
  index: process.env.APP_URL + "/#/tray",
  browserWindow: {
    height: 500,
    width: 400,
    resizable: false,
  },
});

mb.on("ready", () => {
  // app code here
});
// Menu Bar

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, "icons/icon.png"), // tray icon
    width: 1000,
    height: 600,
    minHeight: 600,
    minWidth: 1000,
    autoHideMenuBar: true,
    useContentSize: true,
    titleBarStyle: "hidden",
    show: false,
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  splash = new BrowserWindow({
    width: 370,
    height: 370,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
  });

  splash.loadFile(path.resolve(publicFolder, "splash/splash.html"));
  splash.show();

  mainWindow.once("ready-to-show", () => {
    splash.destroy();
    mainWindow.show();
  });

  enable(mainWindow.webContents);

  mainWindow.loadURL(process.env.APP_URL);

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    // mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
