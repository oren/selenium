// verify that signup fails if form is not complete

var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get("https://sanguinebio.com");
// driver.findElement(By.linkText("Sign Up")).click();
driver.findElement(By.className('signup-link')).click();
driver.findElement(By.css("label")).click();
driver.findElement(By.id("continue-button")).click();
driver.findElement(By.id("first-name")).clear();
driver.findElement(By.id("first-name")).sendKeys("test");
driver.findElement(By.id("last-name")).clear();
driver.findElement(By.id("last-name")).sendKeys("testing");
driver.findElement(By.id("signup-submit")).click();

driver.takeScreenshot().then(function(data) {
  writeScreenshot(data, 'out1.png');
});

var textPromise = driver.findElement(By.id("signup-submit")).getText();

textPromise.then(function(text) {
  console.log("text", text);
  if (text === "TRY AGAIN") {
    console.log("success");
    process.exit(0);
    return;
  } else {
    console.log("fail");
    process.exit(1);
  }
});

function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = '/tmp/';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
};
