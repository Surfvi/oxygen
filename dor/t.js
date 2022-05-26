web.transaction('01 init')
web.init()
web.setTimeout(10 * 1000)
web.setWindowSize(500, 1000)

web.transaction('02 open url')
web.open('https://www.bezeqint.net/optic-fibers')
web.selectWindow('title=Pizza Survey Form')



