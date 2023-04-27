

export default function Age (props){
    if(props.age > 18){
    return(
       <><p>Your age is {props.age}</p></>
    ) } else{return(
    <><p>Sito per adulti accesso negato!Chiedi il permesso a papà</p></>
    )}

}