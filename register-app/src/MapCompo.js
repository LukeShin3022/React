function MapCompo(){
    // const studentName = ['Luke','Marcelo','Kathleen','Henry','Akane','Haruka'];
    const studentName = [
        {name:"Luke", mood:"Goin Home", mark:60},
        {name:"Henry", mood:"bored", mark:70},
        {name:"Mamiko", mood:"Processing", mark:80},
        {name:"Milad", mood:"Teaching", mark:90}
    ];

    let sum = 0;
    let counter = 0;
    let min = 200;
    let max = 0;
    let maxname;
    let minname;

    studentName.map((val)=>{
        sum += val.mark;
        counter ++;
    });

    studentName.map((val)=>{
        if(max<val.mark){
            max = val.mark;
            maxname = val.name;
        }

        if(min > val.mark){
            min = val.mark;
            minname = val.name;
        }
    })
 

    return(
        <>
            <ul>
                {/* {studentName.map((val,idx)=><li>{idx}:{val.name} {val.mood}</li>)} */}
                {studentName.map((val,idx)=><li key={idx}>{idx}:{val.name} {val.mood}</li>)}
            </ul>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mood</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody>
                    {studentName.map((val,idx)=><tr key = {idx}><td>{val.name}</td><td>{val.mood}</td><td>{val.mark}</td></tr>)}
            </tbody>
            <h2>{sum/counter}</h2>

            <h3>MAX : {max}{maxname} MIN : {min}{minname} </h3>
        </>
    )

}

export default MapCompo;