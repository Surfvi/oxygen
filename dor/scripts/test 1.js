web.transaction('01 init')
web.init()
web.setTimeout(10 * 1000)
web.setWindowSize(500, 1000)

web.transaction('02 open url')
web.open('https://freecodecamp-projects.netlify.app/projects/surveyform/')
web.selectWindow('title=Pizza Survey Form')

web.assertText('id=title', 'Pizza Survey Form')

web.transaction('03 type details')
web.type('id=name', params.name)
web.type('//*[@id="email"]', params.email)
web.type('//input[@name="age"]', params.age)

log.info('Name: ' + params.name)

web.select('//select[@name="gender"]', 'index=1')
web.select('//select[@name="gender"]', 'value=male')
web.select('//select[@name="gender"]', 'label=Male')

web.click('( //li[@class="radio"] )[1]')
web.select('//select[@name="like"]', 'index=2')
web.click('//label[text() = "Use dairy-free cheese"]')
web.click('//label[contains(text(), "Remove")]')
web.type('id=suggestions', 'hey')

web.transaction('04 submit')
web.click('//button[@id="submit"]')

