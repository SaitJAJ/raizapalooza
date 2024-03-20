'use client'
import {useEffect, useRef, useState} from "react";

const allMonths= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
export default function BirthdayPicker({label,id,minDate,required = false}){
    const suggRef = useRef()
    const [year,setYear] =useState(null)
    const [month,setMonth] =useState(null)
    const [day,setDay] =useState(null)

    const genYears = (days)=>{
        let init = 1900;
        let arr = [];
        while (init <= minDate.getFullYear()){
            arr.push(init)
            init += 1;
        }
        return arr.reverse()
    }
    const genDays = (days)=>{
        let init = 1;
        let arr = [];
        while (init <= days){
            arr.push(init)
            init += 1;
        }
        return(arr);
    }

    const years = genYears()
    const [months,setMonths] =useState([])
    const [days,setDays] =useState([])

    useEffect(() => {
        if(year === minDate.getFullYear()){
            setMonths(allMonths.slice(0,minDate.getMonth()+1))
        }else{
            setMonths(allMonths)
        }
        document.getElementById("month").focus()
    }, [year]);
    useEffect(() => {
        const days = new Date(year, allMonths.indexOf(month)+1, 0).getDate()
        if(year === minDate.getFullYear() && allMonths.indexOf(month)===minDate.getMonth()){
            setDays(genDays(minDate.getDate()))
        }else{
            setDays(genDays(days))
        }
        document.getElementById("day").focus()

    }, [month]);
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    return(
        <label className={'grid sm:flex justify-between select-none my-2 text-left'}>
            <p className={'my-auto text-xl min-w-[250px]'}>{label}</p>
            <div className={"flex justify-around h-[2lh] rounded-sm text-center grow py-2 "}>
                <select defaultValue={0} id={'year'} className={'w-full'} required={required} onChange={(e)=>setYear(parseInt(e.target.value))}>
                    <option id={0} className={'text-center'} value={''} disabled={year!==null}>Year</option>
                    {years.map(year=>{
                        return (
                            <option className={'text-center'} key={year} value={year}>{year}</option>
                        )
                    })}
                </select>
                <select defaultValue={0} id={'month'} disabled={year===null} required={required} className={'w-full mx-2'} onChange={(e)=>setMonth(e.target.value)}>
                    <option id={0} className={'text-center'} disabled={month!==null} value={''}>Month</option>
                    {months.map(month=>{
                        return (
                            <option className={'text-center'} key={month} value={month}>{month}</option>
                        )
                    })}
                </select>
                <select defaultValue={0}  id={'day'} disabled={month===null} required={required} className={'w-full'} onChange={(e)=>setDay(parseInt(e.target.value))}>
                    <option id={0} className={'text-center'} disabled={month!==null} value={''}>Day</option>
                    {days.map(day=>{
                        return (
                            <option className={'text-center'} key={day} value={day}>{day}</option>
                        )
                    })}
                </select>
            </div>
        </label>
    )
}