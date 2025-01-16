import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'


const options = [
    {
        label: 'French',
        value:'fr'
    },
    {
        label: 'Arabic',
        value:'ar'
    },
    {
        label: 'Hindi',
        value:'hi'
    },
]
const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div className='ui segment translate'>
            <div className='ui form'>
                <div className='field'>
                    <label>Text</label>
                    <input
                        value={text}
                        onChange={(e)=> setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown label='Language:' selected={language} onSelectedChange={setLanguage} options={options}/>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate