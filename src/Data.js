export const API_KEY = 'AIzaSyBQ8HGK4UjOh2vRG-lCXJ-4SuLsT1QI8-M'

export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+'M'
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+'k'
    }
    else{
        return value
    }
}