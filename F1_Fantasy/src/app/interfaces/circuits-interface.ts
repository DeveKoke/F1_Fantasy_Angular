export interface CircuitInterface {
    circuit:string;
    locationName:string;
    flag:string;
    shape:string;
    imgSectors:string;
    raceDate:string;
    long: number;
    laps: number;
    lastPoleTime: string;
    lastPoleDriver: string;
    lapRecordTime: string;
    lapRecordDriver: string;
    lastPodium: {
        winner: string;
        winnerName: string;
        second: string;
        secondName: string;
        third: string;
        thirdName:string;
    }
    location: {
        lat:number;
        lng:number;
    };

}