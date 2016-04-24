var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('localhost:8000');
// driver.get('https://sanguinebio.com');

// driver.findElement(By.className('signup-link')).click();

// the checkbox have display: none so we have to check it manualy
var contactMe = driver.findElement(By.name('contact-me'));
driver.executeScript("arguments[0].checked = true;", contactMe);
driver.sleep(2000);

// driver.findElement(By.id('test2')).click();
driver.findElement(By.id('continue-button')).click();

driver.getTitle().then(function(title){
  console.log("title", title);
});

driver.quit();



// driver.wait(until.elementLocated(By.name('contact-me')));
// driver.findElement(By.className('signup-link')).click();
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
