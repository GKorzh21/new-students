

export default class Get {
    static CreateList = () => {
        const getStudents = async () => {
            let response = await fetch('https://opbpf6ckhl2u2dtadxkcvwav3m0bpxlk.lambda-url.us-east-1.on.aws');
            if (response.ok) {
              let json = await response.json();
              return json
          
            } else {
              alert("Ошибка HTTP: " + response.status);
            }
          }
    }
}