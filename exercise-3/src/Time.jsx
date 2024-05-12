function Time() {
    let date = new Date();
    return(
        <h2>
            {date.getHours().toLocaleString()+":"+date.getMinutes().toLocaleString()+":"+date.getSeconds().toLocaleString()+"PM"}
        </h2>
    );
}

export default Time;