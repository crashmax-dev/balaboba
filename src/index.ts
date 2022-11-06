import phin from 'phin'
import { balabobaNode } from './node.js'
import { BalabobaStyles } from './constants.js'

const response = await phin({
  url: 'https://yandex.ru/lab/api/yalm/text3',
  method: 'POST',
  // parse: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({
    filter: 1,
    intro: 0,
    query: 'самые сочные бубы по ссылке'
  })
})

console.log(response.body.toString())

// balabobaNode(BalabobaStyles.Standart, 'самые сочные бубы по ссылке')
