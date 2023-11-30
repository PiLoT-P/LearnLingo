import { getDataTeachers } from "Redux/teachers/teachersOperation";
import TeachersFilter from "components/TeachersFilter/TeachersFilter";
import TeachersList from "components/TeachersList/TeachersList";
import { useDispatch} from "react-redux";


const Teachers = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDataTeachers())
    // }, [dispatch]);

    return (
        <section style={{ backgroundColor: "#e9e9e9", paddingBottom: "96px", paddingTop: "96px", minHeight: "100vh"}}>
            <button type="button" onClick={() => {
                dispatch(getDataTeachers())
            }} >
                getData
            </button>
            <TeachersFilter/>
            <TeachersList/>
        </section>
    );
}

export default Teachers;