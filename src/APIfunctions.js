export function getStudents() {
    const url = 'https://hp-api.herokuapp.com/api/characters/students';
    const options = {
        method: 'GET'
    }

    return fetch(url, options)
        .then(reponse => reponse.json())
        .catch(err => console.log("Something is wrong : ", err))
}

export default async function getStudentsByName(name) {
    const listOfStudents = await getStudents()
    //Because there is twice the same name (Theodore Nott)
    listOfStudents.splice(listOfStudents.length-2,1)

    return listOfStudents.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()))
}


export function getStudentsFilteredByHouse (listOfStudents, houseFilter){
    return listOfStudents.filter((student) => student.house === houseFilter)
}