import { getDataTeachers } from "Redux/teachers/teachersOperation";
import TeachersList from "components/TeachersList/TeachersList";
import { useDispatch} from "react-redux";


const Teachers = () => {
    const dispatch = useDispatch()
    return (
        <section style={{ backgroundColor: "#e9e9e9" }}>
            <button type="button" onClick={() => {
                console.log('btn click')
                dispatch(getDataTeachers())
            }} >
                getData
            </button>
            <h3>balik</h3>
            <TeachersList/>
        </section>
    );
}

export default Teachers;