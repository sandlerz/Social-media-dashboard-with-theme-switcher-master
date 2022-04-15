const toggle = document.getElementById('darkmode')
const body = document.body

const handleDarkMode = () => {
  body.classList.toggle('dark')
}

toggle.onclick = handleDarkMode