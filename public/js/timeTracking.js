document.getElementById('startTracking').addEventListener('click', () => {
    const task = document.getElementById('task').value;
    const startTime = new Date().toISOString();

    // Save the start time and task to the database
    fetch('/api/timetracking/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task, startTime }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Time tracking started!');
        } else {
            alert(data.message);
        }
    });
});

document.getElementById('endTracking').addEventListener('click', () => {
    const endTime = new Date().toISOString();

    // Save the end time to the database
    fetch('/api/timetracking/end', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ endTime }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Time tracking ended!');
        } else {
            alert(data.message);
        }
    });
});
