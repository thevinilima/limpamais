let formRegister = document.querySelector(".sign-up-form")

formRegister.addEventListener("submit", async function(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())
    //formData.delete('user-type');
    try{
        const response = await fetch("http://localhost:3000/users", {

            method: 'POST',
            body: formData
        });
    

    }
    catch(error){
        console.log(error)

    }

 
});

