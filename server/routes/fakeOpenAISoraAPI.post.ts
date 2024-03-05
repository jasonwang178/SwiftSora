// @ts-ignore
import { Video } from '~/server/models/Video'
// @ts-ignore
import { cherryPickOneVideo } from '~/server/services/videoService'

export default defineEventHandler(async event => {
  /**
   * // TODO WARNING!!!
   * This is a fake OpenAI Sora API. Please deactivate the code on production once the official Sora API becomes available.
   * You need to substitute the code with an actual OpenAI API call and create the corresponding return value.
   */
  // const url = getRequestURL(event)
  const headers = getHeaders(event)
  // const clientIP = headers['x-forwarded-for']

  const bearer = headers['authorization']
  const apiKey = bearer?.replace('Bearer ', '')

  const body = await readBody(event)

  const model = body.model?.trim()
  const prompt = body.prompt?.trim()
  const aspect_ratio = body.aspect_ratio
  const style = body.style
  const type = body.type

  let errorResp = null

  if (!bearer) {
    errorResp = {
      error: {
        message:
          "You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accessing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.",
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 401)
    return errorResp
  }

  if (!apiKey || apiKey === 'Bearer') {
    errorResp = {
      error: {
        message:
          "You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accessing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.",
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 401)
    return errorResp
  }

  if (!model) {
    errorResp = {
      error: {
        message: 'Invalid model',
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 403)
    return errorResp
  }

  if (!type) {
    errorResp = {
      error: {
        message: "You didn't provide a Type.",
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 403)
    return errorResp
  }

  if (type === 'txt' && !prompt) {
    errorResp = {
      error: {
        message: "You didn't provide a Prompt.",
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 403)
    return errorResp
  }
  const { aspect_ratios } = useAppConfig()
  if (!aspect_ratio || !aspect_ratios.includes(aspect_ratio)) {
    errorResp = {
      error: {
        message: `${aspect_ratio} is not one of ['1:1', '16:9', '9:16'] - 'aspect_ratio'`,
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 403)
    return errorResp
  }
  const { video_styles } = useAppConfig()
  if (!style || !video_styles.hasOwnProperty(style)) {
    errorResp = {
      error: {
        message: `${style} is not valid - 'style'`,
        type: 'invalid_request_error',
        param: null,
        code: null,
      },
    }
    setResponseStatus(event, 403)
    return errorResp
  }

  // @ts-ignore
  const video: Video = type === 'txt' ? await cherryPickOneVideo(prompt) : await cherryPickOneVideo()

  const resp = {
    data: {
      toJSON() {
        return video
      },
    },
  }

  return resp
})
