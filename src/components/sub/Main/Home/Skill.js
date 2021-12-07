import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setActiveSkill, selectedSkill} from '../../reducers/Skill'

function Skill (props) {
    let [isOpen, setIsOpen] = useState(false);
    let {skill} = props;
    const dispatch = useDispatch();
    let currentSkill = useSelector(selectedSkill);
    //additional check based on the local state and global to reset local one
    if (isOpen && currentSkill !== skill.id) {
        isOpen = !isOpen;
    }
    let data = isOpen && (currentSkill === skill.id) && <div className='skill-data-wrapper'>
        <div className="title">
            {skill.title}
        </div>
        <div className="description">
            {skill.description}
        </div>
    </div>;

    function stateManipulate() {
        isOpen = !isOpen;
        setIsOpen(isOpen);
        console.log(isOpen);
        if (isOpen) {
            dispatch(setActiveSkill(skill.id));
        } else {
            dispatch(setActiveSkill(null));
        }
    }

    return (
        <li className="skill" key={skill.id} id={skill.id}>
            <button onClick={() => stateManipulate()} type="button" className="close">Close</button>
            {data}
        </li>
    )
}
export default React.memo(Skill)