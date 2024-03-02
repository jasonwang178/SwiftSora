export default defineEventHandler(async event => {
  const { OPENAI_API_PROXY_URL, OPENAI_API_BASE_URL } = useRuntimeConfig()
  const headers = getHeaders(event)
  let url = getRequestURL(event)
  const req = toWebRequest(event)
  const method = req.method
  try {
    const headers_clone = JSON.parse(JSON.stringify(headers))
    Object.keys(headers_clone).forEach(key => {
      if (key.toLowerCase().startsWith('x-')) {
        delete headers_clone[key]
      }
    })
    if (headers_clone.hasOwnProperty('content-length')) {
      delete headers_clone['content-length']
    }
    headers_clone.host = new URL(OPENAI_API_BASE_URL).host

    let targetURL: string = ''
    // TODO: Please comment and deactive the following lines of code (between BEGIN and END) when the official Sora API becomes accessible.
    // -------- BEGIN
    if (url.pathname === '/v1/video/generations') {
      targetURL = `${OPENAI_API_PROXY_URL}/fakeOpenAISoraAPI`
    } else {
      targetURL = `${OPENAI_API_BASE_URL}${url.pathname}`
    }
    // -------- END


    // TODO: Please uncomment the following line of code when the official Sora API becomes accessible.
    // targetURL = `${OPENAI_API_BASE_URL}${url.pathname}`

    const opt = {
      method,
      headers: headers_clone,
    }

    let body = undefined
    let query = undefined
    if (['POST', 'PUT'].includes(method)) {
      body = await readBody(event)
      // @ts-ignore
      if (body) opt.body = body
    }
    query = getQuery(event)
    // @ts-ignore
    if (query) opt.query = query

    // @ts-ignore
    return await $fetch(targetURL, opt)
  } catch (error) {
    console.error(error)
    setResponseStatus(event, error.statusCode)
    return error.data
  }
})
