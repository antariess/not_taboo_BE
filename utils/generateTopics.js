
// this api for relations in this format https://api.datamuse.com/words?rel_trg=cow&max=6 no key no limit required
// query this to see what it returns if so, good to go http://www.randomwordgenerator.com/ or https://codebeautify.org/random-word-generator#

const axios = require('axios')
const fs = require('fs')
const rawData = require('../seed/rawData')

// test different number of api calls to relevant word
const fetchTabooWords = (topic, finalCB) => {
    return axios.get(`https://api.datamuse.com/words?rel_trg=${topic}&max=6`)
    .then(({data}) => {
        const tabooWords = data.map((tabooWord) => tabooWord.word)
        finalCB(null, tabooWords)
    })
}

const formatTopics = (words) => {
    const topics = [];
    let count = 0;
    words.forEach((word, index) => {
        fetchTabooWords(word, (err, tabooWords) => {
            if(err) console.log(err)
            count += 1
            topics[index] = ({topicNum: index, title: word.toLowerCase(), tabooWords})
            if(words.length === count) {
                fs.writeFile('./dynamo/seed/data.json', JSON.stringify(topics, null, 2), 'utf8',(err) => {
                    if(err) console.log(err)
                    else console.log('SUCCESSSSS!!!!')
                })
            }
        })
    })
}

const veryRawWords = (formatTopics) => {
    fs.readFile('./dynamo/seed/veryRawData.txt', 'utf8', (err, rawWords) => {
        if(err) console.log(err)
        else {
            const notSoRawWords = rawWords.split(',')
            if(!notSoRawWords.includes('cat') || !notSoRawWords.includes('cats')) notSoRawWords.push('cat')
            formatTopics(notSoRawWords)
        }
    })
}

veryRawWords(formatTopics)
