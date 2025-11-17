WebdriverIO Automated Login Tests (SauceDemo)

This project contains end-to-end (E2E) UI tests for the login functions of https://www.saucedemo.com/ wep page,
using WebdriverIO(v9), Mocha, and the WebDriver BiDi protocol running on both Chrome and Microsoft Edge.

The purpose of the task - to impement testing for login, to check automate login.
All tests are executed in two browsers:
Google Chrome
Microsoft Edge
WebdriverIO automatically manages and installs browser drivers for both.

Folder Structure:
project-root/
│
├── pageobjects/
│ ├── LoginPage.js
│ └── DashboardPage.js
│
├── test/
│ └── specs/
│ └── login.e2e.js
│
├── wdio.conf.js
└── README.md


Test Scenarios
UC-1: Empty Credentials
Verify login behaviour when both username and password fields are empty.
Expected result:
Epic sadface: Username is required

UC-2: Password Missing
Enter a username but leave the password field empty.
Expected result:
Epic sadface: Password is required

UC-3: Successful Login
Verify successful login for the following usernames:
standard_user
problem_user
performance_glitch_user
error_user
visual_user
Expected result:
Users successfully logged in.
Dashboard is displayed and shows title “Swag Labs”.

UC-3.2: Locked-out User
Verify login for locked_out_user.
Expected result:
Epic sadface: Sorry, this user has been locked out.

How to Run Tests
Install project dependencies:
npm install
Run the automated tests:
npx wdio run wdio.conf.js(npm run wdio)
WebdriverIO will launch both Chrome and Edge, run all scenarios, and show pass/fail results.

Technologies Used
WebdriverIO v9
Mocha
Node.js
Expect-WebdriverIO
WebDriver BiDi
Page Object Model (POM)
ChromeDriver & EdgeDriver (auto-managed)