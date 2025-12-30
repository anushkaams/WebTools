function formatJSON() {
    try {
        const input = document.getElementById('jsonInput').value;
        const parsed = JSON.parse(input);
        document.getElementById('jsonOutput').textContent = JSON.stringify(parsed, null, 2);
    } catch {
        document.getElementById('jsonOutput').textContent = 'Invalid JSON';
    }
}
