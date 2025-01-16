import React, {useState} from 'react'
import './assets/css/App.css'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Navigation from './components/Navigation'

const items = [
    {
        title: 'React',
        content: 'Front end javascript framework'
    },
    {
        title: 'Python',
        content: 'Simple language for fast development'
    },
    {
        title: 'Java',
        content: 'Powerful language'
    },
]

const options = [
    {
        label: 'Fire and Blood',
        value: 'red'
    },
    {
        label: 'Nature',
        value: 'green'
    },
    {
        label: 'Icy and Cold',
        value: 'blue'
    }
]
const App =  () => {

    const [selected, setSelected] = useState(options[0])

    return (
        <div className='ui container'>
            <div className='header'>
                <div className='ui center aligned icon header'>
                    <i className="circular star icon"></i>
                    <h1>Widgets App</h1>
                </div>
            </div>
            <Navigation />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/colors'>
                <Dropdown 
                    label='Color: '
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}/>
                <div className={`ui segment ${selected.value}`}>
                    <h5 className={`${selected.value}-text`}>You selected {selected.value}</h5>
                </div>
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App