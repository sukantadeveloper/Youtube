export const ERRORDATA = 'ERRORDATA';
export const SUCCESSDATA = 'SUCCESSDATA';
export const LOADINGDATA = 'LOADINGDATA';




export const ErrorData = () => ({
    type: ERRORDATA
})

export const SuccessData = (data) => ({
    type: SUCCESSDATA,
    payload: data
})

export const LoadingData = () => ({
    type: LOADINGDATA
})