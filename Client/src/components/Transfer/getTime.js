const GetTime = () => {

        var now = new Date();
        var month = now.getMonth() + 1;
        var datee = now.getDate();
        var year = now.getFullYear();
        const date = `${datee}/${month}/${year}`;
      
        let hours = now.getHours();
        let min = now.getMinutes();
      
        let periods = "AM";
        if (hours > 11) {
          periods = "PM";
          if (hours > 12) {
            hours -= 12;
          }
        }
      
        if (min < 10) {
          min = "0" + min;
        }
        const time = `${hours}:${min} ${periods}`;
    return {
        date, time
    }
}

export default GetTime;