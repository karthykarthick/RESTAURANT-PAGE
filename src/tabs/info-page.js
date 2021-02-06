import menuImage from '../images/contact.jpg'

const infoPage = () => {
  const section = document.createElement('section')
  const mainTitle = document.createElement('h1')
  const container = document.createElement('div')
  const infoText = document.createElement('p')

  const menuImg = new Image()

  const addContent = () => {
    menuImg.src = menuImage
    mainTitle.textContent = 'Contact:'
    infoText.innerHTML = `Adress: Thuripakkam, Chennai-600097 
    Phone number: (91) 98765-4321;
     Email: weknowyourtaste@example.com
    Website: www.weknowyourtaste.com`
    container.classList.add('menuContainer')
    infoText.classList.add('info')
    mainTitle.classList.add('title')
  }

  const appendElements = () => {
    section.appendChild(menuImg)
    container.appendChild(mainTitle)
    container.appendChild(infoText)

    section.appendChild(container)
  }

  addContent()
  appendElements()

  return section
}

export default infoPage
