$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Gokulaa/eclipse-workspace/MakeMyTripSeleniumDemo-master/src/test/resources/com/makemytrip/features/LoginMakemytripPersonalAccount.feature");
formatter.feature({
  "line": 1,
  "name": "This is the login feature for MakemyTrip",
  "description": "",
  "id": "this-is-the-login-feature-for-makemytrip",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "This is login scenario",
  "description": "",
  "id": "this-is-the-login-feature-for-makemytrip;this-is-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user landed on makemytrip page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "the user clicks on the Login or Create Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user should see login popup window",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid Email or Mobile Number",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter the password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user landed on makemytriphomepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.user_landed_on_makemytrip_page()"
});
formatter.result({
  "duration": 14860315573,
  "status": "passed"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.the_user_clicks_on_the_Login_or_Create_Account_tab()"
});
formatter.result({
  "duration": 10750864177,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan\u003e...\u003c/span\u003e is not clickable at point (673, 298). Other element would receive the click: \u003cdiv data-cy\u003d\"outsideModal\" class\u003d\"loginModal displayBlock modalLogin dynHeight personal \"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T16:15:40.131Z\u0027\nSystem info: host: \u0027GOKULA\u0027, ip: \u0027192.168.225.48\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\Gokulaa\\AppData\\Local\\Temp\\scoped_dir3608_1849270919}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50714}, acceptInsecureCerts\u003dfalse, browserVersion\u003d84.0.4147.89, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: e18407f6b114afbb62f21bf5456581c8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.makemytrip.qa.testbase.TestActions.clickElement(TestActions.java:30)\r\n\tat com.makemytrip.qa.pages.LoginPage.LoginWithEmail(LoginPage.java:74)\r\n\tat com.makemytrip.qa.pages.LoginPage.LoginType(LoginPage.java:59)\r\n\tat com.makemytrip.qa.pages.LoginPage.Loginpersonal(LoginPage.java:49)\r\n\tat com.makemytrip.stepDefinitions.LoginMakemytripPersonalAccount.the_user_clicks_on_the_Login_or_Create_Account_tab(LoginMakemytripPersonalAccount.java:55)\r\n\tat ✽.And the user clicks on the Login or Create Account tab(C:/Users/Gokulaa/eclipse-workspace/MakeMyTripSeleniumDemo-master/src/test/resources/com/makemytrip/features/LoginMakemytripPersonalAccount.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.user_should_see_login_popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.user_enters_the_valid_Email_or_Mobile_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.user_enter_the_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginMakemytripPersonalAccount.user_landed_on_makemytriphomepage()"
});
formatter.result({
  "status": "skipped"
});
});