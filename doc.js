const hide = 'display: none'
const show = 'display: block'

window.onclick = clickOutside;

const button = document.createElement('div')
button.id = '_auroral-doc-button'
button.onclick = open
button.style = show

const panel = document.createElement('div')
panel.id = '_auroral-doc-panel'
panel.style = hide
panel.onclick = stopPropagation

const panelHeader = document.createElement('div')
panelHeader.id = '_auroral-doc-panel-header'

const panelClose = document.createElement('div')
panelClose.id = '_auroral-doc-panel-close'
panelClose.innerHTML = '&#x2715'
panelClose.onclick = close

const panelTitle = document.createElement('div')
panelTitle.id = '_auroral-doc-panel-title'
panelTitle.innerHTML = 'Auroral Documentation'

panelHeader.append(panelTitle)
panelHeader.append(panelClose)

const iconContrib = document.createElement('div')
iconContrib.id = '_auroral-doc-panel-contrib'
iconContrib.innerHTML =  '<a target="_blank" href="https://icons8.com/icon/xZb3XsJN26va/book-information">Book Information</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'

panel.append(iconContrib)
panel.append(panelHeader)

window.addEventListener(
  'DOMContentLoaded',
  function () {
    document.body.append(button)
    document.body.append(panel)
  },
  false
)

function open(event) {
  button.style = hide
  panel.style = show
  event.stopPropagation();
}

function close(event) {
    button.style = show
    panel.style = hide
    event.stopPropagation();
}

function clickOutside() {
    button.style = show
    panel.style = hide
}

function stopPropagation(event) {
    event.stopPropagation();
}

const style = `<style>
  #_auroral-doc-button {
    width: 64px;
    height: 64px;
    background-color: white;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1000;
    border-radius: 1000px 0px 0px 0px;
    -webkit-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
  }
  
  #_auroral-doc-button::after {
    content: '';
    position: absolute;
    bottom: 16;
    right: 12;
    background-image: url('./icon-48.png');
    width: 48px;
    height: 48px;
  }
  
  #_auroral-doc-button:hover {
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.75);
  }
  
  #_auroral-doc-panel {
    width: 312px;
    height: 400px;
    background-color: white;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1000;
    border-radius: 4px 0px 0px 0px;
    -webkit-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.75);
  }
  
  #_auroral-doc-panel a {
    text-decoration: none;
    color: #527d80
  }
  
  #_auroral-doc-panel-header {
    height: 48px;
    background-color: #464747;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #_auroral-doc-panel-title {
    color: white;
    padding-left: 12px;
  }
  
  #_auroral-doc-panel-title::before {
    content: url('./icon-24.png');
    width: 24px;
    height: 24px;
    vertical-align: -30%;
    padding:0 16px 0 0;
  }
  
  #_auroral-doc-panel-close {
    width: 16px;
    height: 16px;
    padding: 12px;
    cursor: pointer;
    text-align: center;
    border-radius: 1000px;
    color: white;
  }
  
  #_auroral-doc-panel-contrib {
    position: absolute;
    right: 4;
    bottom: 4;
  }
  </style>`

document.head.insertAdjacentHTML("beforeend", style)