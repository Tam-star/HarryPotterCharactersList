export function getStudents() {
    const url = 'http://hp-api.herokuapp.com/api/characters/students';
    const options = {
        method: 'GET'
    }

    return fetch(url, options)
        .then(reponse => reponse.json())
        .catch(err => console.log("Something is wrong : ", err))
}

export default async function getStudentsByName(name) {
    const listOfStudents = await getStudents()
    return listOfStudents.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()))
}
