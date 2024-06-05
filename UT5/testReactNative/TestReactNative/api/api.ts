export const getDogFacts = async () => {
    const url = "https://dogapi.dog/api/v2/breeds"
    try {
        const response = await fetch(url)
        if (response.ok){
            const payload = await response.json()
            return payload
        } else{
            console.error("An error happened.")
            return []
        }
    } catch (error) {
        console.error(error)
    }
}