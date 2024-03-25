'use client'
import {useEffect, useRef, useState} from "react";
import SelectInput from "@/components/SelectInput";

const allMonths= [
    {value:"January",id:1},
    {value:"February",id:2},
    {value:"March",id:3},
    {value:"April",id:4},
    {value:"May",id:5},
    {value:"June",id:6},
    {value: "July",id:7},
    {value:"August",id:8},
    {value:"September",id:9},
    {value:"October",id:10},
    {value:"November",id:11},
    {value:"December",id:12}
];
export default function BirthdayPicker({label,minDate,required = false}){
    const suggRef = useRef()
    const [year,setYear] =useState(null)
    const [month,setMonth] =useState(null)
    const [day,setDay] =useState(null)

    const genYears = (days)=>{
        let init = 1900;
        let arr = [];
        while (init <= minDate.getFullYear()){
            arr.push({value:init,id:init})
            init += 1;
        }
        return arr.reverse()
    }
    const genDays = (days)=>{
        let init = 1;
        let arr = [];
        while (init <= days){
            arr.push({value: init, id: init})
            init += 1;
        }
        return(arr);
    }

    const years = genYears()
    const [months,setMonths] =useState([])
    const [days,setDays] =useState([])
    useEffect(()=>{
        console.log(month)
    },[month])

    useEffect(() => {
        if(year === minDate.getFullYear()){
            setMonths(allMonths.slice(0,minDate.getMonth()+1))
        }else{
            setMonths(allMonths)
        }
    }, [minDate, year]);
    useEffect(() => {
        const days = new Date(year, month, 0).getDate()
        if(year === minDate.getFullYear() && month-1 === minDate.getMonth()){
            setDays(genDays(minDate.getDate()))
        }else{
            setDays(genDays(days))
        }

    }, [minDate, month, year]);

    useEffect(() => {
        const form = document.getElementById('form')
        const resetDate=() =>{
            setDay(null)
            setMonth(null)
            setYear(null)
        }
        form.addEventListener('reset',resetDate)
        return()=>{
            form.removeEventListener('reset',resetDate)
        }
    }, []);

    const numDays = (y, m) => new Date(y, m, 0).getDate();
    return(
        <div className={'grid md:flex select-none my-2 text-left'}>
            <p className={'my-auto md:text-xl text-base sm:min-w-[250px]'}>{label}</p>
            <div className={"flex justify-around rounded-sm text-center grow py-2"}>
                <SelectInput defaultValue={'Year'} id={'bday-year'} required={required} options={years} onChange={(e)=>setYear(parseInt(e.target.value))}/>
                <SelectInput defaultValue={'Month'} id={'bday-month'} required={required} options={months} onChange={(e)=>setMonth(e.target.value)}/>
                <SelectInput defaultValue={'Day'} id={'bday-day'} required={required} options={days} onChange={(e)=>setDay(parseInt(e.target.value))}/>
                {/*<select defaultValue={''} id={'year'} className={'w-fit h-[1lh] md:h-[1.5lh] grow'}  >*/}
                {/*    <option id={''} className={'text-center'} value={''} disabled={year!==null}>Year</option>*/}
                {/*    {years.map(year=>{*/}
                {/*        return (*/}
                {/*            <option className={'text-center'} key={year} value={year}>{year}</option>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</select>*/}
                {/*<select defaultValue={''} id={'month'} disabled={year===null} required={required} className={'w-fit h-[1.5lh] grow mx-2'} onChange={(e)=>setMonth(e.target.value)}>*/}
                {/*    <option id={''} className={'text-center'} disabled={month!==null} value={''}>Month</option>*/}
                {/*    {months.map(month=>{*/}
                {/*        return (*/}
                {/*            <option className={'text-center'} key={month} value={month}>{month}</option>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</select>*/}
                {/*<select defaultValue={''}  id={'day'} disabled={month===null} required={required} className={'w-fit h-[1.5lh] grow'} onChange={(e)=>setDay(parseInt(e.target.value))}>*/}
                {/*    <option id={''} className={'text-center'} disabled={month!==null} value={''}>Day</option>*/}
                {/*    {days.map(day=>{*/}
                {/*        return (*/}
                {/*            <option className={'text-center'} key={day.id} value={day.value}>{day.value}</option>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</select>*/}
            </div>
        </div>
    )
}