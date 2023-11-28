import { getDataTeachers } from "Redux/teachers/teachersOperation";
import { selectorTeachers } from "Redux/teachers/teachersSelectors";
import { useDispatch, useSelector } from "react-redux";


const Teachers = () => {
    const dispatch = useDispatch()
    const teachersData = useSelector(selectorTeachers)

    return (
        <>
            <button type="button" onClick={() => {
                console.log('btn click')
                dispatch(getDataTeachers())
            }} >
                getData
            </button>
            <ul>
                {teachersData.map(({avatar_url, conditions, experience, languages, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname}, index) => (
                    <li key={`${index}_${surname}`}>
                        <img width='96px' height='96px' src={avatar_url} alt="avatar teacher" />
                        <div>
                            <div>
                                <span>Lanfuafes</span>
                                <ul>
                                    <li className="item">
                                        <span>Lessons online</span>
                                    </li>
                                    <li className="item">
                                        <span>Lessons done:  {lessons_done}</span>
                                    </li>
                                    <li className="item">
                                        <span>Rating: {rating}</span>
                                    </li>
                                    <li className="item">
                                        <span>Price / 1 hour: {price_per_hour}</span>
                                    </li>
                                </ul>
                            </div>
                            <p>{`${name} ${surname}`}</p>
                            <div>
                                <p>Speaks: <span>{languages.map((el) => ` `+el)}</span></p>
                                <p>Lesson Info: <span>{lesson_info}</span></p>
                                <p>Conditions: <span>{conditions}</span></p>
                            </div>
                            <button type="button">Read more</button>
                            <ul>
                                {levels.map((el, id) => (
                                    <li>
                                        <span>{el}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                  </li>  
                ))}
            </ul>
        </>
    );
}

export default Teachers;