const schedule = require('node-schedule');

const j = schedule.scheduleJob('* * * * *', () => {
    console.log('Executing every minute');
});

