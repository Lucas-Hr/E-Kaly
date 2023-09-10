package com.app;

// importation du package 'GestureHandlerPackage'
import com.swmansion.gesturehandler.RNGestureHandlerPackage;

// importation du package 'AppCompatActivity'
import androidx.appcompat.app.AppCompatActivity;

// importation du package 'ViewPagerPackage'
// import com.reactnativecommunity.viewpager.RNCViewPagerPackage;

// importation du package 'PagerViewPackage'
import com.reactnativepagerview.PagerViewPackage;

// importation du package 'VectorIcons'
import com.oblador.vectoricons.VectorIconsPackage;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());

          // Ajout manuel du package RNGestureHandler
          // packages.add(new RNGestureHandlerPackage());

          // Ajout manuel du package RNCViewPager
          // packages.add(new RNCViewPagerPackage());

          // Ajout manuel du package PagerView
          // packages.add(new PagerViewPackage());

          // Ajout manuel du package VectorIcons
          // packages.add(new VectorIconsPackage());
          
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    // Initialise GestureHandler
    // RNViewConfiguration.init();

    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
