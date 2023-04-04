const {Builder, Browser, By, Key, until} = require("selenium-webdriver");

let driver;

beforeEach(async () => {
    driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
    await driver.quit();
});


test("test that add movie function works", async () => {
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.name("movieTitle")).sendKeys("Astro Boy", Key.RETURN);
    await driver.sleep(2000);
    await driver.sleep(2000);
});

test("test that removes a movie from the list", async () => {
  await driver.get('http://localhost:3000/');

  await driver.findElement(By.name("movieTitle")).sendKeys("Cinderella", Key.RETURN);
  await driver.sleep(2000);

  await driver.findElement(By.className("delete-btn")).click();
  await driver.sleep(2000);
});

test("test that a movie has been watched with selected checkbox", async () => {
  await driver.get('http://localhost:3000');
  await driver.sleep(2000)

  await driver.findElement(By.name("movieTitle")).sendKeys("Ratatoullie", Key.RETURN);
  await driver.sleep(2000);

  await driver.findElement(By.id("movie-0")).click();
  await driver.sleep(2000);
});