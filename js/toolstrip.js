const tooltips = document.querySelectorAll('.tooltips');

tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', showTooltip);
    tooltip.addEventListener('mouseout', hideTooltip);
});

function showTooltip(event) {
    event.target.lastElementChild.style.visibility = 'visible';
}

function hideTooltip(event) {
    event.target.lastElementChild.style.visibility = 'hidden';
}