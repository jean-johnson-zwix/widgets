import React, {useState, useEffect} from 'react'
import './../assets/css/Search.css'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('wikipedia')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timerId = setTimeout ( () => {
            setDebouncedTerm(term);
        },1000)

        return () => {
            clearTimeout(timerId)
        }
    },[term])

    useEffect ( () => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            })

            setResults(data.query.search)
        }
        search()
    },[debouncedTerm])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form segment'>
                <div className='field'>
                    <label>Search</label>
                    <div className='ui input'>
                        <input
                            className='input'
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='ui segment celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search