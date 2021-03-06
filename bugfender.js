'use strict';

import ReactNative from 'react-native';
const RNBugfender = ReactNative.NativeModules.RNBugfender;

/**
 * Activates the Bugfender for a specific app.
 * @param appToken The app token of the Bugfender application
 * @discussion This method needs to be called before any BFLog call, otherwise the `BFInvalidMethodCallException` exception will be thrown.
 * @throws `NSInvalidArgumentException` if Bugfender has already been initialized
    with a different app token.
 **/
function activateLogger(appToken) {
  RNBugfender.activateLogger(appToken);
}

/**
 * BFLog(...): Default log.
**/
function info(logText) {
  RNBugfender.info(logText);
}

/**
 * BFLogWarn(...): Warning log.
**/
function warning(logText) {
  RNBugfender.warning(logText);
}

/**
 * BFLogErr(...): Error log.
**/
function error(logText) {
  RNBugfender.error(logText);
}

/**
 * Sends an issue
 * @discussion Sending an issue forces the logs of the current session being sent
 * to the server, and marks the session so that it is highlighted in the web console.
 * @param title Short description of the issue.
 * @param text Full details of the issue. Markdown format is accepted.
 */
function sendIssueWithTitle(title, text) {
  RNBugfender.sendIssueWithTitle(title, text);
}

/**
 * Logs all actions performed and screen changes in the application, such as button touches, swipes and gestures.
 */
function enableUIEventLogging() {
  RNBugfender.enableUIEventLogging();
}

/**
 * Set the maximum space availalbe to store local logs. This value is represented in bytes. There's a limit of 50 MB.
 **/
function setMaximumLocalStorageSize(maxLocalStorageSize) {
  RNBugfender.maxLocalStorageSize(maxLocalStorageSize);
}

/**
 * Synchronizes all logs with the server once, regardless if this device is enabled or not.
 * @discussion This method is useful when an error condition is detected and the logs should be sent to
 * the server for analysis, regardless if the device is enabled in the Bugfender Console.
 *
 * Logs are synchronized only once. After that, the logs are again sent according to the enabled flag
 * in the Bugfender Console.
 *
 * This command can be called anytime, and will take effect the next time the device is online.
 */
function forceSendOnce() {
  RNBugfender.forceSendOnce();
}

/**
 * Synchronizes all logs with the server all the time, regardless if this device is enabled or not.
 * @discussion This method is useful when the logs should be sent to the server
 * regardless if the device is enabled in the Bugfender Console.
 *
 * Logs are synchronized continuously while forceEnabled is active.
 *
 * This command can be called anytime, and will take effect the next time the device is online.
 * @param enabled Whether logs should be sent regardless of the Bugfender Console settings.
 */
function setForceEnabled(enabled) {
  RNBugfender.setForceEnabled(enabled);
}

export default {
  activateLogger,
  info,
  warning,
  error,
  sendIssueWithTitle,
  enableUIEventLogging,
  setMaximumLocalStorageSize,
  forceSendOnce,
  setForceEnabled
}
