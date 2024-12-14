
import Card from "./fonts/component/card";

type Tstudents = {
  id: number;
  name: string;
  timming: string;
  day: string;
}
const students: Tstudents[] = [
  { id: 1, name: 'Ali', timming: '09-12', day: 'monday' },
  { id: 2, name: 'Anas', timming: '02-05', day: 'tuesday' },
  { id: 3, name: 'saad', timming: '07-10', day: 'sunday' },
  { id: 4, name: 'Ahmed', timming: '02-05', day: 'friday' },
];
export default function Home() {
  return (
    <div className="p-[2em]">

      {/* <Card id={students[0].id} name={students[0].name} day={students[0].day}  timming={students[0].timming} />
      <Card id={students[1].id} name={students[1].name} day={students[1].day}  timming={students[1].timming} />
      <Card id={students[2].id} name={students[2].name} day={students[2].day}  timming={students[2].timming} />
       */}
      {students.map((student, ind) => (
        // <Card key={student.id} id={student.id} day={students.} />
        <Card
          key = {student.id}
          id = {students[ind].id}
          name = {students[ind].name}
          day = {students[ind].day}
          timming = {students[ind].timming}
        />

      ))}

    </div>
  );
}
