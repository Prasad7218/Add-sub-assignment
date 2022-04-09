import { useState } from "react";
import Button1 from "../Button1/Button1";
import Button2 from "../Button2/Button2";
import Input from "../Input/Input";
import Output from "../Output/Output";

const Addsub=()=>{

    const[input,setInput]=useState('');
    const[result,setResult]=useState('20');

    const changeHandler=(event)=>{
        const value=event.target.value;
        setInput(value);
    }

    const btnHandler1=()=>{
        console.log("clicked");
        const res=(+result)+(+input);
        setResult(res);

    }

    const btnHandler2=()=>{
        console.log("clicked");
        const tot=(+result)-(+input);
        setResult(tot);

    }

    return(
        <>
        <Input value={input} changeHandler={changeHandler}/>
        <Button1 btnHandler1={btnHandler1}/>
        <Button2 btnHandler2={btnHandler2}/>
        <Output value={result}/>
        </>
    )
}
export default Addsub;