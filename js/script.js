document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const tiktokIcon = document.getElementById('tiktokIcon');
const githubIcon = document.getElementById('githubIcon');
const THEME_KEY = 'fabra-theme';

function setIcon(showSun){
  themeIcon.classList.remove('btn-theme-anim');
  themeIcon.innerHTML = showSun
    ? '<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M19.78 4.22l-1.42 1.42M4.22 19.78l1.42-1.42" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>';
  void themeIcon.offsetWidth;
  themeIcon.classList.add('btn-theme-anim');
}

function setSocialIconsTheme(isLight){
  if(tiktokIcon) {
    tiktokIcon.src = isLight 
      ? './img/tik-tok-Claro.png' 
      : './img/tik-tok-Escuro.png';
  }
  if(githubIcon) {
    githubIcon.src = isLight
      ? './img/github-Escuro.png'
      : './img/github-claro.png';
  }
}

const saved = localStorage.getItem(THEME_KEY);
const isLightAtStart = saved === 'light';
if (isLightAtStart) {
  document.body.classList.add('light');
  themeLabel.textContent = 'Escuro';
  setIcon(false);
  setSocialIconsTheme(true);
} else {
  themeLabel.textContent = 'Claro';
  setIcon(true);
  setSocialIconsTheme(false);
}

toggle.addEventListener('click', () => {
  const isLightNow = document.body.classList.toggle('light');
  themeLabel.textContent = isLightNow ? 'Escuro' : 'Claro';
  localStorage.setItem(THEME_KEY, isLightNow ? 'light' : 'dark');
  setIcon(!isLightNow);
  setSocialIconsTheme(isLightNow);
});
