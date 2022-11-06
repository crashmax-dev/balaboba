import http2 from 'node:http2'
import { BalabobaStyles } from './constants'

export function balabobaNode(style: BalabobaStyles, query: string) {
  const client = http2.connect('https://yandex.ru')

  client
    .on('error', e => {
      console.error(`*ERROR*: ${e}`)
    })
    .on('goaway', (errorCode, lastStreamId) => {
      console.error(`*GOAWAY*: ${errorCode} : ${lastStreamId}`)
    })

  const request = client.request({
    ':path': '/lab/api/yalm/text3',
    ':method': 'POST'
  })

  request.write(JSON.stringify({
    filter: 1,
    intro: style,
    query
  }), 'utf8')

  request.on('response', (response) => {
    console.log(response)
    client.close()
  })

  request.end()
}
