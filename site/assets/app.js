document.querySelectorAll('pre').forEach((pre) => {
  const button = document.createElement('button');
  button.textContent = 'Kopírovat';
  button.style.position = 'absolute';
  button.style.top = '8px';
  button.style.right = '8px';
  button.style.border = '1px solid #334155';
  button.style.background = '#111827';
  button.style.color = '#cbd5e1';
  button.style.borderRadius = '6px';
  button.style.padding = '5px 8px';
  button.style.cursor = 'pointer';
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(pre.innerText.replace(/^Kopírovat\n?/, ''));
    const old = button.textContent;
    button.textContent = 'Zkopírováno';
    setTimeout(() => button.textContent = old, 1200);
  });
  pre.appendChild(button);
});
