import React, { useEffect, useState, useRef } from 'react'
import reportIcon from './Assets/reportIcon.svg'
import RightArrow from './Assets/RightArrow.svg'
import "./index.css"
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

interface ITreeViewProps {
    index: number
    name: string
    data: any
    updateClicked: any
    clickedArray: string[]
}

const NavigationBarItem: React.FC<ITreeViewProps> = ({ index, name, data, updateClicked, clickedArray }) => {
    const [isToggle, setIsToggled] = useState<boolean>(false)
    const [itemHovered, setItemHovered] = useState(false)
    const [currentPath, setCurrentPath] = React.useState('')


    const toggleReport = (): void => {
        setIsToggled(!isToggle);
    }

    const getClass = () => {
        if (data) {
            return 'label_dropdwn'
        } else if (clickedArray[0] === name || currentPath === name) {
            return 'clickedClass'
        } else return 'spanClass'
    }

    const getIcon = () => {
        if (name === 'Report') return reportIcon
        if (name === 'Analyze') return reportIcon
        if (name === 'Execute') return reportIcon
    }

    useEffect(() => {
        const path = (window.location.pathname).replace('/', '')
        setCurrentPath(path)

        if (index === 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === currentPath) setIsToggled(true)
            }
        }
    })
    
    

    return (
        <>
            <ul className={index === 0 ? 'tree' : ''}>
                <li className={index === 0 ? 'tree_li' : ''}>
                    {data && <input type='checkbox' checked={isToggle} 
                    onChange={toggleReport} 
                    id={name} />}
                    <label className={data ? 'tree_label' : 'child_label tree_label'} htmlFor={name}>
                        <span onClick={() => { updateClicked(name) }} onMouseLeave={() => setItemHovered(false)} onMouseEnter={() => setItemHovered(true)} className={getClass()}>
                            {index === 0 && <img className='report-icon' src={getIcon()} alt='root' />}
                            {name}
                            {((itemHovered && index !== 0) || (clickedArray[0] === name && index !== 0) || (currentPath === name && index !== 0)) && (
                                <img src={RightArrow} alt='root' height='15px' />
                            )}
                        </span>
                        
                    </label>
                    <div className={`my-navbar-collapse ${isToggle ? 'show' : ''}`}>
                        {isToggle && (
                            
                            data && data.map((item: any, key: number) => (       
                                           
                                <NavigationBarItem clickedArray={clickedArray} updateClicked={updateClicked} key={`node_${key}`} index={key + 1} name={item.name} data={item?.data} />
                                
                            ))
                            
                        )}    
                    </div>        
                </li>
            </ul>
        </>
    )
}

export default NavigationBarItem
