
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 80,
    songDuration: 3.15,
    song: "3 pecados después",
    details: {
        author: "Milo J",
        year: 2024,
    }

}
// const {song, details} = audioPlayer;
// const { author} = details;
// console.log("La canción que está sonando es : " + song);
// console.log("Y su autor es : " + author);

const employees : string[] =  ['Ben1','Ben2','Ben3','Ben4']; 
const [,,tercero] = employees;
console.log(tercero);






export{};