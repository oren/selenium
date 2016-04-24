var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://sanguinebio.com');
// driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.className('signup-link')).click();
driver.sleep(3000);
driver.wait(until.titleIs('Sanguine - Empowering Patients in Biomedical Research - About Us'), 3000);

// driver.wait(until.elementLocated(By.css('.check')));
driver.findElement(By.css('.check')).click();
driver.findElement(By.id('continue-button')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.getTitle().then(function(title){
  console.log("title", title);
  // if (title === "Google") {
  //   console.log("ok");
  //   process.exit(0);
  // }

  // console.log("fail");
  // process.exit(1);
});
driver.quit();
