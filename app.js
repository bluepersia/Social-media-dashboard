document.querySelector ('.switch').addEventListener ('click', toggleTheme);

let darkMode = false;

function toggleTheme () 
{
    darkMode = !darkMode;

    const dashboard = document.querySelector ('.dashboard');
    if (darkMode)
        dashboard.classList.add ('dark');
    else
        dashboard.classList.remove ('dark');
    
    document.querySelector ('.switch_checkbox').checked = darkMode;
}