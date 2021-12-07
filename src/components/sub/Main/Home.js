import React, {useEffect, useState} from 'react';
import Skill from './Home/Skill';
import {useSelector} from 'react-redux'
import {selectedSkill} from '../reducers/Skill'

let Home = React.memo(function HomeFn (props) {
    const selectedSkillVal = useSelector(selectedSkill);
    let [skills, setSkills] = useState([]);

    useEffect(() => {
        if (!skills.length) {
            getDataFromApi();
        }
    });
    //set local state from global one
    //setActiveSkill(skill);

    /**
     * Provide skills
     * @returns {*[]}
     */
    function getSkills() {
        if (skills.length) {
            return skills.map(skill => <Skill key={skill.id} skill={skill}/>);
        } else {
            return skills;
        }
    }

    function getDataFromApi() {
        fetch('http://localhost:8080/api/skill/list').then(res => res.json()).then(
            (response) => {
                setSkills(response);
            }
        );
    }

    return (
        <div className="home-wrapper"><span>{selectedSkillVal}</span>
            <div className="avatar">Here will be placed avatar</div>
            <div className="skills">
                <ul className="list">
                    {getSkills()}
                </ul>
            </div>
        </div>
    )
});
export default Home;