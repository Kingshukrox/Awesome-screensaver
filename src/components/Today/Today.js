import { DateContainer } from "./TodayStyle";

function Today() {
    const dt=new Date()
    const date=dt.getDate()+'/'+dt.getMonth()+'/'+dt.getFullYear()
    return ( 
        <DateContainer>
            <p>{date}</p>
        </DateContainer>
        );
}

export default Today;