
export const SET = (k,v)=>
    localStorage.setItem(k,JSON.stringify(v));

export const GET = (k  )=>
    JSON.parse(localStorage.getItem(k));
