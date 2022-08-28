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

const CreateList = ({setIdToDelete, list}) => {
  return (
    <div id='wrap'>
        { 
          list.map((dude) => (
            <CreateDude
              setIdToDelete={setIdToDelete}
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