export default defineEventHandler(async event => {
  const { OPENAI_API_KEY, OPENAI_API_MODEL, OPENAI_API_PROXY_URL } = useRuntimeConfig()

  const { prompt, aspect_ratio, style, type } = await readBody(event)

  try {
    const data = await $fetch(`${OPENAI_API_PROXY_URL}/v1/video/generations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: {
        prompt,
        model: OPENAI_API_MODEL,
        aspect_ratio,
        style,
        type,
      },
    })
    return {
      toJSON() {
        // @ts-ignore
        return data?.data
      },
    }
  } catch (error) {
    console.error(error.data)
    setResponseStatus(event, 500)
    return error.data
  }
})
