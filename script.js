document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme');
    const listStyleSelect = document.getElementById('list-style');
    const backgroundImageSelect = document.getElementById('background-image');
    const list = document.getElementById('list');
    
    // Sample items
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    
    function loadPreferences() {
        const savedTheme = localStorage.getItem('theme') || 'default';
        const savedListStyle = localStorage.getItem('list-style') || 'disc';
        const savedBackgroundImage = localStorage.getItem('background-image') || 'none';
        
        document.body.className = `${savedTheme}-theme ${savedBackgroundImage}`;
        themeSelect.value = savedTheme;
        listStyleSelect.value = savedListStyle;
        backgroundImageSelect.value = savedBackgroundImage;
        
        list.style.listStyleType = savedListStyle;
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
    
    function savePreferences() {
        localStorage.setItem('theme', themeSelect.value);
        localStorage.setItem('list-style', listStyleSelect.value);
        localStorage.setItem('background-image', backgroundImageSelect.value);
        
        document.body.className = `${themeSelect.value}-theme ${backgroundImageSelect.value}`;
        list.style.listStyleType = listStyleSelect.value;
    }
    
    themeSelect.addEventListener('change', savePreferences);
    listStyleSelect.addEventListener('change', savePreferences);
    backgroundImageSelect.addEventListener('change', savePreferences);
    
    loadPreferences();
});
