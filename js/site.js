'use strict';
document.documentElement.classList.add('js-enabled');
const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
function closeNavigation() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNavigation();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    menuButton.focus();
  }
});

const flavours = {
  fresh: { number: '01', name: 'Mermaize Mule', detail: 'A bright mix of vodka, ginger beer and lime, with a little mystery.', finish: 'Crisp. Citrusy. Full of character.' },
  golden: { number: '02', name: 'Gold Rush', detail: 'Bourbon meets honey and lemon, finished with gold flakes.', finish: 'Smooth. Golden. A little indulgent.' }
};
const flavourOptions = document.querySelector('.flavour-options');
flavourOptions.hidden = false;
flavourOptions.addEventListener('click', (event) => {
  const button = event.target.closest('[data-flavour]');
  if (!button) return;
  const drink = flavours[button.dataset.flavour];
  if (!drink) return;
  flavourOptions.querySelectorAll('button').forEach(option => {
    option.setAttribute('aria-pressed', String(option === button));
  });
  document.querySelector('#recommendation-name').textContent = drink.name;
  document.querySelector('#recommendation-detail').textContent = drink.detail;
  document.querySelector('#recommendation-finish').textContent = drink.finish;
  document.querySelector('.recommendation-number').textContent = drink.number;
});
