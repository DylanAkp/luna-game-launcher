import { app, nativeTheme } from "electron";
import { initialize, enable } from "@electron/remote/main";
import path from "path";
import os from "os";
import { BrowserWindow } from "electron-acrylic-window";
initialize();

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

/* Menu Bar : fix crash on rightclick and no view in build
const { menubar } = require("menubar");

const mb = menubar({
  index: process.env.APP_URL + "/#/tray",
  icon: path.resolve(publicFolder, "menubar.png"),
  preloadWindow: true,
  browserWindow: {
    height: 500,
    width: 400,
    resizable: false,
  },
});

mb.on("ready", () => {
  // app code here
});

Menu Bar */

function createWindow() {
  /**
   * Initial window options
   */
  splash = new BrowserWindow({
    width: 370,
    height: 370,
    transparent: true,
    frame: false,
    vibrancy: {
      theme: "#00000000",
      effect: "nil",
    },
    resizable: false,
    alwaysOnTop: true,
  });

  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, "icons/icon.png"),
    width: 1000,
    height: 600,
    minHeight: 600,
    minWidth: 1000,
    frame: false,
    vibrancy: {
      theme: "#202020CC",
      effect: "acrylic",
    },
    transparent: true,
    show: false,
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
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
    // mainWindow.webContents.openDevTools();
  } else {
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
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
