import React, {useState, useEffect} from 'react'
import axios from 'axios'
// 
const Convert = ({language, text}) => {

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {

        const doTranslation = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params:{
                        q: debouncedText,
                        target: language.value,
                        key: '<KEY>'
                    }
                }
            )
            setTranslated(data.data.translations[0].translatedText)
        }
        
        doTranslation()
    }, [language, debouncedText])
    return (
        <div className='ui segment'>
            <h3 className='ui header'>Converted Text</h3>
            <p>{translated}</p>
        </div>
    )
}

export default Convert
