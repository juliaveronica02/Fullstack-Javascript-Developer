* npm install @react-navigation/native.
* npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view.
 
## Error: Could not get BatchedBridge, make sure your bundle is packaged properly”.
* react-native run-android.
* react-native start --reset-cache.

## componentDidMount.
 useEffect(() => {
      axios
        .get(`${URL}`)
        .then((res) => {
          setMovie(res.data.results);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

## componentDidUpdate.
 useEffect(() => {
      axios
        .get(`${URL}`)
        .then((res) => {
          setMovie(res.data.results);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [URL]);

## File directories.
* app.js: first file in any react or react native app this is the entry point of the app development process.
* node_modules/ is a folder which contains all dependencies or packages that are used to develop and run this application.
* index.js is the entry point to trigger the app on a device or simulator.
* ios is the folder containing an Xcode project and the code required to bootstrap this app for ios devices.
* android is the folder containing android related code to bootstrap this app for android devices.
* packages.json where every dependency installed gets listed.

## run.
* npm start this will start the metro bundler to watch for any fole changes in a .js file and make sure this command is running in a separete terminal window or a tab whn building our ios or android.
* running on ios: react-native run-ios.
* running on android: npx react-native run-android.