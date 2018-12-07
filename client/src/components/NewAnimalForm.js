import React from 'react';

const NewAnimalForm = ({onNewAnimal = f => f}) => {
    let name, breed
    const submit = e => {
        e.preventDefault()
        onNewAnimal(name.value, breed.value)
        name.value = ''
        breed.value = ''
        name.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => name = input}
                    type="text"
                    placeholder="Name..." required />
            <input  ref={input => breed = input}
                    type="text"
                    placeholder="Breed..." required />
            <button>Save</button>
        </form>
    )
}

export default NewAnimalForm;
