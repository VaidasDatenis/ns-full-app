import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.feskelbimulenta',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  cli: {
    /**
      * Optional - Override the files or paths to clean when running the `ns clean` command
      */
    pathsToClean: ['node_modules', 'package-lock.json', 'yarn.lock'],
    additionalPathsToClean: ['dist'],
  },
} as NativeScriptConfig;