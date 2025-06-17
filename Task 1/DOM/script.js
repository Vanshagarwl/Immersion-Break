const addBtn = document.getElementById('addBtn');
const container = document.getElementById('container');

let activeBar = null;

addBtn.addEventListener('click', () => {
  
  if (!activeBar) {
    const wrapper = document.createElement('div');
    wrapper.className = 'progress-bar-wrapper';

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.dataset.progress = '0'; 

    wrapper.appendChild(bar);
    container.appendChild(wrapper);

    activeBar = bar;
  }

 
  let current = parseInt(activeBar.dataset.progress);
  if (current < 100) {
    current += 10;
    activeBar.dataset.progress = current;
    activeBar.style.width = `${current}%`;
  }

  if (current >= 100) {
    activeBar = null;
  }
});