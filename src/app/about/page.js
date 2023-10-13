async function takeTime(){
    await new Promise((resolve)=>{
        throw new Error("this is manual error")
        setTimeout(resolve,3000);
    })
}

const About=async ()=>{
    await takeTime();
    return(
        <div>
            <h1>This is about route.</h1>
        </div>
    )
}

export default About