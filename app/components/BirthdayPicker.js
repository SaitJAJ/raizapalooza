'use client'
import {useEffect, useRef, useState} from "react";
import SelectInput from "@/components/SelectInput";

const allMonths= [
    {value:"January",id:'Jan'},
    {value:"February",id:'Feb'},
    {value:"March",id:'Mar'},
    {value:"April",id:'Apr'},
    {value:"May",id:'May'},
    {value:"June",id:'Jun'},
    {value: "July",id:'Jul'},
    {value:"August",id:'Aug'},
    {value:"September",id:'Sep'},
    {value:"October",id:'Oct'},
    {value:"November",id:'Nov'},
    {value:"December",id:'Dec'}
];
export default function BirthdayPicker({label,id,minDate,required = false}){
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

    useEffect(() => {
        if(year === minDate.getFullYear()){
            setMonths(allMonths.slice(0,minDate.getMonth()+1))
        }else{
            setMonths(allMonths)
        }
        document.getElementById("month").focus()
    }, [minDate, year]);
    useEffect(() => {
        const days = new Date(year, allMonths.findIndex(({value})=>value === month)+1, 0).getDate()
        if(year === minDate.getFullYear() && allMonths.findIndex(({value})=>value === month)===minDate.getMonth()){
            setDays(genDays(minDate.getDate()))
        }else{
            setDays(genDays(days))
        }
        document.getElementById("day").focus()

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
        <label className={'grid md:flex select-none my-2 text-left'}>
            <p className={'my-auto md:text-xl text-base sm:min-w-[250px]'}>{label}</p>
            <div className={"flex justify-around rounded-sm text-center grow py-2"}>
                <SelectInput defaultValue={'Year'} id={'year'} required={required} options={years} onChange={(e)=>setYear(parseInt(e.target.value))}/>
                <SelectInput defaultValue={'Month'} id={'month'} required={required} options={months} onChange={(e)=>setMonth(e.target.value)}/>
                <SelectInput defaultValue={'Day'} id={'day'} required={required} options={days} onChange={(e)=>setDay(parseInt(e.target.value))}/>
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
        </label>
    )
}