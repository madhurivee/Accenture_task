/**
 * The states have different functions:
    •	'processing' = delay by 2 seconds, then fetch the next state
    •	'error' = handle the error code provided (see below)
    •	'success' = return from the helper with the object: { title: 'Order complete' message: null }
    Handling error codes:
    •	'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
    •	'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
    •	null = return from the helper with an object: { title: 'Error page', message: null }
    •	undefined = return from the helper with an object: { title: 'Error page', message: null }
 */


const getProcessingPage = async (arrayData) => {

    const aa = await arrayData.map( async (data) => {
        const {state} = data
        
        if (state === "processing") {
            return await Promise.resolve(setTimeout(() => {console.log("processing...")}, 2000))
        }
        if (state === "error") {
            
            const aa = helperrrr(data)
            // console.log(aa)
            return aa
        }
        if (state === "success") {
            // console.log(data)
            return helperrrr(data)
        }
    })

    console.log(aa)
}

const helperrrr = (data) => {
    const {state, errorCode} = data   
    
    if(state === "error"){
        if (errorCode === "NO_STOCK") {
            const aa = { title: 'Error page', message: 'No stock has been found' }
            // console.log(aa)
            return aa
        }
        if (errorCode === "INCORRECT_DETAILS") return { title: 'Error page', message: 'Incorrect details have been entered' }
        if (!errorCode) return { title: 'Error page', message: 'Incorrect details have been entered' }
    }
    
    return { title: 'Order complete', message: null }
}

const data = [{ state: 'processing' }, { state: 'error'}]
// const data = [{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }]
// const data = [{ state: 'processing' }, { state: 'success'}]
const aa = getProcessingPage(data)
// console.log(aa)
