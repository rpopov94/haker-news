export const getDate = (secs : number) =>{
    const t = new Date();
    t.setMilliseconds(secs);
    return `${t.getUTCDay() + 1}/${t.getMonth()}/${t.getFullYear()}`
}