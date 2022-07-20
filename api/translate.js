const translate = async (vnToEn, text) => {
    const sl = vnToEn ? 'vi' : 'en'
    const tl = vnToEn ? 'en' : 'vi'
    const URL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${text}`
    return fetch(URL)
        .then(res => res.json())
        .then(resJSON => resJSON[0][0][0])
}

export default translate