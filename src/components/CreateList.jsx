import React from 'react'
import CreateDude from './CreateDude'


// const CreateList = () => {
//   const getStudents = async () => {
//     let response = await fetch('https://opbpf6ckhl2u2dtadxkcvwav3m0bpxlk.lambda-url.us-east-1.on.aws');
//     if (response.ok) {
//       let json = await response.json();
//       return json
  
//     } else {
//       alert("Ошибка HTTP: " + response.status);
//     }
//   }
  
  // let Dudes = []
  // getStudents().then((data) => {
  //   Dudes = data;

  //   console.log(Dudes)

  //   return (
  //     <div id='wrap'>
  //         {
  //           Dudes.map((dude) => (
  //             <CreateDude
  //               firstName={dude.firstName}
  //               middleName={dude.middleName}
  //               lastName={dude.lastName}
  //               mMath={dude.mMath}
  //               mRus={dude.mRus}
  //               mOther={dude.mOther}
  //               summ={dude.summ}
  //               id={dude.id}
  //             />
  //           ))
  //         }
  //     </div>
  //   )
  // });

let Dudes = [
    {"mOther": 86, "mRus": 91, "lastName": "Лущеко", "summ": 253, "id": "6da33c4aa", "mMath": 76, "firstName": "Евгений", "middleName": "Федорович"}, 
    {"mOther": 90, "mRus": 78, "lastName": "Корж", "summ": 258, "id": "e9c3e8d4a", "mMath": 90, "firstName": "Герман", "middleName": "Андреевич"},
    {"mOther": 87, "mRus": 88, "lastName": "Хак", "summ": 260, "id": "b83a9fcbe", "mMath": 85, "firstName": "Алия", "middleName": "Евгеньевна"},
    {"mOther": 54, "mRus": 86, "lastName": "Черник", "summ": 218, "id": "a1348fa5a", "mMath": 78, "firstName": "Дмитрий", "middleName": "Юрьевич"},
    {"mOther": 99, "mRus": 99, "lastName": "Тот", "summ": 297, "id": "4c50c7e2c", "mMath": 99, "firstName": "Кого", "middleName": "НадоУдалить"},
    {"mOther": 67, "mRus": 60, "lastName": "Титарев", "summ": 192, "id": "a22ddc113", "mMath": 65, "firstName": "Валентин", "middleName": "Дмитриевич"},
    {"mOther": 95, "mRus": 91, "lastName": "Мишина", "summ": 272, "id": "ef91b8dc6", "mMath": 86, "firstName": "Анастасия", "middleName": "Игоревна"}
]

const CreateList = () => {
  return (
    <div id='wrap'>
        {
          Dudes.map((dude) => (
            <CreateDude
              firstName={dude.firstName}
              middleName={dude.middleName}
              lastName={dude.lastName}
              mMath={dude.mMath}
              mRus={dude.mRus}
              mOther={dude.mOther}
              summ={dude.summ}
              id={dude.id}
            />
          ))
        }
    </div>
  )
}


export default CreateList