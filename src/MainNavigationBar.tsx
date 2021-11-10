import * as React from 'react'
import NavigationBarItem from './NavigationBarItem'
import "./index.css"

interface Props {
}

const tree = {
    root: 'Report',
    data: [
        { name: 'Overview' },
        { name: 'Well-being' },
        { name: 'Stress' },
        { name: 'eNPS' }
    ]
}
const tree2 = {
    root: 'Analyze',
    data: [
        { name: 'Drivers' },
        { name: 'Journey' },
        { name: 'Churn' }
    ]
}
const tree3 = {
    root: 'Execute',
    data: [
        { name: 'Initiatives' },
        { name: 'Delegate' }
    ]
}

export const MainNavigationBar: React.FC<Props> = () => {
    const [clickedArray, setClickedArray] = React.useState([''])

    const updateClicked = (name: string) => {
        setClickedArray([name])
    }

    console.log(clickedArray)
    return (
        <div>
            <div className="mb-3">
                <NavigationBarItem clickedArray={clickedArray} updateClicked={updateClicked} index={0} data={tree.data} name={tree.root} />
            </div>
            <div className='mb-3'>
                <NavigationBarItem clickedArray={clickedArray} updateClicked={updateClicked} index={0} data={tree2.data} name={tree2.root} />
            </div>
            <div className='mb-3'>
            <NavigationBarItem clickedArray={clickedArray} updateClicked={updateClicked} index={0} data={tree3.data} name={tree3.root} />
            </div>
        </div>
    )
}

export default MainNavigationBar
