import React from 'react'

//Importing components
import Navbar from './components/Navbar'
import Main from './components/Main'

//Icons
import World from './img/worldwide.png'
import Fuji from './img/Untitled.jpeg'
import Sydney from './img/sydney.jpeg'
import Geirangerfjord from './img/G.jpeg'

export default function App() {
    return (
        <div>
            <Navbar img={World} />
            <Main img={Fuji} country="Japan" heading="Mount Fuji" date="12 Jan 2021 - 24 Jan 2021" />
            <Main img={Sydney} country="Australia" heading="Sydney Opera House" date="27 May 2021 - 8 Jun 2021" />
            <Main img={Geirangerfjord} country="Norway" heading="Geirangerfjord" date="01 Oct 2021 - 10 Nov 2021" />
        </div>
    )
}
