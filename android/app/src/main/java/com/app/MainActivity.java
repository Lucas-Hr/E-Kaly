package com.app;

// importation de package 'GestureHandlerEnabledRootView'
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
// importation de package 'ReactRootView'
import com.facebook.react.ReactRootView;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "App";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        false
        );
        // {
        // // Ajout de cette ligne
        //   @Override
        //   protected ReactRootView createRootView() {
        //       return new RNGestureHandlerEnabledRootView(MainActivity.this); // Ajout de cette ligne
        //   };
        // };
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        // DefaultNewArchitectureEntryPoint.getFabricEnabled()
  }
}
