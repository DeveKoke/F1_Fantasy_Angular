export interface GPDataResult {
    GP_CircuitImg:string,
    GP_Flag:string,
    GP_Name:string,
    winner:string,
    secondPodium: string,
    thirdPodium:string,
    first_grid:string,
    second_grid:string,
    fastLap:string,
    GSlam?:string,
    HTrick?:string,
    Positions:{
        VER:number,
        PER:number,
        LEC:number,
        SAI:number,
        HAM:number,
        RUS:number,
        ALO:number,
        STR:number,
        OCO:number,
        GAS:number,
        NOR:number,
        PIA:number,
        ZHO:number,
        BOT:number,
        ALB:number,
        SAR:number,
        TSU:number,
        RIC:number,
        MAG:number,
        HUL:number
    }
}