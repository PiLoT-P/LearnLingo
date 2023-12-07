import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersListTwo";


const Teachers = () => {

    return (
        <section style={{ backgroundColor: "#e9e9e9", paddingBottom: "96px", paddingTop: "96px", minHeight: "100vh"}}>
            <TeachersFilter />
            <TeachersList />
        </section>
    );
}

export default Teachers;