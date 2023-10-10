export interface CircuitInterface {
    circuit:string;
    locationName:string;
    flag:string;
    shape:string;
    imgSectors:string;
    raceDate:string;
    long: number;
    laps: number;
    // lastPole: string;
    // lapRecord: string;
    // lastPodium: {
    //     winner: string;
    //     second: string;
    //     third: string;
    // }
    location: {
        lat:number;
        lng:number;
    };

}