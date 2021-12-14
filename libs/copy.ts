export const copyText = async (text: string) => {
  try {
    navigator.clipboard.writeText(text)
    return {
      success: true,
      info: 'success'
    }
  } catch (error) {
    return {
      success: false,
      info: '复制失败'
    }
  }
}
