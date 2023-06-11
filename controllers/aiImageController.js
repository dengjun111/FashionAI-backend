const axios = require('axios');
const Image = require('../models/Image');



async function imagineImage(prompt, base64Image) {
    const request = await axios.post(process.env.AI_CONTROLLER_URL + '/submit/imagine', {
        prompt,
        'base64': base64Image
    });
}

async function changeImage(taskId, index, action) {
    const request = await axios.post(process.env.AI_CONTROLLER_URL + '/submit/change', {
        action,
        index,
        taskId
    })
}

async function fetchTask(taskId) {
    const request = await axios.get(process.env.AI_CONTROLLER_URL + `/task/${taskId}/fetch`)
}

/*
{
	"action": "",
	"description": "",
	"failReason": "",
	"finishTime": 0,
	"id": "",
	"imageUrl": "",
	"progress": "",
	"prompt": "",
	"promptEn": "",
	"startTime": 0,
	"state": "",
	"status": "",
	"submitTime": 0
}
 */