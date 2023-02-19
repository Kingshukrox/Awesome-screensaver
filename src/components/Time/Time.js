import Moment from "react-moment";
import 'moment-timezone'
import { DateContainer,TimeContainer,GreetContainer } from "./TimeStyle";


function Time() {
    const dt=new Date()
    const greet=()=>{
        const hrs=dt.getHours();
        if(hrs>=5&&hrs<12) return 'Good Morning, King.'
        else if(hrs>=12&&hrs<17) return 'Good Afternon, King.'
        else if(hrs>=17&&hrs<24) return 'Good Evening, King.'
        else return 'Late Night work?'
    }

    return ( 
    <DateContainer>
        <TimeContainer><Moment format="LT"></Moment></TimeContainer>
        <GreetContainer>{greet()}</GreetContainer>
    </DateContainer> );
}

export default Time;